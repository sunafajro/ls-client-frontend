import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { RootState } from '../store/store';
import { login } from '../store/actions';

type StateProps = {
    isGuest: boolean;
};

type DispatchProps = {
    login: () => void;
};

export class Login extends Component<DispatchProps> {
    public render() {
        return (
            <div>
                <h1>Login</h1>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.login();
                    }}
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapState = (state: RootState) => ({
    isGuest: state.app.isGuest,
});

const mapDispatch = {
    login,
};

export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(Login);
