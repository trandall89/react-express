import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import Header from './header'
import PropTypes from 'prop-types'
import ContestPreview from './ContestPreview'

class App extends Component {
  state = {
    pageHeader: "Yo fuck you"
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
        {this.props.contests.map(contest =>
          <ContestPreview {...contest} />
        )}

        </div>
      </div>
    );
  }
}

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
