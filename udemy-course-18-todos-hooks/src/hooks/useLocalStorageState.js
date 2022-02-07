import {useEffect, useState} from "react";

function useLocalStorageState(key, initVal) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse( window.localStorage.getItem(key) || String(initVal))
    } catch (err) {
      val = initVal
    } return val;
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}



export default useLocalStorageState;