import * as React from "react";

import { Segment, Grid, Header } from "semantic-ui-react";
import { ReduxState } from "../redux/configure-store";
import { Dispatch } from "react";
import { UserActions, logout } from "../redux/user";
import { connect } from "react-redux";

export interface Props {
}

export interface State {
}

class Logout extends React.Component<Props & UserActions, State> {
    constructor(props: Props & UserActions) {
        super(props);   
    }

    componentDidMount() {
        this.props.logout();
    }

    render(): JSX.Element {
        return (
            <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as="h3" style={{ fontSize: "2em" }}>
                            ログアウト
                        </Header>
                        <p style={{ fontSize: "1.33em" }}>
                            ログアウトしました
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        )
    }
}

const mapStateToProps = (state: ReduxState) => ({
});
const mapDispatchToProps = (dispatch: Dispatch<any>, getState: () => UserActions) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);