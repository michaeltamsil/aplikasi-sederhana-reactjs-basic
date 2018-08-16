import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Container, Row, Col, Form, FormGroup, Label
    , Input, Button} 
    from 'reactstrap'


class Login extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm={{offset: 3, size:6}}>
                        <h2>Sign up for foodbook</h2>
                        <Form>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" block>Sign Up</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Login