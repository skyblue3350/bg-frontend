import * as React from "react";

import EntryHeader from "../components/EntryHeader";
import EntryContent from "../components/EntryContent";

export interface Props {
}

export interface State {
}

export default class Top extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);   
    }

    render(): JSX.Element {
        return (
            <div>
                <EntryHeader/>
                <EntryContent/>
            </div>
        )
    }
}