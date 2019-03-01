import * as React from "react";
import styled from "styled-components";

import {
    Container,
    Button,
    Header,
    Icon,
    Segment,
    Grid,
} from "semantic-ui-react"

export interface Props {
}

export interface State {
}

export default class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <Segment inverted vertical style={{ padding: "5em 0em" }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header as="h4" inverted>
                                    Footer Header
                                </Header>
                                <p>
                                    Extra space for a call to action inside the footer that could help re-engage users.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}