// var tl = gsap.timeline()


// tl.to('#box1',{
//   x:1350,
//   rotate:360,
//   scale:0.5,
//   duration:2,
//   delay:1
// })
// tl.to('#box2',{
//   x:1350,
//   rotate:360,
//   scale:0.5,
//   duration:2,


// })

// tl.to('#box3',{
//   x:1350,
//   rotate:360,
//   scale:0.5,
//   duration:2,

// })


gsap.from('#page1 #circle',{
  scale:0,
  delay:1,
  duration:2,
  rotate:720,

})

gsap.from('#page2 #circle',{
  scale:0,
  delay:1,
  duration:2,
  rotate:720,
  scrollTrigger: {
    trigger:"#page2 #circle",
    scroller:"body",
    end:"top 30%",
    scrub:3,
    // markers:true,
  }
})

gsap.from('#page3 #circle',{
  scale:0,
  delay:1,
  duration:2,
  rotate:720,
  scrollTrigger: {
    trigger:"#page3 #circle",
    scroller:"body",
    end:"top 30%",
    scrub:3,
    start:"top 0",
    end:"end -100%"
    // markers:true,
  }

})
gsap.from('#page4 #circle',{
  scale:0,
  delay:1,
  duration:2,
  rotate:720,
  scrollTrigger: {
    trigger:"#page4 #circle",
    scroller:"body",
    end:"top 30%",
    scrub:3,
    // markers:true,
  }
})


gsap.to('#page5 h1',{
  transform:"translateX(-130%)",
  scrollTrigger: {
    trigger:"#page5",
    scroller:"body",
    scrub:2,
    start:"top 0",
    end:"top -100%",
    pin:true
    // markers:true,
  }
})

gsap.from('#page6 #circle',{
  scale:0,
  delay:1,
  duration:2,
  rotate:720,
  scrollTrigger: {
    trigger:"#page6 #circle",
    scroller:"body",
    end:"top 30%",
    scrub:3,
    // markers:true,
  }
})

