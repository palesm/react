import {useState} from "react";
export default initval => {
  const [value, setValue] = useState(initval);
  const handleChange = (e) => {
    setValue(e.target.value)
  };
  const reset = () => {
    setValue("")
  };
  return [value, handleChange, reset]
};