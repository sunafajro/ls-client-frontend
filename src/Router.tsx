import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Payments } from './pages/Payments';
import { Courses } from './pages/Courses';
import { Grades } from './pages/Grades';
import { Messages } from './pages/Messages';
import { Settings } from './pages/Settings';
import { Navigation } from './components/Navigation';

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

export const Router = () => {
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
