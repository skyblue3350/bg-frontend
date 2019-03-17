import * as React from "react";
import styled from "styled-components";

import {
    Container,
    Button,
    Header,
    Divider,
    Segment,
    Grid,
    Form,
    Message,
    Icon
} from "semantic-ui-react"
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { ReduxState } from "../redux/configure-store";
import { connect } from "react-redux";
import { login, UserActions, fetch, fail } from "../redux/user";

export interface Props {
    isFetch: boolean,
    message: string,
}

export interface State {
}

class LoginPage extends React.Component<Props & UserActions, State> {
    constructor(props: Props & UserActions) {
        super(props);
    }

    login() {
        console.log("login");
        this.props.login("ID", "pass");
    }

    render(): JSX.Element {
        return (
            <Container>
                <Grid centered textAlign="center" style={{height: 500, margin: 50}}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3" style={{ fontSize: "2em" }} textAlign="center">
                                メールアドレスでログイン
                            </Header>
                            <Form error={true} onSubmit={this.login.bind(this)}>
                                <Segment stacked>
                                    <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" required />
                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        required
                                        type="password"/>
                                    {this.props.message == null ? null : <Message error header="Error" content={this.props.message} />}
                                    <Button.Group>
                                        <Form.Button positive content="ログイン" disabled={this.props.isFetch}/>
                                        <Button.Or />
                                        <Button negative as="div">パスワードリセット</Button>
                                    </Button.Group>

                                    <Divider />

                                    <Button color="teal" as={Link} to="/register">
                                        新規登録
                                    </Button>
                                </Segment>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="center">
                            <Header as="h3" style={{ fontSize: "2em" }} textAlign="center">
                                SNSでログイン
                            </Header>

                            <Divider />
                            <Button color="twitter" fluid>
                                <Icon name="twitter" /> Twitter
                            </Button>
                            <Divider />
                            <Button color="google plus" fluid>
                                <Icon name="google plus" /> Google
                            </Button>
                            <Divider />
                            <Button color="facebook" fluid>
                                <Icon name="discord" /> Discord
                            </Button>
                            <Divider />
                            <Button fluid>
                                <Icon name="github" /> Github
                            </Button>
                            <Divider />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state: ReduxState) => ({
    uid: state.UserReducer.uid,
    isFetch: state.UserReducer.isFetch,
    message: state.UserReducer.message,
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    login: (uid: string, pass: string) => {
        console.log("login dispatch", uid, pass);
        dispatch(fetch());
        dispatch(fail("aaaaaa"));
        //dispatch(login("username", "token"));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);