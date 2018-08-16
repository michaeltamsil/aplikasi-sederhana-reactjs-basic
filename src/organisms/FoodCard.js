import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Card, CardText, CardImg,
    CardBody, CardTitle} 
    from 'reactstrap'


class FoodCard extends Component {
    render() {
        return (<div>
            <Card>
                <CardImg top width="100%" src="https://cdn.filestackcontent.com/BRR9hoeQweZXeQY8bSzT" />
                <CardBody>
                    <CardTitle>Nasi Goreng</CardTitle>
                    <CardText>Nasi di goreng enak banget <a href="#">Read more</a></CardText>
                </CardBody>
            </Card>
        </div>
        )
    }
}

export default FoodCard