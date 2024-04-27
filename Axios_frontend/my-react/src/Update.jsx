import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { Container,Col,Row } from 'react-grid-system';

function Update() {
    const [input, setInput]= useState({
        name:"",
        username:"",
        email:""
    });

    const {id}= useParams();

    const navigate= useNavigate();

    useEffect(()=>{
        // console.log(`http://localhost:5000/display/${id}`)
        axios.get(`http://localhost:5000/display/${id}`).then((response)=>{
            console.log(response);
            setInput({
                name:response.data.name,
                username:response.data.username,
                email:response.data.email
            }
            )
        })
    },[])

    const changeHandler=(e)=>{
        const {name,value}= e.target;
        setInput((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const submit=()=>{
        axios.put(`http://localhost:5000/update/${id}`,{
            name:input.name,
            username:input.username,
            email:input.email
        }).then(()=>{
            navigate("/display");
        })
    }
  return (
    <Container style={{backgroundColor:"lightcyan", paddingTop:"70px",paddingBottom:"100px"}} className='mt-5'>
      <Form>
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
            <Form.Group>
            <div><h5>Name:</h5></div>
                <Form.Control type='text' name='name' value={input.name} onChange={changeHandler} style={{textAlign:"center"}} className='shadow-lg'/>
            </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        <Row className='mt-4'>
            <Col sm={2}></Col>
            <Col sm={8}>
            <Form.Group>
                <div><h5>Username:</h5></div>
                <Form.Control type='text' name='username' value={input.username} onChange={changeHandler} style={{textAlign:"center"}} className='shadow-lg'/>
            </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        <Row className='mt-4'>
            <Col sm={2}></Col>
            <Col sm={8}>
            <Form.Group>
            <div><h5>E-mail:</h5></div>
                <Form.Control type='email' name='email' value={input.email} onChange={changeHandler} style={{textAlign:"center"}} className='shadow-lg'/>
            </Form.Group>
            </Col>
            <Col sm={2}></Col>
        </Row>

        <Button className='mt-4 shadow-lg' type='button' variant='success' onClick={submit} >Update</Button>
      </Form>
    </Container>
  )
}

export default Update
