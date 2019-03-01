import * as React from "react";

import ResponsiveHeader from "./components/ResponsiveHeader"
import EntryHeader from "./components/EntryHeader"
import EntryContent from "./components/EntryContent"
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
            <div>
                <ResponsiveHeader />
                <EntryHeader />
                <EntryContent />
                <Footer />
            </div>
        );
    }
}