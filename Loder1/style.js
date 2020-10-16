gsap.set('svg', {
    visibility: 'visible'
})
gsap.set('circle', {
    transformOrigin: '50% 50%',
    rotation: -90
})
let tl = gsap.timeline({
    repeat: -1,
    defaults: {
        duration: 1,
        ease: 'sine.inOut'
    }
});
tl.to('#outer', {
    drawSVG: '100% 100%'
})
    .to('#outer', {
        opacity: 0,
        ease: 'sine.in',
        duration: 0.5
    }, 0.5)
    .fromTo('#inner', {
        drawSVG: '0% 0%'
    }, {
        drawSVG: '0% 100%'
    }, 0)
    .to('#inner', {
        attr: {
            r: 43
        },
        stroke: '#00D7E4',
        ease: 'back.inOut(1)'
    })
    .to('#dot', {
        attr: {
            r: 12
        },
        ease: 'back.inOut(1)'
    }, '-=1')
    .to('#mid', {
        drawSVG: '100% 100%'
        //duration: 0.95
    }, 0)
    .to('#whole', {
        transformOrigin: '50% 50%',
        rotation: 360,
        duration: 1,
        ease: 'sine.inOut'
    }, 0)
//ScrubGSAPTimeline(tl)