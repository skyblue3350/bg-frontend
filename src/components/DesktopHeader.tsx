import * as React from "react";
import {
    Container,
    Button,
    Responsive,
    Visibility,
    Segment,
    Menu,
    Image,
    Header,
    Icon,
} from "semantic-ui-react"
import styled from "styled-components";

const CustomSegment = styled(Segment)`
    min-height: 700px;
`

export interface Props {
}

export interface State {
    fixed: boolean,
}

export default class Sample extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fixed: false
        }
    }

    getWidth(): number{
        const isSSR: boolean = typeof window === "undefined";
        return isSSR ? Number(Responsive.onlyTablet.minWidth) : window.innerWidth;
    }

    hideFixedMenu() {
        this.setState({fixed: false});
    }

    showFixedMenu() {
        this.setState({fixed: true});
    }

    render(): JSX.Element {
        return (
            <Responsive getWidth={this.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign="center"
                        vertical
                    >
                        <Menu
                            fixed={this.state.fixed ? "top" : null}
                            inverted={!this.state.fixed}
                            secondary={!this.state.fixed}
                            size="large"
                        >
                            <Container>
                                <Menu.Item as="a" header>
                                    <Image size="mini" src="/images/icon.png" style={{ marginRight: "1.5em" }} />
                                    Home
                                </Menu.Item>
                                <Menu.Item as="a">List</Menu.Item>
                                <Menu.Item as="a">Database</Menu.Item>
                                <Menu.Item position="right">
                                    <Button as="a" inverted={!this.state.fixed}>
                                        Login
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        {this.props.children}
                    </Segment>
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
                </Visibility>
            </Responsive>
        );
    }
}

