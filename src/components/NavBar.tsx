import React from 'react';
import {TabDescriptor} from "./Router";
export interface NavBarProps {
    tabs: TabDescriptor[];
    active: string;
}


export class NavBar extends React.Component<NavBarProps> {

    constructor(props: NavBarProps) {
        super(props);
    }

    public render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a>*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {this.props.tabs.map(x => x.caption === this.props.active ? this.getActiveElement(x) : this.getElement(x))}
                    </ul>
                </div>
            </div>
        </nav>
    }

    private getActiveElement(tab: TabDescriptor) {
        return <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={tab.path}>{tab.caption}</a>
        </li>;
    }

    private getElement(tab: TabDescriptor) {
        return <li className="nav-item">
            <a className={"nav-link"} href={tab.path}>{tab.caption}</a>
        </li>;
    }
}
