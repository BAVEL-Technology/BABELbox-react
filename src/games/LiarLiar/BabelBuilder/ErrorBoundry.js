import { useNavigation } from "react-navi";
import React, { useContext, useState, useEffect } from "react";

export default class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.navigation = useNavigation();
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    this.navigation.navigate('/liarliar');
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
