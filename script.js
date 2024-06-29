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
    // markers:true,
  }
})


