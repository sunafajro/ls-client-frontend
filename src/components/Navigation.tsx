import React, { FC } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { TNavigation } from '../Types';

export const Navigation: FC<TNavigation> = ({ navigationLinks }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {navigationLinks.map((link, i) => (
                            <LinkContainer key={i} to={link.path}>
                                <Nav.Link>{link.label}</Nav.Link>
                            </LinkContainer>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
