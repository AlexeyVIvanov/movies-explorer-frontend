import React from 'react';

import { Route, Switch, } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {  

  return (
    <div className="common root">
      <div className="page">                     
        <Switch>
          <Route exact path="/"> 
            <Main />           
          </Route>          
          <Route path="/signup">
            <Register />            
          </Route >            
          <Route path="/signin">
            <Login />            
          </Route>          
          <Route path="/movies">
            <Movies />            
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />            
          </Route>
          <Route path="/profile">
            <Profile />            
          </Route>
        </Switch>        
      </div>     
    </div>
  );
}

export default App;
