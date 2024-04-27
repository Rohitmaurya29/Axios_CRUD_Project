import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import {Routes,Route, useNavigate} from 'react-router-dom';
import Display from './Display';
import Update from './Update';
import { Container, Row, Col } from 'react-grid-system';
import Button from 'react-bootstrap/Button';

function App() {
  const navigate= useNavigate()
  const btnClick=(e)=>{
    navigate('/'+[e.target.name])
  }
  return (
    <div className="App">
      <div style={{backgroundColor:"beige"}} className='mb-2'>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}><h2><u>Axios Crud Operation</u></h2></Col>
          <Col sm={4}></Col>
        </Row>
      </div>
      <div style={{backgroundColor:"aquamarine", padding:"17px"}}>
        <Row>
          <Col md={1} sm={1}></Col>
          <Col sm={4.5} md={4}>
            <a href='/'><u><b>Register</b></u></a>
          </Col>
          <Col sm={1} md={2}></Col>
          <Col sm={4.5} md={4}>
            <a href='/display'><u><b>Data</b></u></a>
          </Col>
          <Col sm={1} md={1}></Col>
        </Row>
      </div>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
