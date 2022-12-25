import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description,link , imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                    <img src={imgUrl} className="proj-img" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <p><a href={link} className="proj-link">Projeto</a></p>
                        <span>{description}</span>
                    </div>
            </div>
        </Col>
    )
}