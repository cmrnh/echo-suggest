var React = require('react');
var _ = require('lodash');

var App = React.createClass({

    getInitialState: function() {
      return {
        suggestedArtists: []
      }
    },

    handleSearchClick: function(e) {
      var artistName = React.findDOMNode(this.refs.artistName); // get the DOM node
      artistName.value = ''; // clear the input

      // TODO: Send artist name to echonest
      // For now, we'll use mock data
      this.setState({
        suggestedArtists: [
          { "id": "ARYJFJ91187B9B149A", "name": "The Wilderness" },
          { "id": "ARGOAEZ122988F2731", "name": "Big a" },
          { "id": "AREBMWM11F50C47FFC", "name": "Fantastic Four" },
          { "id": "ARGMRZU1187B9B6981", "name": "The Heaters" },
          { "id": "ARDLOZD1187B9B98A8", "name": "Boundless" },
          { "id": "ARVXBOT1187B992D93", "name": "City to City" },
          { "id": "ARUAQW51187B994266", "name": "Private Dancer" },
          { "id": "ARSBVCE1187B99BE74", "name": "Hearts of Stone" },
          { "id": "ARCF56Q1187FB55282", "name": "Airliner" }
        ]
      });
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
                <div>
                  <a href='#'>{artist.name}</a>
                </div>
              )
            }, this) }
          </div>
        </div>
      );
    }

  });

module.exports = App;