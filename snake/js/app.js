/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 300
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
          "image" : {
          "src" : "img/snake.png"
          },
        "stroke": {
          "width": 10,
          "color": "#fff"
        },


      },
      "opacity": {
        "value": 0.5,
        "random": true,
        // "anim": {
        //   "enable": true,
        //   "speed": 1,
        //   "opacity_min": 0.1,
        //   "sync": false
        // }
      },
      "size": {
        "value": 25,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.1,
          "sync":false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#3eff26",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        // "attract": {
        //   "enable": true,
        //   "rotateX": 1200,
        //   "rotateY": 1200
        // }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"     // "push""remove""bubble""repulse"["push", "repulse"]
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);