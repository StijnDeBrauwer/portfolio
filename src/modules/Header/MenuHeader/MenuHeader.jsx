import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import Navigation from "../Navigation/Navigation";
import MediaQuery from 'react-responsive';
import {NavLink} from "react-router-dom";
import './style.css'

class MenuHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

    }

    componentWillReceiveProps() {
        this.setState({open: false});
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const styles = {
            header: {
                flex: 1,
                padding: '10px',
                display: 'flex',
                justifyContent: 'flex-end',
                boxShadow: `1px 1px 1px #D5D5D5 `,

            },


        };
        return (
            <header className={"Header"} style={styles.header}>

                <NavLink id={"logo"} to={'/'}>
                    Stijn De Brauwer
                </NavLink>


                    <MediaQuery maxWidth={767}>
                        <Navigation hideNav={!this.state.open}/>
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick.bind(this)}
                            width={20}
                            height={15}
                            strokeWidth={3}
                            rotate={0}
                            color='black'
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                    </MediaQuery>

                <MediaQuery minWidth={768}>
                    <Navigation hideNav={false}/>
                </MediaQuery>

            </header>

        );
    }
}

export default MenuHeader;