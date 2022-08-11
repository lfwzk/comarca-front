import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// React basic and bootstrap
import Typist from "react-typist";

// Import  Images
import rocket from "../../assets/images/home/portada2.jpg";


class Section extends Component {
    render() {
        return (
            <>
            <div className='bg-image shadow-2-strong ' style={{ 
                //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)), url(${rocket})`, 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${rocket})`, 
                height: `100vh`,
                backgroundSize: `cover`,
             
                
            }}>
 
            <section className="bg-half-170 d-table w-100 " id="home" > 
                <Container >                                     
                    <Row className="justify-content-center mt-5 align-items-center">            
                        <Col lg="8" md="12" className="text-center">
                            <div className="title-heading me-lg-4">
                            <h4 className="heading title fw-bold mt-4 mb-3 text-light ">
                                         CO MARCA  &nbsp;
                                         <Typist>
                                            <br/>
                                         <span className="element text-white ">Un cowork con propósito</span>
                                         <Typist.Backspace count={30} delay={40000} />
                                         <span className="element text-white ">Un cowork con propósito</span>
                                         <Typist.Backspace count={30} delay={40000} />
                                         <span className="element text-white ">Un cowork con propósito</span>
                                         <Typist.Backspace count={30} delay={40000} />
                                         <span className="element text-white ">Un cowork con propósito</span>
                                         <Typist.Backspace count={30} delay={40000} />
                                         <span className="element text-white ">Un cowork con propósito</span>
                                         <Typist.Backspace count={0} delay={40000} />
                                         </Typist>
                                    </h4>
                                    <p className="text-white align-items-center">
                                         Un mundo lleno de ideas y creatividad.❤
                                     </p>
                                     <div className="mt-4">
                                         <Link to="/page-contact-one" className="btn btn-danger mt-2 me-2"><i className="uil uil-envelope"></i> Reservas</Link>
                                         {/* <Link to="/page-contact-one" className="btn btn-outline-alert mt-2"><i className="uil uil-envelope"></i> Reservas</Link>  */}
                                     </div>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
                
            </section>
            </div>
            </>        
        );
    }
}

export default Section;
