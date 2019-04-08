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
import { login, UserActions, fetch, fail, login_local } from "../redux/user";

export interface Props {
    isFetch: boolean,
    message: string,
}

export interface State {
    [uid: string]: string,
    pass: string,
}

class LoginPage extends React.Component<Props & UserActions, State> {
    constructor(props: Props & UserActions) {
        super(props);
        this.state = {
            uid: "",
            pass: "",
        };
    }

    login() {
        this.props.login(this.state.uid, this.state.pass);
    }

    handleChange(event: React.FormEvent, data) {
        this.setState({
            [data.name]: data.value
        });
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
                                    <Form.Input
                                        name="uid"
                                        value={this.state.uid}
                                        onChange={this.handleChange.bind(this)}
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Username"
                                        required />
                                    <Form.Input
                                        name="pass"
                                        value={this.state.pass}
                                        onChange={this.handleChange.bind(this)}
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        required
                                        type="password"/>
                                    {this.props.message == null ? null : <Message error header="Error" content={this.props.message} />}
                                    <Button.Group>
                                        <Form.Button positive content="ログイン" disabled={this.props.isFetch}/>
                                    </Button.Group>

                                    <Divider />

                                    <Button color="teal" as={Link} to="/register">
                                        新規登録
                                    </Button>
                                    <Button negative as={Link} to={"/reset"}>パスワードリセット</Button>
                                </Segment>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="center">
                            <Header as="h3" style={{ fontSize: "2em" }} textAlign="center">
                                SNSでログイン
                            </Header>

                            <Divider />
                            <Button color="twitter" fluid disabled>
                                <Icon name="twitter" /> Twitter
                            </Button>
                            <Divider />
                            <Button color="google plus" fluid disabled>
                                <Icon name="google plus" /> Google
                            </Button>
                            <Divider />
                            <Button color="facebook" fluid disabled>
                                <Icon name="discord" /> Discord
                            </Button>
                            <Divider />
                            <Button fluid  disabled>
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
const mapDispatchToProps = (dispatch: Dispatch<any>, getState: () => UserActions) => ({
    login: (uid: string, pass: string) => dispatch(login_local(uid, pass))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);