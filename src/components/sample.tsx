import * as React from "react";
import {
    Container,
    Header,
    Button,
    Loader,
    Icon,
    Label,
    Responsive,
    Visibility,
    Segment,
    Menu,
} from "semantic-ui-react"
import styled from "styled-components";

const CustomMenu = styled(Menu)`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;
    background: #1B1C1D;
    overflow-x: hidden;
`;

export interface Props {
    fixed: false,
}

export default class Sample extends React.Component<Props, {fixed: boolean;}> {
    constructor(props: Props) {
        super(props);
    }

    getWidth(): number{
        const isSSR: boolean = typeof window === "undefined";
        return isSSR ? Number(Responsive.onlyTablet.minWidth) : window.innerWidth;
    }

    render(): JSX.Element {
        return (
            <Responsive getWidth={this.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility once={false}>
                    <Segment inverted>
                        <CustomMenu>
                            <Container>
                                <Menu.Item as="a" active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as="a">Sample</Menu.Item>
                                <Header content="App Title" />
                            </Container>
                        </CustomMenu>
                    </Segment>
                </Visibility>
            </Responsive>
        );
    }
}

