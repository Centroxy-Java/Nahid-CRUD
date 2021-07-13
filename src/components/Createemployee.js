import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function Createemployee(props) {  
  const [employee, setemployee] = useState({ name: '', salary: ''});  
  const [showLoading, setShowLoading] = useState(false);  
  const apiUrl = "http://localhost:1200/user/add";  
  const Insertemployee = (e) => {  
    e.preventDefault();  
    debugger;  
    const data = { name:employee.name,salary: employee.salary };  
    axios.post(apiUrl, data)  
      .then((result) => {  
        props.history.push("/Employelist");  
      });  
  };  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setemployee({...employee, [e.target.name]: e.target.value});  
  }  
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={Insertemployee}>
                  <h1>Add User</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={employee.name}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="salary"
                      name="salary"
                      id="salary"
                      value={employee.salary}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button className="btn btn-info mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );  
}  
export default Createemployee  
