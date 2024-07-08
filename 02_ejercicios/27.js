// 27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.
//* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
  constructor ({ id, title, director, year, countries, genres, qualification }) {
    // id validations
    if (!id) throw new Error('id is required')
    if (typeof id !== 'string') throw new Error('id is not a string')
    if (!/^[a-z]{2}[0-9]{7}$/.test(id)) throw new Error('invalid id')
    this.id = id

    // title validations
    if (!title) throw new Error('title is required')
    if (typeof title !== 'string') throw new Error('title is not a string')
    if (!/^[a-z0-9\s]{5,100}$/i.test(title)) throw new Error('invalid title')
    this.title = title

    // director validations
    if (!director) throw new Error('director is required')
    if (typeof director !== 'string') { throw new Error('director is not a string') }
    if (!/^[a-z\s]{5,50}$/i.test(director)) throw new Error('invalid director')
    this.director = director

    // year validations
    if (!year) throw new Error('year is required')
    if (typeof year !== 'number') throw new Error('year is not a number')
    if (!/^[0-9]{4}$/.test(year)) throw new Error('invalid year')
    this.year = year

    // countries validations
    if (!countries) throw new Error('countries is required')
    if (!countries instanceof Array) { throw new Error('countries is not an array') }
    if (countries.length === 0) throw new Error('countries is empty')
    for (const country of countries) {
      if (typeof country !== 'string') { throw new Error('the elements are not string') }
    }
    this.countries = countries

    // genre validations
    if (!genres) throw new Error('genres is required')
    if (!(genres instanceof Array)) throw new Error('genres is not an array')
    if (genres.length === 0) throw new Error('genres is empty')
    for (const genre of genres) {
      if (typeof genre !== 'string') throw new Error('genres are not string')
      if (!Pelicula.getAcceptedGenres.includes(genre)) { throw new Error('genres are not accepted') }
    }
    this.genres = genres

    // qualification validations
    if (!qualification) throw new Error('qualification is required')
    if (typeof qualification !== 'number') { throw new Error('qualification is not a number') }
    if (qualification > 10 || qualification < 0) { throw new Error('qualification is not between 0 and 10') }
    this.qualification = qualification.toFixed(1)
  }

  static get getAcceptedGenres () {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western'
    ]
  }

  get getInformation () {
    return {
      id: this.id,
      title: this.title,
      director: this.director,
      year: this.year,
      countries: this.countries,
      genres: this.genres,
      qualification: this.qualification
    }
  }
}

const pelis = [
  {
    id: 'tt0137523',
    title: 'Fight Club',
    director: 'David Fincher',
    year: 1999,
    countries: ['USA'],
    genres: ['Drama'],
    qualification: 8.8
  },
  {
    id: 'tt0816692',
    title: 'Interestellar',
    director: 'Christopher Nolan',
    year: 2014,
    countries: ['USA', 'England'],
    genres: ['Adventure', 'Drama'],
    qualification: 8.6
  },
  {
    id: 'tt1205489',
    title: 'Gran Torino',
    director: 'Clint Eastwood',
    year: 2008,
    countries: ['USA'],
    genres: ['Drama'],
    qualification: 8.1
  }
]

pelis.forEach(pelicula => console.log(new Pelicula(pelicula).getInformation))
