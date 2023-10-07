import React from 'react'

function Edit() {
  return <>

   <div className='p-4 container-fluid' style={{backgroundColor:'#E3E8F8'}}>
  <Container>
    <Row>
      <Col>
      <Card className='cards'>
        <Card.Title className='p-3 mt-2' style={{color:'#203562'}}> Add a Note </Card.Title>
        <Card.Title className='ps-3' style={{color:'#203562'}}> Title </Card.Title>
        
        <Card.Body className='p-3 mb-5' style={{color:'#4B649A'}}>
          <Form onSubmit={handleSubmit}><FormControl type="text" placeholder='| Take a note...'>  </FormControl> 
          <Button variant="primary" type='submit'>
          Submit
          </Button>          
          </Form> </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>
  </div>  
  
  </>
}

export default Edit