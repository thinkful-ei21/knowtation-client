import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../styles/header-bar.css'

export class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'KNOW(tation)'
        }
    }

    onMouseEnter() {
        if (this.props.loggedIn) {

            this.setState({
                title: 'Log Out'
            })
        } else {
            this.setState({
                title: 'Log In'
            })
        }   
    }

    onMouseLeave() {
        this.setState({
            title: 'KNOW(tation)'
        })
    }

    render() {
        const title = this.props.loggedIn ? 'Logout' : 'Login';
        return (
            <div className="header-bar">
                <h1>
                    <Link className='title' to='/'>KNOW(tation)</Link>
                    <Link to={this.props.loggedIn ? '/logout' : '/login'} 
                        className="log-link">
                        {title}
                    </Link>
                </h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
