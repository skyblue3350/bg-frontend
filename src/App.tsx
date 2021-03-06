import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResponsiveHeader from "./components/ResponsiveHeader"
import TopPage from "./routes/TopPage";
import LoginPage from "./routes/LoginPage";
import NotFound from "./routes/404";
import Database from "./routes/Database";
import Logout from "./routes/Logout";
import Register from "./routes/Register";
import Footer from "./components/Footer";

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
                        <Route path="/" exact component={TopPage} />
                        <Route path="/database/" exact component={Database} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/register" component={Register} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}