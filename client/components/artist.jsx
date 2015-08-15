var React = require('react');

var App = React.createClass({

    propTypes: {
      name: React.PropTypes.string
    },

    render: function() {
      return (
        <div>
          <a href='#' onClick={ this.props.onClick }>{ this.props.name }</a>
        </div>
      );
    }

  });

module.exports = App;