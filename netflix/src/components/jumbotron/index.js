import React from 'react';
import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {  // have to have bracket becasue those are objects that we are passing down
    return (
        <Item direction={direction} {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Item>
    )

};
//compound componenets 
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps}></Image>;
};

export default Jumbotron;
