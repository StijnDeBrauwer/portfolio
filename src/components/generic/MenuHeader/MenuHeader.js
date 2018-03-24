import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

class MenuHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }


    render() {
        return (
            <header>
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={3}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />

            </header>

        );
    }
}

export default MenuHeader;