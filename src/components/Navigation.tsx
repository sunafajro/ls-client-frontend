import React, { FC, ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TRootState } from '../store/store';
import { Container } from '../components/Container';

export type TLink = {
    label: string;
    path: string;
};

type TStateProps = {
    pathname: string;
}

export type TOwnProps = {
    navigationLinks: TLink[];
};

type TProps = TStateProps & {} & TOwnProps;

const mapState = (state: TRootState) => ({
    pathname: state.router.location.pathname,
});

const Navigation: FC<TProps> = ({ navigationLinks, pathname }): ReactElement => {
    const [isCollapsed, updateIsCollapsed] = useState(true);
    if (!pathname) {
        pathname = '/home';
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Container>
            <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded={isCollapsed}
                    aria-label="Toggle navigation"
                    onClick={() => updateIsCollapsed(!isCollapsed)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`${
                        isCollapsed ? 'collapse' : ''
                    } navbar-collapse`}
                    id="navbarText"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navigationLinks.map((link, i) => (
                            <li key={i} className="nav-item">
                                <Link
                                    to={link.path}
                                    className={`nav-link ${
                                        pathname === link.path ? 'active' : ''
                                    }`}
                                    aria-current="page"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default connect<TStateProps, {}, TOwnProps, TRootState>(mapState, {})(Navigation);