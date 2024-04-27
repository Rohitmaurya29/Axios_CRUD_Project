import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Container,Row,Col } from 'react-grid-system';
import { useNavigate } from 'react-router-dom';


function Registration() {
    const[input, setInput] = useState({
        name:'',
        username:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name, value}= e.target;
        setInput((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const navigate= useNavigate();

    const submit=()=>{
        if(!input.name||!input.username||!input.email||!input.password){
            alert("Please fill the fields");
            return;
        }
        axios.post("http://localhost:5000/",{
            name:input.name,
            username:input.username,
            email:input.email,
            passowrd:input.password
        }).then((response)=>{
            console.log(response.data)
            navigate("/display")
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <Container style={{backgroundColor:"lightcyan", paddingTop:"70px",paddingBottom:"100px"}} className='mt-5'>
      <Form>
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
                <Form.Group>
                                <Form.Control type="text" value={input.name} name='name' onChange={handleChange} style={{textAlign:"center"}} placeholder="Enter Your Name" className='shadow-lg' required/>
                </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        <Row className='mt-4'>
            <Col sm={2}></Col>
            <Col sm={8}>
                <Form.Group>
                                <Form.Control type="text" value={input.username} name='username' onChange={handleChange} style={{textAlign:"center"}} placeholder="Enter Your Username" className='shadow-lg' required/>
                </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        <Row className='mt-4'>
            <Col sm={2}></Col>
            <Col sm={8}>
                <Form.Group>
                                <Form.Control type="email" value={input.email} name='email' onChange={handleChange} style={{textAlign:"center"}} placeholder="Enter Your E-mail" className='shadow-lg' required/>
                </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        <Row className='mt-4'>
            <Col sm={2}></Col>
            <Col sm={8}>
                <Form.Group>
                            <Form.Control type="password" value={input.password} name='password' onChange={handleChange} style={{textAlign:"center"}} placeholder="Enter Your Password" className='shadow-lg' required/>
                </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        {/* <Form.Group> */}
            {/* <Form.Label className='mt-2'>
                <h5>Enter Your Username:</h5>
                <Form.Control type="text" name='username' value={input.username} onChange={handleChange} style={{width:"500px",textAlign:"center"}} className='shadow-lg'/>
            </Form.Label>
        </Form.Group>

        <Form.Group>
            <Form.Label className='mt-2'>
                <h5>Enter Your E-mail:</h5>
                <Form.Control type="email" name='email' value={input.email} onChange={handleChange} style={{width:"500px",textAlign:"center"}} className='shadow-lg'/>
            </Form.Label>
        </Form.Group>

        <Form.Group>
            <Form.Label className='mt-2'>
                <h5>Enter Your Password:</h5>
                <Form.Control type="password" name='password' value={input.password} onChange={handleChange} style={{width:"500px",textAlign:"center"}} className='shadow-lg'/>
            </Form.Label>
        </Form.Group> */}

        <Button type='button' variant='success' onClick={submit} className='mt-4 shadow-lg'>Submit</Button>
      </Form>
    </Container>
  )
}

export default Registration
