TweenMax.set( 'svg', {
    visibility: 'visible'
} );

TweenMax.set( '.rings path', {
    drawSVG: '0% 0%'
} )

TweenMax.staggerTo( 'path', 1, { drawSVG: '0% 100%', opacity: -0.5, ease: Sine.easeIn, cycle: { delay: function ( i ) { return i / 25; } }, yoyo: true, repeat: -1, repeatDelay: 0 } )