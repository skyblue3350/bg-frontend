import * as React from "react";
import { Segment, Grid, Header, Image, Item, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import API from "../API";
import { ReduxState } from "../redux/configure-store";
import { UserActions } from "../redux/user";
import { Dispatch } from "redux";
import { connect } from "react-redux";

export interface Props {
    jwt: string
}

export interface State {
    games: any[]
}

class Database extends React.Component<Props, State> {
    private api;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            games: [],
        };
        this.api = new API(this.props.jwt);
    }

    componentDidMount() {
        this.api.games.find().then((res) => {
            this.setState({
                games: res.data.results
            });
        });
    }

    render(): JSX.Element {
        return (
            <Segment style={{ padding: "8em 0em" }} vertical>
                <Container>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                        データベース一覧
                    </Header>
                    <Item.Group divided>
                        {this.state.games.map((item) => {
                            return (
                                <Item key={item.name}>
                                    
                                    <Item.Image size="tiny" src={item.thumnail.length == 0 ? "" : item.thumnail} />
                                    <Item.Content>
                                        <Item.Header as={Link} to={item.name}>{item.name}</Item.Header>
                                        <Item.Description>
                                            {item.description}
                                        </Item.Description>
                                        <Item.Meta>操作</Item.Meta>
                                        <Item.Extra>欲しいものリストに追加</Item.Extra>
                                    </Item.Content>
                                </Item>
                            );
                        })}
                    </Item.Group>
                </Container>
            </Segment>
        )
    }
}

const mapStateToProps = (state: ReduxState) => ({
    uid: state.UserReducer.uid,
    isFetch: state.UserReducer.isFetch,
    jwt: state.UserReducer.jwt,
    message: state.UserReducer.message,
});
const mapDispatchToProps = (dispatch: Dispatch<any>, getState: () => UserActions) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Database);