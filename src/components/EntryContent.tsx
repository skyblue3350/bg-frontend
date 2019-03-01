import * as React from "react";
import styled from "styled-components";

import {
    Container,
    Header,
    Segment,
    Grid,
} from "semantic-ui-react"

const CustomSegment = styled(Segment)`
    min-height: 700px;
`

export interface Props {
}

export interface State {
}

export default class EntryContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <Segment style={{ padding: "8em 0em" }} vertical>
                    <Grid container stackable verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as="h3" style={{ fontSize: "2em" }}>
                                    We Help Companies and Companions
                                </Header>
                                <p style={{ fontSize: "1.33em" }}>
                                    We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as="h3" style={{ fontSize: "2em" }}>
                                    We Make Bananas That Can Dance
                                </Header>
                                <p style={{ fontSize: "1.33em" }}>
                                    Yes that"s right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated="right" width={6}>
                                画像を入れる
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: "8em 0em" }} vertical>
                    <Container text>
                        <Header as="h2" style={{ fontSize: "2.5em" }}>
                            FAQ
                        </Header>
                        <Header as="h3" style={{ fontSize: "2em" }}>
                            Breaking The Grid, Grabs Your Attention
                        </Header>
                        <p style={{ fontSize: "1.33em" }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the
                            art of doing nothing by providing massive amounts of whitespace and generic content that
                            can seem massive, monolithic and worth your attention.
                        </p>
                    </Container>
                </Segment>
            </div>
        )
    }
}