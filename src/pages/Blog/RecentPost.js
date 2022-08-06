import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Blog Images
import blog1 from "../../assets/images/blog/team/team.jpg";
import blog2 from "../../assets/images/blog/colaborativo/labora.jpg";
import blog3 from "../../assets/images/blog/enprendedor/emprende.jpg";

export default class RecentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: blog1,
          title: "Sala de Reuniones - CO TEAM",
          like: "33",
          comment: "08",
          autor: "Co Marca",
        },
        {
          id: 2,
          image: blog2,
          title: "Sala de Reuniones - CO LABORATIVA - BOB 75.00",
          like: "33",
          comment: "08",
          autor: "Co Marca",
        },
        {
          id: 3,
          image: blog3,
          title: "Sala taller-CO EMPRENDEDOR  BOB 150.00",
          like: "33",
          comment: "08",
          autor: "Co Marca",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center mb-4 pb-2">
            <Col md={8}>
              <div className="section-title text-center text-md-start">
                <h4 className="mb-4">Espacios Grupal</h4>
                <p className="text-muted mb-0 para-desc">
                        Comience a trabajar con{" "}
                        <span className="text-primary fw-bold">
                        CO MARCA 
                        </span>{" "}
                        que puede proporcionar todo los espacios que necesites para un buen desarrollo de su empresa.
                    </p>
              </div>
            </Col>
          </Row>
          <Row>
            {this.state.blogs.map((blog, key) => (
              <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                <Card className="blog rounded border-0 shadow overflow-hidden">
                  <div className="position-relative">
                    <img src={blog.image} className="card-img-top" alt="..." />
                    <div className="overlay rounded-top bg-dark"></div>
                  </div>
                  <CardBody className="content">
                    <h5>
                      <Link to="#" className="card-title title text-dark">
                        {blog.title}
                      </Link>
                    </h5>
                    <div className="post-meta d-flex justify-content-between mt-3">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item me-2 mb-0">
                          <Link to="#" className="text-muted like">
                            <i className="mdi mdi-heart-outline me-1"></i>33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted comments">
                            <i className="mdi mdi-comment-outline me-1"></i>08
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                  <div className="author">
                    <small className="text-light user d-block">
                      <i className="mdi mdi-account"></i> Co Marca
                    </small>
                  </div>
                </Card>
              </Col>
            ))}
            <Col xs={12} className="mt-4 pt-2">
              <div className="text-center">
                <Link to="page-blog-servicio-private" className="btn btn-primary">
                  Mas información{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                  </i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
