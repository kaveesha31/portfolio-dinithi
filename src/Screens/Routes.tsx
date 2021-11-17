import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";

const Routes = () => {

    return (
        <Router basename="/">
            <Switch>
                <Route
                    path="/home"
                    component={() => {
                        return <Home />;
                    }}
                />
            </Switch>
        </Router>
    )

}

export default Routes;