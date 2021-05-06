import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../style.css';

export class LoginPage extends React.Component {
    public render() {
        return (
            <div className="login-form">
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Вход
                    </Button>
                </Form>
            </div>
        );
    }
}
