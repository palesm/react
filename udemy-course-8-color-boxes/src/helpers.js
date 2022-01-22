function choice(arr) {
    return arr && arr[Math.floor(Math.random() * arr.length)]
}

export {choice};