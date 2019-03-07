import * as React from "react";

import { Segment, Grid, Header } from "semantic-ui-react";

export interface Props {
}

export interface State {
}

export default class NotFound extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);   
    }

    render(): JSX.Element {
        return (
            <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as="h3" style={{ fontSize: "2em" }}>
                            404 Not Found
                        </Header>
                        <p style={{ fontSize: "1.33em" }}>
                            このページは存在しません
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        )
    }
}