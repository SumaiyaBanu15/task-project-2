import React,{ useContext } from 'react'
import UserContext,{ UserDataContext } from './context/UserContext'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';


function Content() {

  const {data,setData} = useContext(UserDataContext)
  const navigate = useNavigate()
  return <>
  <div className='p-4 container-fluid' style={{backgroundColor:'#E3E8F8'}}>
  <Container>
    <Row>
      <Col>
      <Card className='cards'>
        <Card.Title className='p-3 mt-2' style={{color:'#203562'}}> Add a Note </Card.Title>
        <Card.Title className='ps-3' style={{color:'#203562'}}> Title </Card.Title>
        <Card.Body className='p-3 mb-5' style={{color:'#4B649A'}}> | Take a note... </Card.Body>
      </Card>
      </Col>
    </Row>
    <Row>
      <Col>
      <div className='d-flex flex-column gap-2 mt-5'>
        <div>
        <img src='/Icons/description.svg' /> &nbsp;
        <span className='notes' style={{color:'#203562'}}> My Notes </span>
        </div>
        <div className='recent ms-1' style={{color:'#4B649A'}}>
          <span> Recently viewed</span>
        </div>
      </div>
      </Col>
    </Row>
    <Row>
      <Col>
  <div className='d-flex gap-2 p-2 mt-2 '>
  {
    data.map((e,i)=> {
      return (
      <Card className='contentCards' key={i}>
         <Card.Title className='ps-3 pt-2 d-flex imgTitle' style={{color:'#203562'}}>{e.title} 
         <div className='images'>
         <img src='/Icons/edit.svg' /> &nbsp;
         <img src='/Icons/delete.svg' />   
         </div>      
         </Card.Title>
          <Card.Body>
            <Card.Text>
              {e.body}
            </Card.Text>
            <Card.Text style={{color:'#000000'}}>
              {e.time}
            </Card.Text>
          </Card.Body>
      </Card>
      )
    })
  }
  </div>
  </Col>
  </Row>
  </Container>
  </div>
  </>
}

export default Content