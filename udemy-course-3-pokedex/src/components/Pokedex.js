import React, {Component} from 'react';
import Pokecard from "./Pokecard";
import '../css/Pokedex.css'

class Pokedex extends Component {
    render() {
        const {pokemon} = this.props
        return (
            <div className="Pokedex">
                {pokemon.map((p) => {
                    return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                })}
            </div>
        );
    }
}

export default Pokedex;