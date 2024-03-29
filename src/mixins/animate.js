import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animate = {
    data() {
        return {};
    },
    methods: {
        banner() {
            gsap.from(".text", {
              duration: 1,
              // scale: 0.8,
              y: 50,
              autoAlpha: 0, 
              delay: 0.5, 
              stagger: 0.2,
              ease: "back", 
              force3D: true
            });
          },
          // https://greensock.com/get-started#tweening-basics
          
          batch() {
            ScrollTrigger.batch(".up", {
                onEnter: (elements) => {
                gsap.from(elements, {
                  // interval: 0.1, // time window (in seconds) for batching to occur. 
                  // start: 'top bottom-=1',
                  trigger: ".up",
                  start: "-50% bottom",
                  // start: '20px bottom',
                  end: '+=200',                  
                  // scrub: 1,
                  autoAlpha: 0, 
                  y: 50,
                  stagger: 0.5,
                  duration: 1.5,
                  ease: "back",
                  // once: true
                  });
                console.log(elements.length, "elements entered");
              },
           });
          },
    },

    mounted() {
        this.banner();
        this.batch();
    },
};
