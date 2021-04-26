import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    useLocation
} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Payments} from "./pages/Payments";
import {Grades} from "./pages/Grades";
import {Messages} from "./pages/Messages";
import {Settings} from "./pages/Settings";
import {NavBar} from "./components/NavBar";
import {Courses} from "./pages/Courses";

export interface RouterProps {
    main: string;
}

export interface TabDescriptor {
    caption: string;
    path: string;
}

function createTab(caption: string, path: string): TabDescriptor {
    return {caption, path};
}

export const tabs = [
    createTab('Главная', '/'),
    createTab('Профиль', '/profiles'),
    createTab('Оплаты', '/payments'),
    createTab('Занятия', '/courses'),
    createTab('Аттестации', '/grades'),
    createTab('Сообщения', '/messages'),
    createTab('Настройки', '/settings')];

export class Router extends React.Component<RouterProps> {

    constructor(props: RouterProps) {
        super(props);
    }

    public render() {
        return (
        <BrowserRouter>
            <NavBar tabs={tabs} active={this.props.main}/>
            <div>
                <Switch>
                    <Route exact path={this.getPath('Главная')}>
                        <Home />
                    </Route>
                    <Route path={this.getPath('Профиль')}>
                        <Profile />
                    </Route>
                    <Route path={this.getPath('Оплаты')}>
                        <Payments />
                    </Route>
                    <Route path={this.getPath('Занятия')}>
                        <Courses />
                    </Route>
                    <Route path={this.getPath('Аттестации')}>
                        <Grades />
                    </Route>
                    <Route path={this.getPath('Сообщения')}>
                        <Messages />
                    </Route>
                    <Route path={this.getPath('Настройки')}>
                        <Settings />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter> )
    }

    private getPath(caption: string): string {
        return tabs.find(x => x.caption === caption)?.path || "/";
    }
}
