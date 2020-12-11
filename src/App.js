// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Cards from "./components/Cards";
import Album from "./components/Album";
import Footer from "./components/Footer"

export default function App() {
  const routes = ["/cards", "/album"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >
                {console.log(history.location.pathname)}
                <Tab
                  value={routes[0]}
                  label="Developer API"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="DOCUMENTATION"
                  component={Link}
                  to={routes[1]}
                />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route path="/cards" component={Cards} />
          <Route path="/album" component={Album} />
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
