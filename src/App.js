import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow'
import $ from 'jquery';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}


    this.performSearch("Avengers")
  }

  performSearch(searchTerm) {
    // console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=123823b42a07b688292a67c076743569&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        // console.log("Fetched data successfully")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
     
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        
        <div className="titleBar">
          <header id="header">
          </header>
          <div>
            <div>
              <td>
                <img alt="app icon" width="70" src="https://www.flaticon.com/premium-icon/icons/svg/3178/3178393.svg"/>
              </td>
              <td width="8"/>
              <div>
                <h1>WE CAN FIND ANY MOVIE</h1>
              </div>
            </div>
          </div>
        </div>

        <input 
        style=
        {{
          fontSize: 14,
          display: 'block',
          width: "30%",
          paddingTop: 8,
         
          borderRadius:16,textAlign:"center",
          marginTop:19,
          marginLeft:"35%",
          color:"red"

        }} 
        
        onChange={this.searchChangeHandler.bind(this)} placeholder="Search Movie"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
// https://image.tmdb.org/t/p/w185