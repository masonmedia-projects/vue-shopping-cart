// contains all Intersection Observer instances for animation
// import IntersectionObserver from 'intersection-observer-polyfill';

export const observer = {
    data() {
        return {

        }
    },
    methods: {
        observeAnimate() {
            const fadeUp = document.querySelectorAll(".up")
            const blur = document.querySelectorAll(".blur")
            const options = {
                root: null,
                // rootMargin: '200%',
                rootMargin: '-100px',
                threshold: 0
            }
    
    // let callback1 = (entries) => { 
    //     entries.forEach(entry => {
            
    //         // If entry (box) is visible - according with the params set in `options`
    //         // then adds `isVisible` class to box
    //         // otherwise removes `isVisible` class
    //         if(entry.isIntersecting) {
    //             entry.target.classList.add('fade-up');
    //         } else {
    //             entry.target.classList.remove('fade-up');		
    //         }
    
    //     });
    // }
    // let observer1 = new IntersectionObserver(callback1, options);


    // fade-up

    const observer1 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__fadeIn', 'animate__slow');
            }
        });
    }, options);
    // https://staygolddesign.club/2019/06/26/multiple-intersection-observer/
    // loop over all up classes + observe (elements is random variable name)
    fadeUp.forEach(elements => {
        observer1.observe(elements);
    });

        // blur
    
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('blur');
                    console.log('blur activasted!')
                }
            });
        }, options);

        blur.forEach(elements => {
            observer2.observe(elements);
        });
    }

    },// end methods
    mounted() {
        this.observeAnimate();
        console.log("Observing!")
    }

}


