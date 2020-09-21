import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import SearchHeader from "./components/SearchHeader";
import GlobalStyles from "./styles/GlabalStyles";
import Theme from "./styles/Theme";
import Routes from "./components/Routes";
import { connect } from "react-redux";
import { fetchDataStarted } from "./actions";
import "antd/dist/antd.css";
import "semantic-ui-css/semantic.min.css";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

class App extends Component {
  onSearchStores = (params) => {
    this.props.dispatch(fetchDataStarted(params));
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Router>
            <>
              <SearchHeader onSearchStores={this.onSearchStores} />
              <Wrapper>
                <Routes onSearchStores={this.onSearchStores} all={this.props} />
              </Wrapper>
            </>
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

let mapStateToProps = (state) => {
  const { stores, isLoading, error } = state.stores;
  return { stores, isLoading, error };
};

App = connect(mapStateToProps, null)(App);

export default App;
