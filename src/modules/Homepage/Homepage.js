import React from 'react';



class Homepage extends React.Component {

    render(){
        const {welcomeMessage} = this.props;
        return(
        <div>
            <p>{welcomeMessage}</p>

        </div>
        )
    }
}

export default Homepage;