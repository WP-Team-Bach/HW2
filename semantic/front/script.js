$(document)
  .ready(function () {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function () {
          $('.fixed.menu') //.toggleClass("inverted");
        },
        onBottomPassedReverse: function () {
          $('.fixed.menu') //.toggleClass("inverted");
        }
      });

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');

    let ntm = _.throttle(() => $('.mdark, .mwhite').toggleClass('mdark mwhite'), 600)

    // go dark
    $('.darken')
      .bind('click', function () {
        ntm();
      });

     $('.slides .right')
      .on('click', function() {
        $('.slide')
          .siblings('.active:not(:last-of-type)') 
          .removeClass('active')
          .next()
          .addClass('active');
});

      $('.slides .left')
        .on('click', function() {
          $('.slide')
            .siblings('.active:not(:first-of-type)')
            .removeClass('active')
            .prev()
            .addClass('active');
});
 

  });