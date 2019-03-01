import * as React from "react";
import styled from "styled-components";

import {
    Container,
    Button,
    Header,
    Icon,
    Segment,
} from "semantic-ui-react"

const CustomSegment = styled(Segment)`
    min-height: 700px;
`

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
                <CustomSegment inverted textAlign="center">
                    <Container text>
                        <Header
                            as="h1"
                            content="BoardGame Sommelier"
                            inverted
                            style={{
                                fontSize: "4em",
                                fontWeight: "normal",
                                marginBottom: 0,
                                marginTop: "3em",
                            }}
                        />
                        <Header
                            as="h2"
                            content="あなたのボードゲームを管理します"
                            inverted
                            style={{
                                fontSize: "1.7em",
                                fontWeight: "normal",
                                marginTop: "1.5em",
                            }}
                        />
                        <Button primary size="huge">
                            Get Started
                            <Icon name="arrow right" />
                        </Button>
                    </Container>
                </CustomSegment>
            </div>

        )
    }
}