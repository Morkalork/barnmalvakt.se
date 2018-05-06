import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * This solution was suggested on ReactTrainings github account:
 * https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
 */
class ScrollToTop extends Component {
  componentDidMount(prevProps) {
    if (!prevProps || this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)