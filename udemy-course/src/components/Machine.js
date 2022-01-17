import React from "react";

class Machine extends React.Component {
    static defaultProps = {
        s1: 9,
        s2: 9,
        s3: 9,
    }
    render() {
        const {s1, s2, s3} = this.props
        let result = (s1==s2) && (s1==s3) ? 'win' :'lose';
        return (
            <div>
                <p>Machine: {s1}{s2}{s3} Result: {result}</p>
            </div>
        );
    }
}

export default Machine;