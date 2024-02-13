import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <div className='mt-5'>
            <Container className='text-start'>
                <h1 className='text-center'>About EWB</h1>
                <p>EWB Co., Ltd. is a private company established in 2023 for the purpose of developing and introducing technical intern trainees to Japan.</p>

                <p>To select our trainees, candidates who have passed the aptitude test and physical test (male) are admitted to Tenstu for 10 days, and we check their Japanese proficiency rate, personality, etc., and only those who pass are allowed to participate in the interview.</p>

                <p>EWB is constantly improving to become a reliable place for everyone who dreams of working in Japan. We at EWB are working every day to improve the overall quality of Bangladeshi technical intern trainees as the world's top sending organization. That's the reason everyone chooses us.</p>
            </Container>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h4>EWB Bangladesh</h4>
                        <div className='text-start'>
                            <img style={{ width: '90%' }} src="https://i.ibb.co/DG60kfD/300.png" alt="" />
                            <li>Address:70 Gausul Adam Ave,Dhaka 1230 Bangladesh</li>
                            <li>Email: bdoffice@ewbbd.com</li>
                        </div>
                    </Col>

                    <Col>
                        <h4>EWB Japan</h4>
                        <div className='text-start'>
                            <img style={{ width: '90%' }} src="https://i.ibb.co/wd8TJJS/ewb-japan.png" alt="" />
                            <li>Address:70 Gausul Adam Ave,Dhaka 1230 Bangladesh</li>
                            <li>Email: bdoffice@ewbbd.com</li>
                        </div>
                    </Col>
                    <Col>
                        <h4>Japanese training center</h4>
                        <div className='text-start'>
                            <img style={{ width: '90%' }} src="https://i.ibb.co/1fkDPnX/550-300.png" alt="" />
                            <li>Address:70 Gausul Adam Ave,Dhaka 1230 Bangladesh</li>
                            <li>Email: bdoffice@ewbbd.com</li>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default About