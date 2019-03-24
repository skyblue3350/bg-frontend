import * as React from "react";
import {
    Container,
    Button,
    Responsive,
    Visibility,
    Segment,
    Menu,
    Image,
    Input,
    Dropdown,
} from "semantic-ui-react"
import styled from "styled-components";
import { Link } from "react-router-dom";

import { UserState } from "../redux/user";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxState } from "../redux/configure-store";

export interface Props {
    uid: UserState["uid"],
    username: UserState["username"]
}

export interface State {
    fixed: boolean,
}

export class DesktopHeader extends React.Component<Props, State> {
    static defaultProps: Props = {
        uid: null,
        username: null,
    }

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
                    onBottomPassed={this.showFixedMenu.bind(this)}
                    onBottomPassedReverse={this.hideFixedMenu.bind(this)}
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
                                <Menu.Item as={Link} to={"/database/"}>Database</Menu.Item>
                                <Menu.Item as={Link} to={"/" + this.props.uid + "/"}>My Library</Menu.Item>
                                <Menu.Item position="right">
                                    <Input placeholder="Search..." style={{ marginRight: "1.5em" }} />
                                    { this.props.uid === null ?
                                        <Button as={Link} to={"/login"} inverted={!this.state.fixed}>
                                            Login
                                        </Button> :
                                        <Dropdown text={this.props.username} fluid>
                                            <Dropdown.Menu>
                                                <Dropdown.Item text="Database" as={Link} to={"/database/"}/>
                                                <Dropdown.Item text="My Library" as={Link} to={"/" + this.props.uid + "/"}/>
                                                <Dropdown.Divider />
                                                <Dropdown.Item text="Logout" as={Link} to={"/logout"}/>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    }
                                    
                                </Menu.Item>
                            </Container>
                        </Menu>
                        {this.props.children}
                    </Segment>
                </Visibility>
            </Responsive>
        );
    }
}

const mapStateToProps = (state: ReduxState) => ({
    uid: state.UserReducer.uid,
    username: state.UserReducer.username,
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader);