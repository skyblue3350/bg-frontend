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
    Message
} from "semantic-ui-react"
import { Link } from "react-router-dom";

export interface Props {
}

export interface State {
}

export default class LoginForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    login() {
        console.log("login")
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
                            <Form error={true} onSubmit={()=>{this.login.bind(this)}}>
                                <Segment stacked>
                                    <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" required />
                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        required
                                        type="password"/>
                                    <Message error header="Error" content="aaaa" />
                                    <Button.Group>
                                        <Form.Button positive content="ログイン" />
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
                                {["Twitter", "Google", "Discord"].map((provider) => {
                                    return (
                                        <Button color="teal" fluid style={{margin:10}}>
                                            {provider}
                                        </Button>
                                    )
                                })}

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}