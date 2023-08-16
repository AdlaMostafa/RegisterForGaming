import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {hasError : false};
    static getDrivedStateFromError(error){
        return{ hasError: true };
    }
    componentDidCatchError = (err,errinfo)=>{
     console.log(err,errinfo)
    }
  render() {
    if (this.state.hasError) {
        return <h2>Opps🤗!!! Something wrong</h2>
    }
    return this.props.children;
  }
}
