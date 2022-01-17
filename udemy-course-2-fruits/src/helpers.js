
function choice(items) {
    let int = randomInteger(0, items.length-1);
    return items[int];
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remove(items, item) {
    if(item) {
        let index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1)
            return items;
        } else return undefined;
    } else return undefined;
}

export {choice, remove}