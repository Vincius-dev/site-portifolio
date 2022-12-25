import { Container, Row, Col } from "react-bootstrap"

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github2.svg';
import navIcon3 from '../assets/img/email.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-8336321b6"><img src={navIcon1} alt="Icone Linkedin" /></a>
                            <a href="https://github.com/Vincius-dev"><img src={navIcon2} alt="Icone Github" /></a>
                            <a href="mailto:vinicius.fariascontato@gmail.com"><img src={navIcon3} alt="Icone Email" /></a>
                        </div>
                        <p>Copyright 2022. All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}