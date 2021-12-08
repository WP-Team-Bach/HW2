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

    $('.slides.gal .right')
      .on('click', function () {
        $('.gal .slide')
          .siblings('.active:not(:last-of-type)')
          .removeClass('active')
          .next()
          .addClass('active');
      });

    $('.slides.gal .left')
      .on('click', function () {
        $('.gal .slide')
          .siblings('.active:not(:first-of-type)')
          .removeClass('active')
          .prev()
          .addClass('active');
      });

    $('.slides.cms .right')
      .on('click', function () {
        $('.cms .slide')
          .siblings('.active:not(:last-of-type)')
          .removeClass('active')
          .next()
          .addClass('active');
      });

    $('.slides.cms .left')
      .on('click', function () {
        $('.cms .slide')
          .siblings('.active:not(:first-of-type)')
          .removeClass('active')
          .prev()
          .addClass('active');
      });

    

    setInterval(() => {
      let nx = $('.cms .slide')
        .siblings('.active:not(:last-of-type)')
        .removeClass('active')
        .next()

      if (nx.length == 0) {
        nx = $('.cms .slide:first-of-type')
      }

      nx.addClass('active');

      
      return true
    }, 2000)

  });