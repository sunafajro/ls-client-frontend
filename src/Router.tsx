import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Payments } from './pages/Payments';
import { Courses } from './pages/Courses';
import { Grades } from './pages/Grades';
import { Messages } from './pages/Messages';
import { Settings } from './pages/Settings';
import { Navigation } from './components/Navigation';
import Login from './pages/Login';
import { RouterProps } from './Types';

const routes = [
    {
        label: 'Главная',
        path: '/',
        component: Home,
    },
    {
        label: 'Профиль',
        path: '/profile',
        component: Profile,
    },
    {
        label: 'Оплаты',
        path: '/payments',
        component: Payments,
    },
    {
        label: 'Занятия',
        path: '/courses',
        component: Courses,
    },
    {
        label: 'Аттестации',
        path: '/grades',
        component: Grades,
    },
    {
        label: 'Сообщения',
        path: '/messages',
        component: Messages,
    },
    {
        label: 'Настройки',
        path: '/settings',
        component: Settings,
    },
];

export const Router = ({ isGuest }: RouterProps) => {
    if (isGuest) {
        return (
            <BrowserRouter>
                <Container>
                    <Switch>
                        <Route
                            exact
                            path={'/login'}
                            render={(props) => <Login {...props} />}
                        />
                        <Redirect to={'/login'} />
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
    return (
        <BrowserRouter>
            <Navigation
                navigationLinks={routes.map((route) => {
                    return { label: route.label, path: route.path };
                })}
            />
            <Container>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            exact
                            key={i}
                            path={route.path}
                            render={(props) => <route.component {...props} />}
                        />
                    ))}
                    <Redirect to={'/'} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};
