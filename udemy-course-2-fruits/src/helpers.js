
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
        }
    }
}

// Udemy solution
// function remove(items, item) {
//     for (let i = 0; i < items.length; i++) {
//         if (items[i] === item) {
//             return [...items.slice(0,i), ...items.slice(i+1)];
//         }
//     }
// }

export {choice, remove}