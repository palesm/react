import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Vote extends Component {
    constructor(props) {
        super(props);
    }
    handleUpvote = () => {
        this.props.upvote()
    }
    handleDownvote = () => {
        this.props.downvote()
    }
    render() {
        return (
            <div>
                <FontAwesomeIcon onClick={this.handleUpvote} icon={faArrowUp}/>
                {this.props.value}
                <FontAwesomeIcon onClick={this.handleDownvote} icon={faArrowDown}/>
            </div>
        );
    }
}

export default Vote;