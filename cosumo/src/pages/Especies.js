import React, { Component } from 'react';
import "../components/csscomp/style.css";
import Nav from '../components/nav'

export default class people extends Component {
    state = {
        data: {
            results: [],
        },
    }
    componentDidMount() {
        this.fetchCharacters()
    }

    fetchCharacters = async () => {
        const response = await fetch('https://swapi.dev/api/species/')
        const data = await response.json();

        this.setState({
            data: data,
        })
        console.log(data)
    }



    render() {
        return (
            <div>
                <Nav />

                 <div class="container h-100">
                    <div class="row justify-content-center h-100">
                        <div class="col-sm-8 align-self-center text-center">

                            <div class="card-body">
                                <h1 className="m-3" style={{ color: '#E3CD2B' }}>ESPECIES</h1>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="container h-100 mt-5" >
                    <div class="row justify-content-center h-100 mt-5">
                        <div class="col-sm-8 align-self-buttom text-center" style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
                            <div class="card-body">
                                <ul  style={{listStyle: 'none'}}>
                                    {this.state.data.results.map(character => (
                                        <li key={character}>
                                            <p style={{ color: '#E3CD2B' }}>{character.name}</p>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
