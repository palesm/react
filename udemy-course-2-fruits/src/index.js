import {choice, remove} from "./helpers";
import foods from "./foods";

let randomFruit = choice(foods);
console.log(`I'd ike one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
let fruitsLeft = remove(foods, randomFruit);
console.log(`I'm sorry, we have ${fruitsLeft} left.`)
