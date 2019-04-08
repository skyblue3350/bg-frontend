import * as React from "react";

import { Segment, Grid, Header, Form } from "semantic-ui-react";

export interface Props {
    isFetch: boolean,
    message: string,
}

export interface State {
    [uid: string]: string
    email: string
    password1: string
    password2: string
}

export default class Register extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            uid: "",
            email: "",
            password1: "",
            password2: "",
        };
    }

    onSubmit() {

    }

    handleChange(event: React.FormEvent, data) {
        this.setState({
            [data.name]: data.value
        });
    }

    render(): JSX.Element {
        const data = [
            {name: "uid", icon: "user", placeholder: "Username"},
            {name: "email", icon: "mail", placeholder: "E-mail"},
            {name: "password1", icon: "key", placeholder: "Password"},
            {name: "password2", icon: "key", placeholder: "Retype Password"},
        ];

        return (
            <Segment style={{ padding: "8em 0em" }} vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3" style={{ fontSize: "2em" }}>新規登録</Header>
                            <Form error={true} onSubmit={this.onSubmit.bind(this)}>
                                {data.map((item) => {
                                    return (
                                        <Form.Input
                                            key={item.name}
                                            name={item.name}
                                            value={this.state[name]}
                                            onChange={this.handleChange.bind(this)}
                                            fluid
                                            icon={item.icon}
                                            iconPosition="left"
                                            placeholder={item.placeholder}
                                            required />
                                    );
                                })}
                                <Form.Button positive content="登録" disabled={this.props.isFetch}/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}