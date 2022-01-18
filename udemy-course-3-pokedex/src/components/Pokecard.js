import React, {Component} from "react";
import '../css/Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component {
    render() {
        const {id, name, type, exp} = this.props;
        let imgSrc = `${POKE_API}/${formatApi(id)}.png`
        return (
            <div className="Pokecard">
                <p>{name}</p>
                <img src={imgSrc} alt={'pokemon'} />
                <div>Type: {type}</div>
                <div>EXP: {exp}</div>
            </div>
        )
    }
}

function formatApi(id) {
    //max id = 899
    let zeroes = new Array(4).join("0");
    return (zeroes + id).slice(-3);
}

export default Pokecard;