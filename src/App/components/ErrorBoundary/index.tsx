import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super();
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          {this.props.name ? (
            <h3>
              Sorry Something went wrong on {this.props.name}!
            </h3>
          ) : (
            <h3>Sorry Something went wrong!</h3>
          )}
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.info.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}