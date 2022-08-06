// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

//Import Icons

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//Import Slick Slider CSS
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

// import images
import comuni01 from "../../../assets/images/blog/comunidad/comunidad.jpg";
import comuni02 from "../../../assets/images/blog/comunidad/comunidad1.jpg";
import comuni03 from "../../../assets/images/blog/comunidad/comunidad2.jpg";
import comuni04 from "../../../assets/images/blog/comunidad/comunidad3.jpg";
import comuni05 from "../../../assets/images/blog/comunidad/comunidad4.jpg";
import comuni06 from "../../../assets/images/blog/comunidad/comunidad5.jpg";
import comuni07 from "../../../assets/images/blog/comunidad/comunidad6.jpg";
import comuni08 from "../../../assets/images/blog/comunidad/comunidad7.jpg";
import comuni09 from "../../../assets/images/blog/comunidad/comunidad8.jpg";

// import images
import privado01 from "../../../assets/images/blog/privado/privado.jpg";
import privado02 from "../../../assets/images/blog/privado/privado1.jpg";
import privado03 from "../../../assets/images/blog/privado/privado2.jpg";
import privado04 from "../../../assets/images/blog/privado/privado3.jpg";
import privado05 from "../../../assets/images/blog/privado/privado4.jpg";
import privado06 from "../../../assets/images/blog/privado/privado5.jpg";

class PageBlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "CO MARCA ", link: "/" },
        { id: 2, name: "Servicio", link: "#" },
        { id: 4, name: "Detalle Servicio" },
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
      successMsg: false,
      nav1: null,
      nav2: null,
      items: 1,
    };
    this.addItem.bind(this);
    this.removeItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addItem = () => {
    this.setState({ items: this.state.items + 1 });
  };

  removeItem = () => {
    if (this.state.items > 1) {
      this.setState({ items: this.state.items - 1 });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }
  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    var settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      draggable: true,
      pauseOnHover: true,
    };
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb pathItems={this.state.pathItems}>
          <h2> Espacios Individual </h2>
          <ul className="list-unstyled mt-4">
            <li className="list-inline-item h6 user text-muted me-2">
              <i className="mdi mdi-account"></i> Co Marca
            </li>
            {/* <li className="list-inline-item h6 date text-muted">
              <i className="mdi mdi-calendar-check"></i> 13th August, 2019
            </li> */}
          </ul>
        </PageBreadcrumb>
        <div className="form-icon position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                {/* main slider */}
                <Slider
                  {...settings}
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div>
                    <img
                      src={comuni01}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni02}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni03}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni04}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni05}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni06}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni07}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni08}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={comuni09}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                </Slider>

                {/* Slider thumbnails */}
                <Slider
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img src={comuni01} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni02} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni03} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni04} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni05} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni06} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni07} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni08} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={comuni09} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-md-4">
                  <h4 className="title mb-4">Estacion de trabajo - CO MUNIDAD</h4>
                  <div className="d-flex justify-content-between my-4">
                    <h4 className="mb-0">
                      <b>BOB 25.00</b>
                    </h4>
                    <div className="text-warning">
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star-half"></span>
                      <span className="text-muted ps-2">23 Reviews</span>
                    </div>
                  </div>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      CO MARCA 
                    </span>{" "}
                    Espacio de oficina en un área común, *todo incluido* servicios básicos, wifi, cafetería libre ilimitada, casillero con las comodidades, y los servicios extras de apoyo.
                    Privilegios de ser miembro coworker de la comunidad de Co – Marca:
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i className="mdi mdi-check me-2"></i> Ingresar a una comunidad y red de negocios y ser parte de las actividades realizadas en cada una de ellas
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>Accesos a las áreas comunes áreas verde comedores, cocina y equipamiento.
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Planes
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Membresía Mensual Full Time
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Membresía Mensual Part Time
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Plan Semanal
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Plan día
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Servicio por hora
                    </li>
                    <li>
                      <h4>Horario 24/7 precios diferenciados</h4>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link to="shop-cart" className="btn btn-primary">
                      Reserva
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col md="6">
                {/* main slider */}
                <Slider
                  {...settings}
                  asNavFor={this.state.nav2}
                  ref={(slider) => (this.slider1 = slider)}
                >
                  <div>
                    <img
                      src={privado01}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={privado02}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={privado03}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={privado04}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={privado05}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                  <div>
                    <img
                      src={privado06}
                      className="img-fluid rounded"
                      alt="alt"
                    />
                  </div>
                </Slider>

                {/* Slider thumbnails */}
                <Slider
                  asNavFor={this.state.nav1}
                  ref={(slider) => (this.slider2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div>
                    <img src={privado01} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={privado02} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={privado03} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={privado04} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={privado05} className="img-fluid" alt="" />
                  </div>
                  <div>
                    <img src={privado06} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </Col>

              <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-md-4">
                  <h4 className="title mb-4">Estacion de trabajo - CO PRIVADO</h4>
                  <div className="d-flex justify-content-between my-4">
                    <h4 className="mb-0">
                      <b>BOB 25.00</b>
                    </h4>
                    <div className="text-warning">
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star"></span>
                      <span className="mdi mdi-star-half"></span>
                      <span className="text-muted ps-2">23 Reviews</span>
                    </div>
                  </div>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{" "}
                    <span className="text-primary fw-bold">
                      CO MARCA 
                    </span>{" "}
                    Espacio de oficina en un área común, *todo incluido* servicios básicos, wifi, cafetería libre ilimitada, casillero con las comodidades, y los servicios extras de apoyo.
                    Privilegios de ser miembro coworker de la comunidad de Co – Marca:
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i className="mdi mdi-check me-2"></i> Ingresar a una comunidad y red de negocios y ser parte de las actividades realizadas en cada una de ellas
                    </li>
                    <li>
                      <i className="mdi mdi-check me-2"></i>Accesos a las áreas comunes áreas verde comedores, cocina y equipamiento.
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Planes
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Membresía Mensual Full Time
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Membresía Mensual Part Time
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Plan Semanal
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Plan día
                    </li>
                    <li>
                      <i className="mdi mdi-check-all me-2"></i>Servicio por hora
                    </li>
                    <li>
                      <h4>Horario 24/7 precios diferenciados</h4>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">
                      Reserva
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageBlogDetail;
