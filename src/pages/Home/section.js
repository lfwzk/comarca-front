import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// React basic and bootstrap
import Typist from "react-typist";

// Import  Images
import rocket from "../../assets/images/home/portada.jpg";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" id="home">
                    <Container>
                        <Row className="mt-5 align-items-center">
                            <Col lg={7} md={7}>
                                <div className="title-heading me-lg-4">
                                    <h4 className="heading title fw-bold mt-4 mb-3">
                                        CO MARCA  to&nbsp;
                                        <Typist>
                                        <span className="element text-secondary">Software</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Solicitud</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Soluciones de TI</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Negocio corporativo</span> 
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Administración de tareas</span>
                                        <Typist.Backspace count={30} delay={400} />
                                        <span className="element text-secondary">Empresa</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Trabajo colaborativo</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Servicios</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Cartera mínima</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Foros</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">trabajo o carreras</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Aplicación clásica</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Atención al cliente</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Una página</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Alojamiento en la nube</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Evento, Negocios</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Márketing</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Agencia</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Estudio</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Negocios modernos</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Integración</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Desarrollador</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Agencia SEO</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Agencia digital</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Aprender en línea</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Mercadeo social</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Curso Educativo</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Personal Portfolio</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Producto único</span>
                                        <Typist.Backspace count={20} delay={400} />
                                        <span className="element text-secondary">Blogs y Portafolios</span>
                                        </Typist>
                                    </h4>
                                    <p className="para-desc text-muted">
                                        Comience a trabajar con{" "}
                                        <span className="text-secondary fw-bold">
                                        "CO MARCA "
                                        </span>{" "}
                                        un cowork con propocito de crear una nueva forma de trabajar.
                                    </p>
                                    <div className="mt-4">
                                        <Link to="/page-contact-one" className="btn btn-primary mt-2 me-2"><i className="uil uil-envelope"></i> Reservas</Link>
                                        {/* <Link to="#" className="btn btn-outline-primary mt-2"><i className="uil uil-book-alt"></i> Documentation</Link> */}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <img src={rocket} className="img-fluid mover" alt="" />
                        </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;