import * as React from "react";

import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

export interface Props {
}

export interface State {
}

export default class ResponsiveHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <DesktopHeader />
                <MobileHeader />
            </div>
        );
    }
}