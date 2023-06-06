export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export type DataEntityMap = {
  movie: Movie;
  song: Song;
};

export class DataStore {
  songs: Song[];
  movies: Movie[];
  constructor(songs: Song[] = [], movies: Movie[] = []) {
    this.songs = songs;
    this.movies = movies;
  }

  addSong(song: Song) {
    this.songs.push(song);
    return song;
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
    return movie;
  }

  getAllSongs(): Song[] {
    return this.songs;
  }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  clearSongs() {
    this.songs = [];
  }

  clearMovies() {
    this.movies = [];
  }
}
