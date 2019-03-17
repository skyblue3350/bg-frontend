import * as React from "react";

import EntryHeader from "../components/EntryHeader";
import EntryContent from "../components/EntryContent";

interface Props {
}

interface State {
}

export default class TopPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);   
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <EntryHeader/>
                <EntryContent/>
            </React.Fragment>
        )
    }
}