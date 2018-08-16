import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { InputGroup, InputGroupAddon
    ,Input, Button} from 'reactstrap'


class FoodSearch extends Component {
    render() {
        return (<div>
            <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                    <Button color="danger">
                        Search
                    </Button>
                </InputGroupAddon>
            </InputGroup>
        </div>)
    }
}

export default FoodSearch