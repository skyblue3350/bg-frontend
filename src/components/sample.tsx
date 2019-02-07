import * as React from "react";
import { Button, Loader, Icon, Label } from "semantic-ui-react"

export interface Props {

}

export default class Sample extends React.Component<Props, {value: string;}> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Button>a</Button>
        );
    }
}

