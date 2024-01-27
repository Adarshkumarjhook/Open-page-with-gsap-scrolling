 var tl = gsap.timeline({
    scrollTrigger: {
       trigger: '.main',
       markers: true,
       scroller: 'body',
       start: '50% 50%',
       end: '100% 50%',
       scrub: 3,
       pin: true,


    }
 });

 tl.to('.main_1', {
       top: '-50vh'


    }, 'a')

    .to('.main_3', {
       bottom: '-50vh'
    }, 'a')


    .to('.h', {
       opacity: 0,
       color: 'green',
       stagger: 0,
     //  rotate:190,

    }, 'a')


    .to('.h span', {
       opacity: 0,
       color: 'green',
       stagger: 0,
      // rotate:1900,

    }, 'a')



 //opacity: 0,









 /*
 gsap.from('.box', {
    duration: 2,
   yoyo: true,
    y: 600,
   margin:15,
    autoRevert: true,
       opacity: 0,
       rotate:90,

    repeat: -1,
    
    
 });



 */

