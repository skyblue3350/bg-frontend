import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResponsiveHeader from "./components/ResponsiveHeader"
import TopPage from "./routes/TopPage";
import LoginPage from "./routes/LoginPage";
import Footer from "./components/Footer"
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
                        <Route path="/" exact component={TopPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}