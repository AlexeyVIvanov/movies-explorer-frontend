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
  const [movies, setMovies] = React.useState([]);
  
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

  const handleSearchFilm = () => {
    moviesapi
      .getMovies()
      .then(({ movie }) => {        
        setMovies(movie);        
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  };

  // отобразить массив фильмов

  React.useEffect(() => {
    if (loggedIn) {
      moviesapi
      .getMovies()
      .then(({ movie}) => {        
        setMovies(movie);        
      })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }, [loggedIn]);

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
            />
            <ProtectedRoute
              exact
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              handleSearchFilm={handleSearchFilm}
              movies={movies}              
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
