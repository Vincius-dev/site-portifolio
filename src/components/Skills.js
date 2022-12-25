import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/React-icon.png";
import meter2 from "../assets/img/Angular-logo.png";
import meter3 from "../assets/img/Nextjs-logo.png";
import meter4 from "../assets/img/github.svg";
import meter5 from "../assets/img/Node.js_logo.png";


import colorSharp from "../assets/img/color-sharp.png";

import { Container, Row, Col } from "react-bootstrap"; 

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades
                            </h2>
                            <p>"É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso." - Bill Gates</p>                            
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="React.JS logo" />
                                    <h5> React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Node.JS logo" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Next.JS logo" />
                                    <h5>Next JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Github logo" />
                                    <h5> Github</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Angular.JS logo" />
                                    <h5>Angular JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" alt="Background" src={colorSharp}/>
        </section>
    )
}
