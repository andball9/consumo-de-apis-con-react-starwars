import React, { Component } from 'react';
import "../components/csscomp/style.css";
import Nav from '../components/nav'

export default class people extends Component {
    render() {
        return (
            <div>                
                <Nav/>
                <div class="container h-100">
                    <div class="row justify-content-center h-100">
                        <div class="col-sm-8 align-self-center text-center">

                            <div class="card-body">
                                <h1 className="m-3" style={{ color: '#E3CD2B' }}>¡¡¡HOLA!!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}