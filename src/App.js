import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Tabletop from "tabletop";

import MainPage from "./containers/MainPage/MainPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import ShopPage from "./containers/ShopPage/ShopPage";
import YMInformer from "./components/YM/index";
import testData from "./data/shops.json";

import classes from "./App.module.css";

//
// NOTE!
// Google Sheets is being read with the help of this article:
// https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59
//
const spreadSheetKey = "1rg0Wkb4E1MccFnNJcasmn4uUwxNXDOs_ObeOC9MyYiM";

const App = props => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: spreadSheetKey,
      callback: setDataFromGS,
      simpleSheet: true
    });
  }, []);

  const setDataFromGS = sheets => {
    setLoading(false);
    setData(sheets.length === 0 ? testData : sheets);
  };

  const changeSearchGroup = searchValue => {
    setSearchValue(searchValue);
    props.history.push(`/search`);
  };

  const changeSearchValue = event => {
    setSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue("");
  };

  return (
    <div className={classes.App}>
      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={routeProps => (
              <MainPage
                {...routeProps}
                isLoadingData={isLoading}
                searchValue={searchValue}
                clearSearchValue={clearSearchValue}
                changeSearchCategory={changeSearchGroup}
              />
            )}
          />
          <Route
            path="/search"
            render={routeProps => (
              <SearchPage
                {...routeProps}
                hashTageSearch={changeSearchGroup}
                isLoadingData={isLoading}
                changeSearchValue={changeSearchValue}
                data={data}
                searchValue={searchValue}
              />
            )}
          />
          <Route
            path="/shop/:id"
            render={routeProps => (
              <ShopPage
                {...routeProps}
                hashTageSearch={changeSearchGroup}
                data={data}
                isLoadingData={isLoading}
              />
            )}
          />
        </Switch>
      </main>
      <footer>
        <YMInformer />
      </footer>
    </div>
  );
};

export default withRouter(App);
