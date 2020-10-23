import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
  
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.movie.id}>
   
      <tbody>
      <tr>
        <td className="flex">
          <img alt="poster" width="150" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h2>{this.props.movie.title}</h2>
          <h4 className="head">{this.props.movie.overview}</h4>
          <input style={{
color:"red",
fontFamily:"revert"
          }} 
          type="button" onClick={this.viewMovie.bind(this)} value="watch"/>
        </td>
      </tr>
      </tbody>
    
  </table>
  }
}

export default MovieRow