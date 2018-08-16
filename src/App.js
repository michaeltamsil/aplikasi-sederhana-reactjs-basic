import React, { Component } from 'react'
//import React from 'react';
import logo from './logo.svg'
import './App.css'

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
        console.log(ev)
        //alert(`nama anda adalah ${this.field.nama.current.value}`)
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
                        <button type="button" onClick={this.handleClick}>Kirim</button>
                    </div>
                    <h1>{this.state.nama}</h1>
                </p>
            </div>
        )
    }
}

export default App
