import React, {Component} from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import * as uuid from 'uuid';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {width: 100, height: 100, color: 'purple', id: uuid.v4()},
                {width: 100, height: 100, color: 'cyan', id: uuid.v4()},
                {width:100, height: 100, color: 'blue', id: uuid.v4()},
                {width:100, height: 100, color: 'pink', id: uuid.v4()},
            ]
        }
    }
    addNewBox = (box) => {
        box = {...box, id: uuid.v4()}
        this.setState(st => ({
            boxes: [...st.boxes, box]
        }))
    }
    deleteBox = (id) => {
        this.setState(st => ({
            boxes: [...st.boxes.filter(box => box.id !== id)]
        }))
    }
    render() {
        return (
            <div>
                {this.state.boxes.map(box =>
                    <Box
                        width={box.width}
                        height={box.height}
                        color={box.color}
                        key={box.id}
                        keyProp={box.id}
                        deleteBox={this.deleteBox}
                    />
                )}
                <NewBoxForm addNewBox={this.addNewBox} />
            </div>
        );
    }
}

export default BoxList;