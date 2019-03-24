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
                                    BoardGame Sommelier
                                </Header>
                                <p>
                                    Copyright © 2019- BoardGame Sommelier All Rights Reserved.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}