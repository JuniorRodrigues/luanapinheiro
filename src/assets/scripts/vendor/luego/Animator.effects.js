;(function(window, document, undefined, Animator){
    Animator.add('chars', function($el, duration) {
        var tl = new TimelineLite,
            st = new SplitText($el, {type: 'words,chars'}),
            chars = st.chars;

        return tl.staggerFrom(chars, duration, { opacity: 0, scale: 0, y: 50, rotationX: 90, transformOrigin: '0% 50% -50', ease: Quint.easeOut }, 0.01, '+=0');
    });

    Animator.add('fade', function($el, duration) {
        return TweenMax.from($el, duration, { opacity: 0, ease: Linear.easeNone });
    });

    Animator.add('fade-top', function($el, duration) {
        return TweenMax.from($el, duration, { opacity: 0, y: 60, ease: Quint.easeOut });
    });

    Animator.add('fade-right', function($el, duration) {
        return TweenMax.from($el, duration, { opacity: 0, x: -60, ease: Quint.easeOut });
    });

    Animator.add('fade-bottom', function($el, duration) {
        return TweenMax.from($el, duration, { opacity: 0, y: -60, ease: Quint.easeOut });
    });

    Animator.add('fade-left', function($el, duration) {
        return TweenMax.from($el, duration, { opacity: 0, x: 60, ease: Quint.easeOut });
    });

    Animator.add('zoom-in', function($el, duration) {
        return TweenMax.from($el, duration, { opacity: 0, scale: 0, ease: Quint.easeOut });
    });

    Animator.add('arise-right', function($el, duration) {
        TweenMax.set( $el, { width: $el.width(), maxWidth: 'none' } );
        TweenMax.set( $el.parent(), { display: 'block', overflow: 'hidden', width: 0 } );
        return TweenMax.to($el.parent(), duration, { width: '100%', ease: 'cubic-bezier(0.575,0.005,0.285,1.005)' });
    });

    Animator.add('add-class', function($el, duration) {
       $el.addClass($el.attr('data-ani-class'));
       setTimeout(function(){ $el.removeClass($el.attr('data-ani-class')); }, 600);
    });

    Animator.add('sm-parallax', function ($el) {
        if( wW >= 1280) {
        return new TimelineMax()
            .add([
                TweenMax.fromTo($el, 1, { y: '0%' }, { y: '50%', ease: Linear.easeNone })
            ]);
        }
    });
})(window, document, undefined, Animator);
