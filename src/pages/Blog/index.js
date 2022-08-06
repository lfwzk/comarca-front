import React, { Component } from 'react'
import Virtual from './Virtsual';
import Cta from './Cta';
import Laboratorio from './Laboratorio';
import Enprende from './Enprende';
import PopularPost from './PopularPost';
import RecentPost from './RecentPost';
import Search from './Search';


// import Component
import Section from './Section';

export default class index extends Component {
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
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
        return (
            <React.Fragment>
                <Section />
                <section className="section">
                    <Search />
                    <PopularPost />
                    <RecentPost />
                    <Cta />
                    <Virtual />
                    <Laboratorio />
                    <Enprende />
                </section>
            </React.Fragment>
        )
    }
}
