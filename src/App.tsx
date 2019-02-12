import * as React from "react";

import ResponsiveHeader from "./components/ResponsiveHeader"

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
            </div>
        );
    }
}