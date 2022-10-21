class Api {
  constructor({ baseUrl }) {    
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {    
      authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
  },  
    }).then(this._checkResponse);
  }

  editProfile({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {    
      authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
  },  
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {    
      authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
  },  
    }).then(this._checkResponse);
  }  

  createMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {    
      authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
  },  
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration, 
        year: data.year, 
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
        movieId: data.id,        
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {    
      authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
  },  
    }).then(this._checkResponse);
  }  
  
}

export const api = new Api({
  baseUrl: 'https://api.diplomivanov.nomorepartiesxyz.ru',  
});
