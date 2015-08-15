var React = require('react');
var http = require('axios');
var _ = require('lodash');

var Artist = require('./artist.jsx');

var App = React.createClass({

    getInitialState: function() {
      return {
        suggestedArtists: []
      }
    },

    handleSearchClick: function(e) {
      var artistName = React.findDOMNode(this.refs.artistName); // get the DOM node

      http({
        method: 'get',
        url: 'http://developer.echonest.com/api/v4/artist/similar',
        headers: { 
          'Content-Type': 'application/json' 
        },
        params: {
          'name': artistName.value,
          'api_key': 'NXYHVSJ5L3KAWFU6W'
        }
      }).then(function(response) {
        this.setState({
          suggestedArtists: response.data.response.artists
        })
      }.bind(this));

      artistName.value = ''; // clear the input
    },

    handleArtistClick: function(e) {
      http({
        method: 'get',
        url: 'http://developer.echonest.com/api/v4/artist/similar',
        headers: { 
          'Content-Type': 'application/json' 
        },
        params: {
          'name': e.target.text,
          'api_key': 'NXYHVSJ5L3KAWFU6W'
        }
      }).then(function(response) {
        this.setState({
          suggestedArtists: response.data.response.artists
        })
      }.bind(this));
    },

    render: function() {
      return (
        <div>
          <h1>Echo Suggest</h1>
          <input placeholder='artist name' ref='artistName' />
          <button onClick={ this.handleSearchClick }>Search</button>
          <div>
            { _.map(this.state.suggestedArtists, function(artist, i) {
              return (
                <Artist name={ artist.name } onClick={ this.handleArtistClick } />
              )
            }, this) }
          </div>
        </div>
      );
    }

  });

module.exports = App;