import React, {Component} from 'react';
import '../css/Joke.css'
import Vote from "./Vote";

class Joke extends Component {
    getEmoji() {
        if (this.props.votes >= 15) {
            return "em em-rolling_on_the_floor_laughing";
        } else if (this.props.votes >= 12) {
            return "em em-laughing";
        } else if (this.props.votes >= 9) {
            return "em em-smiley";
        } else if (this.props.votes >= 6) {
            return "em em-slightly_smiling_face";
        } else if (this.props.votes >= 3) {
            return "em em-neutral_face";
        } else if (this.props.votes >= 0) {
            return "em em-confused";
        } else {
            return "em em-angry";
        }
    }
    render() {
        return (
            <div className="Joke">
                <Vote
                    value={this.props.votes}
                    id={this.props.id}
                    upvote={this.props.upvote}
                    downvote={this.props.downvote}
                />
                <div className='Joke-text'>{this.props.joke}</div>
                <div className='Joke-smiley'>
                    <i className={this.getEmoji()} />
                </div>
            </div>
        );
    }
}

export default Joke;