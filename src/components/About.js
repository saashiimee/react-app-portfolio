import React from 'react'
import Skills from './Skills'

const section2title = "About Me";
const about = { 
    paragraph: "Hello! My name is Kittisak and I enjoy building software whether it be web application or desktop application. My interest in software development comes from my main interest in computer and video games.",
    paragraph2: "Fast-forward to today, I've had the priviledge of working at a digital consulting company where I had experience web development. My main focus these days is learning and understanding new technologies being used throughout the web development industry."
}
const skillsBar = [
    {
      name: "HTML5",
      // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
      svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS3",
      // svg: '',
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      // svg: '',
      faClass: "fab fa-js",
    },
    {
        name: "React",
        // svg: '',
        faClass: "fab fa-react",
    },
    {
        name: "Bootstrap",
        // svg: '',
        faClass: "fab fa-bootstrap",
    },
    {
      name: "Node",
      // svg: '',
      faClass: "fab fa-node",
    },
    {
      name: "Python",
      // svg: '',
      faClass: "fab fa-python",
    },
    {
      name: "Java",
      // svg: '',
      faClass: "fab fa-java",
    },
    {
        name: "R", 
        // svg: '',
        faClass: "fab fa-r-project"
    },
    {
        name: "Database",
        // svg: '',
        faClass: "fas fa-database",
    },
    {
        name: "Git",
        // svg: '',
        faClass: "fab fa-git-alt"
    }
];

function About() {
    return (
    <div id="about" className="effect2">
        <div data-aos="zoom-in-up" data-aos-once="true" className="row">
        <div className="col-12 offset-md-1 col-md-6 about">
            <div className="About-title-box">
            <h1 id="About" className="red-line">{section2title}</h1>
            </div>
            <p className="lead about-text">
                {about.paragraph}  
            </p>
            <p className="lead about-text2">
                {about.paragraph2}
            </p>
        </div>
        <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Button" id="not-dark2">
            <button className="btn btn-primary btn-lg">
                <a download href={require('../assets/Kittisak_Tipakornrojanakit_Resume.pdf').default}>
                    <i class='fi-rr-cloud-download download-icon'></i>
                    Download Resume
                </a>
            </button>
        </div>
        </div>
        <div id="Skills"> 
            <div className="row d-flex justify-content-center skills">
                {skillsBar.map((x) => 
                    <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                )}̀
            </div> 
        </div>
    </div>
    );
}

export default About
