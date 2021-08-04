import IntersectionObserver from 'intersection-observer-polyfill';

export const obsAnimate = {
    data() {
        return {
            fadeUp: "fade-up 1.5s cubic-bezier(.66,-0.51,.36,1.43)",
            fade: "fade-in 1.5s cubic-bezier(.66,-0.51,.36,1.43)"
        }
    },
    methods: {
        obsAnimate() {
            const options = {
                root: null,
                rootMargin: '100px 0px',
                threshold: 0
                // threshold: [0, 0.1, 0.2, 0.5, 1]
            }

            const callback = (entries) => {
                entries.forEach(
                    (entry) => {
                        if (entry.isIntersecting) {
                            console.log("The element is intersecting >");
                            //If intersecting then attach keyframe animation.
                            //We do this by assigning the data attribute 
                            //we coded in the markup to the style.animation 
                            //of the element
                            entry.target.style.animation = 
                            entry.target.dataset.animate;
                        } else {
                            //We take of the animation if not in view
                            entry.target.style.animation="none";
                        }
                    }
                );       
            }

            //1] Create a new intersectionObserver object, 
            //which will accept a callback function as 
            //a parameter.

            let observer = new IntersectionObserver(callback, options);

            //2]Select all elements that have ".animate" 
            //class.In our case we have three 
            //elements (.image,<p> and h<2>).

            const animationItems = document.querySelectorAll('.animate');


            //3]Loop through selected elements and add to the
            //observer watch list.      

            animationItems.forEach(item => {
                observer.observe(item)         
            })
        }
    },
    mounted() {
        this.obsAnimate();
    }
}