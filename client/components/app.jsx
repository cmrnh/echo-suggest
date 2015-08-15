var React = require('react');

var App = React.createClass({

    handleSearchClick: function() {
      var artistName = React.findDOMNode(this.refs.artistName); // get the DOM node
      artistName.value = ''; // clear the input
    },

    render: function(){
      return (
        <div>
          <h1>EchoSuggest</h1>
          <input placeholder='artist name' />
          <button onClick={ this.handleSearchClick }>Search</button>
        </div>
      );
    }

  });

module.exports = App;