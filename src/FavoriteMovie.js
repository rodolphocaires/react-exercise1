import React, { Component } from 'react';

class FavoriteMovie extends Component {
	render () {
      console.log(this.props.profiles);
    	return (
        	<ul>
          	{ this.props.profiles.map((profile) => (
          		<li key={profile.id}>{ this.props.users[profile.userID].name }'s favorite movie is { this.props.movies[profile.favoriteMovieID].name }</li>
        	)) }
          	</ul>
        )
    }
}

export default FavoriteMovie;