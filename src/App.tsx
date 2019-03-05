import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ResponsiveHeader from "./components/ResponsiveHeader"
import EntryHeader from "./components/EntryHeader"
import EntryContent from "./components/EntryContent"
import LoginForm from "./components/LoginFrom"
import Footer from "./components/Footer"


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
                        <Route path="/" exact component={EntryHeader} />
                        <Route path="/" exact component={EntryContent} />
                        <Route path="/login" component={LoginForm} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}