import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../css/Vote.css'

class Vote extends Component {
    constructor(props) {
        super(props);
    }
    getColor() {
        if (this.props.votes >= 15) {
            return "#4CAF50";
        } else if (this.props.votes >= 12) {
            return "#8BC34A";
        } else if (this.props.votes >= 9) {
            return "#CDDC39";
        } else if (this.props.votes >= 6) {
            return "#FFEB3B";
        } else if (this.props.votes >= 3) {
            return "#FFC107";
        } else if (this.props.votes >= 0) {
            return "#FF9800";
        } else {
            return "#f44336";
        }
    }
    handleUpvote = () => {
        this.props.upvote()
    }
    handleDownvote = () => {
        this.props.downvote()
    }
    render() {
        return (
            <div className='Joke-buttons'>
                <FontAwesomeIcon onClick={this.handleUpvote} icon={faArrowUp}/>
                <span className='Joke-votes' style={{ borderColor: this.getColor() }}>
                    {this.props.value}
                </span>
                <FontAwesomeIcon onClick={this.handleDownvote} icon={faArrowDown}/>
            </div>
        );
    }
}

export default Vote;