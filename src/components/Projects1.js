import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/service1.jpg";
import projImg2 from "../assets/img/service2.png";
import projImg3 from "../assets/img/service3.png";
import projImg4 from "../assets/img/service4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects1 = ({ buttonLink }) => {
  const projects = [
    {
      title: "Business Startup 4",
      description: "Code collab app: Real-time editing, version control, code review, communication tools. Enhances productivity, maintains code integrity, streamlines  in development.",
      imgUrl: projImg4,
      buttonLink: "http://localhost:6010/auth/google/callback",
    },
    {
      title: "Business Startup 2",
      description: "Code with AI: AI analyzes code, suggests optimizations, detects errors, and assists in code translation and understanding, enhancing development efficiency.",
      imgUrl: projImg2,
      buttonLink: "http://localhost:6010/auth/google/callback",
    },
    {
      title: "Business Startup 3",
      description: "Code editors: Software for writing, editing, and debugging code, with features like syntax highlighting, auto-completion, and customization options.",
      imgUrl: projImg3,
      buttonLink: "http://localhost:6010/auth/google/callback",
    },
    {
      title: "Business Startup 1",
      description: "Code Review Assistant: The platform offers a code review tool that analyse the resume based on time complexity , space used and optimization level of the code. Users can input the code in the input section,it can give result.",
      imgUrl: projImg1,
      buttonLink: "http://localhost:6010/auth/google/callback",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row xs={1} md={2} lg={4}>
          {projects.map((project, index) => (
            <Col key={index} className="mb-4">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={`card border rounded ${isVisible ? "animate__animated animate__fadeIn" : ""}`}
                    style={{ marginBottom: "1rem", height: "100%" }}
                  >
                    <img
                      src={project.imgUrl}
                      className="card-img-top"
                      alt="project"
                      style={{ borderRadius: "0.5rem", maxHeight: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body" style={{ padding: "1rem", height: "150px" }}> {/* Set a fixed height */}
                    
                      <p className="card-text" style={{ fontSize: "0.85rem", lineHeight: "1.5", width: "100%" }}>{project.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-center" style={{ height: "50px" }}> {/* Set a fixed height */}
                      <a
                        href={project.buttonLink}
                        className="btn btn-primary btn-sm d-flex align-items-center justify-content-center"
                        style={{ borderRadius: "10px", padding: "0.5rem 1rem" }}
                        target="_blank" rel="noopener noreferrer"
                      >
                        Browse
                      </a>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

