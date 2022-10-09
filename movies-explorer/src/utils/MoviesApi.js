class MoviesApi {
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

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {      
      "Content-Type": "application/json",
  },  
    }).then(this._checkResponse);
  }
  
}

export const moviesapi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',  
});
