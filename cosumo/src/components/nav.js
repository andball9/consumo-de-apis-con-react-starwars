import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                                <Link class="nav-link" to="/Personas">Personas</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Planetas">Planetas</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Peliculas">Películas</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Especies">Especies</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Vehiculos">Vehiculos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Naves">Naves</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


