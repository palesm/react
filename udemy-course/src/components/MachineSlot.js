import React from "react";
import Machine from "./Machine";

class MachineSlot extends React.Component {
    render() {
        return (
            <div>
               <Machine s1={randomInteger(0,1)} s2={randomInteger(0,1)} s3={randomInteger(0,1)}/>
               <Machine s1={randomInteger(0,1)} s2={randomInteger(0,1)} s3={randomInteger(0,1)}/>
               <Machine s1={randomInteger(0,1)} s2={randomInteger(0,1)} s3={randomInteger(0,1)}/>
               <Machine s1={randomInteger(0,1)} s2={randomInteger(0,1)} s3={randomInteger(0,1)}/>
               <Machine />
            </div>
        );
    }
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default MachineSlot;