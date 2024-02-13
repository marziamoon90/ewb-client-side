import React from 'react'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col style={{ borderTop: '3px solid', borderColor: '#3886c9' }} className='mx-3 px-0'>
                        <h2 className='text-start my-2' >Business details</h2>
                        <div className='text-start mt-4'>
                            <li>Technical intern trainee sending business</li>
                            <li>Specific skills introduction business</li>
                            <li>Engineer introduction business</li>
                        </div>
                    </Col>
                    <Col style={{ borderTop: '3px solid', borderColor: '#3886c9' }} className='mx-3 px-0'>
                        <h2 className='text-start my-2' >Features of EWB</h2>
                        <div className='text-start mt-4'>
                            <li>Operated by Japanese and Bangladeshi people</li>
                            <li>Conducting a rigorous aptitude test before entering the school</li>
                        </div>
                    </Col>
                    <Col style={{ borderTop: '3px solid', borderColor: '#3886c9' }} className='mx-3 px-0'>
                        <h2 className='text-start my-2' >Japanese training center</h2>
                        <div className='text-start mt-4'>
                            <li>Facility with a capacity of 200 people</li>
                            <li>Japanese instructors are always available</li>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='text-start mt-5'>
                <Row>
                    <Col md="6">
                        <div style={{ borderTop: '3px solid', borderColor: '#3886c9' }}>
                            <h1>Human resources are the beginning of everything</h1>
                            <p className='mt-5'>EWB will continue to deepen exchanges with related companies and organizations and contribute to the international community through Bangladesh's hardworking and talented human resources. Our company, EWB Co., Ltd., has the basic philosophy of Human resources are the beginning of everything'' in order to hire capable and ambitious human resources in Bangladesh.
                                <br />
                                We will recruit excellent and energetic human resources from within Bangladesh, respond to the requests of each Japanese company (company), and strive to be beneficial to both Japan and Bangladesh as a sending organization.
                            </p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                            <img style={{ height: '100%', width: '100%' }} src="https://i.ibb.co/0f2Hrc1/home-p-1.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home