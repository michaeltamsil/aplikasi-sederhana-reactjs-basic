import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Button } from 'reactstrap'

class Profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div>Hi Michael Tamsil Welcome to Profile Page</div>
                <div>Michael Tamsil</div>
                <div>michaeltamsil@gmail.com</div>
                <div>list of your food</div>
                
            </div>
        )
    }
}

export default Profile