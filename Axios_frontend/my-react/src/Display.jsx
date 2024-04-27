import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import { Container } from 'react-grid-system';


function Display() {
    const [input, setInput]= useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/display").then((response)=>{
            setInput(
                response.data
            )
        })
    },[])

    const dlt=(id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`).then((response)=>{
            console.log("http://localhost:5000/delete")
            console.log(response.data)
        }).catch((err)=>{
            console.log(err);
        })
        window.location.reload(false)
    }
  return (
    <Container>
      <Table className='table table-bordered border-md mt-5'>
        <thead>
            <tr>
                <th><h5><u>Name</u></h5></th>
                <th><h5><u>Username</u></h5></th>
                <th><h5><u>E-mail</u></h5></th>
            </tr>
        </thead>

        <tbody>
            {input.map((data)=>{
                return(
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>
                            <Link to={`/update/${data._id}`}>
                                <Button type='button'>Update</Button>
                            </Link>
                        </td>

                        <td>
                            <Button type='submit' onClick={()=>{dlt(data._id)}}>Delete</Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Display
