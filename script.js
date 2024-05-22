var tl = gsap.timeline()

tl.from("header a",{
    y:-50,
    opacity: 0,
    duration: 0.1,
    delay:0.1,
    stagger:0.1
})
tl.from(".ri-menu-line",{
    y:-50,
    opacity: 0,
    duration: 0.1,
    // delay:0.1,
    stagger:0.1
})
tl.from("header ul li",{
    y:-50,
    opacity: 0,
    duration: 0.1,
    // delay:0.1,
    stagger:0.1
})

tl.from("#loginButton button",{
    y:-50,
    opacity: 0,
    duration: 0.1,
    // delay:0.1,
    stagger:0.1
})
tl.from("#right img",{
    x:500,
    opacity: 0,
    duration: 0.3,
    // delay:0.1,
})
tl.from("#laft h1",{
    x:-500,
    opacity: 0,
    duration: 0.1,
    // delay:0.1,
})
tl.from("#laft p",{
    x:-500,
    opacity: 0,
    duration: 0.2,
    // delay:0.1,
})
tl.from("#laft button",{
    x:-500,
    opacity: 0,
    duration: 0.2,
    // delay:0.1,
})
tl.from("#laft img",{
    x:-500,
    opacity: 0,
    duration: 0.2,
    // delay:0.1,
})