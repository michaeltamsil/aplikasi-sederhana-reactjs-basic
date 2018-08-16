import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {

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
                        <button type="button" onClick={this.handleClick}>Kirim</button>
                    </div>
                    <h1>{this.state.nama}</h1>
                </p>
            </div>
        )
    }
}

export default Home