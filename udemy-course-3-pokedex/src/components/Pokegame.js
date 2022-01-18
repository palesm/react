import React, {Component} from 'react';
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];
        while (hand1.length < hand2.length) {
            let randIndex = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIndex, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = getExp(hand1);
        let exp2 = getExp(hand2);
        return (
            <div>
                <div>{exp1 > exp2 ? 'Winner': 'Loser'}! EXP: {exp1}</div>
                <Pokedex pokemon={hand1} />
                <div>{exp1 < exp2 ? 'Winner': 'Loser'}! EXP: {exp2}</div>
                <Pokedex pokemon={hand2} />
            </div>
        );
    }
}

function getExp(hand) {
    let exp = 0;
    hand.forEach(p => {
        exp = exp + p.base_experience
    })
    return exp;
}

export default Pokegame;