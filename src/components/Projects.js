import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import projImgTemplate from "../assets/img/project-img1.png";
import projImgMedPlus from "../assets/img/projetoMedPlus.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projectFirst = [
        {
            title: "Projeto MedPlus",
            description: "Um sistema de agendamento de consultas. Feito com Angular e Node.",
            imgUrl: projImgMedPlus,
            link: "https://www.youtube.com/watch?v=gfEEJ9Umv1Q"
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },

    ];
    const projectSecond = [
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },

    ];
    const projectThird = [
        {
            title: "Em breve",
            description: "Em Desenvolvimento",
            imgUrl: projImgTemplate,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated_animated animate_slideInUp" : ""}>
                                    <h2> Projetos </h2>
                                    <p> Veja em funcionamento os projetos que desenvolvi:</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projetos Pessoais</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Projetos Para Estudo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Certificações</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectFirst.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectSecond.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectThird.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}