import React from 'react';

import { 
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { api } from "../../utils/MainApi";
import { moviesapi } from "../../utils/MoviesApi";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import * as Auth from "../../utils/Auth";

function App() {  

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  // массив всех фильмов
  const [movies, setMovies] = React.useState([]);  
  // массив сохраненных фильмов 
  const [savedMovies, setSavedMovies] = React.useState([]);
  // счетчик фильмов на странице
  const [counterMovies, setCounterMovies] = React.useState(0);
  // состояние чекбокса
  const [checkBox, setCheckBox] = React.useState(false);
  const [preload, setPreload] = React.useState(false);
  
  const history = useHistory();

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      // проверим токен
      Auth.getContent(token)
        .then((res) => {
          if (res) {
            // здесь можем получить данные пользователя!
            let userData = {
              name: res.data.name,
              email: res.data.email,
            };

            setLoggedIn(true);
            setCurrentUser(userData);
          }
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn, history]);

  const handleRegister = ({ name, email, password }) => {
    return Auth.register(name, email, password)
      .then(() => {                  
        setLoggedIn(true);          
        history.push("/movies");        
      })
      .catch((err) => {
        console.log("err", err); // выведем ошибку в консоль        
      });
  };

  const handleLogin = ({ email, password }) => {
    return Auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          tokenCheck();
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);        
      });
  };

  function onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("inputValue");
    localStorage.removeItem("checkbox");
    localStorage.removeItem("films");
    setLoggedIn(false);    
    history.push("/");
  }

  const handleEditProfile = ({ name, email }) => {
    api
      .editProfile({ name, email })
      .then(({ name, email }) => {        
        setCurrentUser({ ...currentUser, name, email });        
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }; 

  // поиск фильма
  const handleSearchFilm = (inputValue) => {
    setPreload(true);
    localStorage.setItem("inputValue", inputValue);
    localStorage.setItem("checkbox", checkBox);
      moviesapi
      .getMovies()
      .then((movies) => {
        const films = checkBox ? movies.filter(movie => (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                                 movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) && movie.duration <= 40)
                               : movies.filter(movie => (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                                 movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())));
          setMovies(films)       
        localStorage.setItem("films", JSON.stringify(films));        
      })    
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => { 
        setPreload(false)
      })
  };

  // показ 7 фильмов
  React.useEffect(() => {     
    setCounterMovies(7)   
  }, [])

  // показ еще 7 фильмов
  function handleMoreMovies() {    
      setCounterMovies(counterMovies+7);    
  }

  // функция состояния чекбокса
  function handleCheckBox() { 
    if (!checkBox) {
      setCheckBox(true)
    } else {
      setCheckBox(false)
    }    
    //setCheckBox(true);    
  }

  //* Получение массива сохраненных фильмов
  //React.useEffect(() => {
  //  if (loggedIn) {
  //    api
  //      .getSavedMovies()
  //      .then((movies) => {
  //        setSavedMovies(movies);
  //      })
  //      .catch(err => {
  //        console.log(err);
  //      })
  //  }
  //}, [loggedIn]);


  //* Получение массива сохраненных фильмов
  const handleSavedFilm = (inputValue) => {    
      api
      .getSavedMovies()
      .then((movies) => {
        console.log(movies)
        const films = checkBox ? movies.filter(movie => (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                                 movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) && movie.duration <= 40)
                               : movies.filter(movie => (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                                 movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())));
        setSavedMovies(films)                                      
      })    
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  };

  //* Сохранение фильма
  function handleSaveMovie(data) {
    api
      .createMovie(data)      
      .then(({ data: movie }) => {        
        console.log(movie)
        setSavedMovies([movie, ...movies]);        
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="common root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>                     
          <Switch>
            <Route exact path="/">
              <Main />            
            </Route >            
            <ProtectedRoute
              exact
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              handleSearchFilm={handleSearchFilm}
              movies={movies}
              counterMovies={counterMovies}
              handleMoreMovies={handleMoreMovies}
              handleCheckBox={handleCheckBox}
              onLikeClick={handleSaveMovie}
              preload={preload}                            
            />
            <ProtectedRoute
              exact
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              handleSavedFilm={handleSavedFilm}
              movies={savedMovies}                
              counterMovies={counterMovies}
              handleCheckBox={handleCheckBox}             
            />
            <ProtectedRoute
              exact
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onLogout={onLogout}
              handleEditProfile={handleEditProfile}              
            />            
            <Route path="/signup">
              <Register handleRegister={handleRegister} />            
            </Route >            
            <Route path="/signin">
              <Login handleLogin={handleLogin} />            
            </Route>
            <Route>
              {!loggedIn ? <Redirect to="/signin" /> : <Redirect to="/movies" />}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>        
      </div>     
    </div>
  );
}

export default App;
