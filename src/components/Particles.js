import React from 'react';
import Particles from 'react-particles-js';

function ParticlesBackground() {
    return (
        <div className="particle">
            <Particles
                height= "99.6vh"
                width= "95vw"
                params={{
                "particles": {
                    "collisions": {
                        "enable": true
                    },
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": false
                        },
                        "value_area":800
                    },
                    "color": "#fff",
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "color": "#fff"
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "none",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 6,
                            "opacity": 0.4
                        },
                        "push": {
                            "particles_nb": 5
                        }
                    },
                    "retina_detect": true
                }
            }} />
        </div>
    );
}

export default ParticlesBackground;
