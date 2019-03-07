import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResponsiveHeader from "./components/ResponsiveHeader"
import LoginForm from "./components/LoginFrom"
import Footer from "./components/Footer"
import Top from "./routes/top";
import NotFound from "./routes/404";


export interface Props {
}

export interface State {
}

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Router basename="/">
                <div>
                    <ResponsiveHeader />
                    <Switch>
                        <Route path="/" exact component={Top} />
                        <Route path="/login" component={LoginForm} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}