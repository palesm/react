import {useState} from "react";
function useToggle(initval=false) {
  const [value, setValue] = useState(initval);
  const toggleChange = () => {
    setValue(!value)
  };
  return [value, toggleChange];
}
export default useToggle;