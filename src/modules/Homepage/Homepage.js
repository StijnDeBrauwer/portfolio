import React from 'react';
import MenuHeader from "../../components/generic/MenuHeader/MenuHeader";



class Homepage extends React.Component {

    render(){
        const {welcomeMessage} = this.props;
        return(
        <div>


            <MenuHeader/>
            <p>{welcomeMessage}</p>

        </div>
        )
    }
}

export default Homepage;