import React from "react";


class Friends extends React.Component {
    render() {
        const {name, hobbies} = this.props;
        return (
            <div>
                <p>Name: {name}</p>
                <p>Hobbies: {hobbies.map(hobby => hobby + ', ')}</p>
            </div>
        );
    }

}

export default Friends