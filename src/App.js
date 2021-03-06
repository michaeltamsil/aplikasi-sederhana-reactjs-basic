import React, { Component } from 'react'
//import React from 'react';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { Button } from 'reactstrap'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: ''
        }
    
        this.field = {
            nama : React.createRef()
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (ev) {
        let nama = this.field.nama.current.value
        this.setState({
            nama
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Reactjs</h1>
                </header>
                <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
                    <div>
                        <input type="input" name="nama" ref={this.field.nama}/>
                        <Button type="button" onClick={this.handleClick}>Kirim</Button>
                    </div>
                    <h1>{this.state.nama}</h1>
                </p>
            </div>
        )
    }
}

export default App
