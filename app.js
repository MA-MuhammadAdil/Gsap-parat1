// gsap.to("#box1",{
//     x:500,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",
//     rotate:360,
//     backgroundColor:"white",
//     scale:2
// })

// gsap.from("#box2",{
//     x:500,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",
    
// })

// gsap.from("h1",{
//     y:20,
//     stagger:0.5,
//     opacity:0

// })

// gsap.to("#box1",{
//     x:500,
//     duration:2,
//     delay:1,
//     repeat:-1,
//     yoyo:true,
//     borderRadius:"50%",

// })



// gsap.to("#box1",{
//     x:700,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// let tl = gsap.timeline()

// tl.to("#box1",{
//     x:500,
//     durstion:1.5,
//     delay:1,
//     ratate:360
// })


// tl.to("#box2",{
//     x:500,
//     durstion:1.5,
//     ratate:360
// })

var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    dalay:0.5
})


tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})


tl.from("h1",{
    y:20,
    opacity:0,
    duration:1.5,
    scale:0.2
})







