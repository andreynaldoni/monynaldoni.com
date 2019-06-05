AOS.init({
  duration: 800,
  easing: 'slide'
});

(function($) {

  "use strict";

  var showInstagramPics = function (feed) {
    var feedElement = document.getElementById('feed');

    $.each(feed, function () {
      var item = $(this)[0];
      var divArea = document.createElement('div');
      divArea.className = 'col-sm-12 col-md ftco-animate fadeInUp ftco-animated';

      var linkElement = document.createElement('a');
      linkElement.className = 'insta-img image-popup';
      linkElement.setAttribute('href', item.imgUrl);
      linkElement.setAttribute('style', 'background-image: url(' + item.imgUrl + ');');
      linkElement.setAttribute('title', item.title)
      
      var divIcons = document.createElement('div');
      divIcons.className = 'icon d-flex justify-content-center';

      var instaIcon = document.createElement('span');
      instaIcon.className = 'icon-instagram align-self-center';

      divIcons.appendChild(instaIcon);
      linkElement.appendChild(divIcons);
      divArea.appendChild(linkElement);
      feedElement.appendChild(divArea);

    });
    // magnific popup
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      // mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  }

  var getInstagramPics = function () {
    var url = 'https://www.instagram.com/monynaldonifotografia/?__a=1';

    $.getJSON(url, function (data) {
      var edges = data.graphql.user.edge_owner_to_timeline_media.edges;
      var maxPhotos = 6;
      var id = 0;
      var feed = [];
      
      $.each(edges, function () {
        var item = $(this)[0];
        if (id >= maxPhotos) {
          return;
        }

        var thumbnail = item.node.thumbnail_resources[3].src; // 320x320
        var imgUrl = item.node.display_url;
        var likes = item.node.edge_liked_by.count;
        var comments = item.node.edge_media_to_comment.count;
        var title = item.node.edge_media_to_caption.edges[0].node.text

        feed.push({ id, thumbnail, imgUrl, likes, comments, title });

        id += 1;
      });

      return showInstagramPics(feed);
    });
  }

  getInstagramPics();

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


  var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
   $.Scrollax();


   var burgerMenu = function() {

    $('.js-colorlib-nav-toggle').on('click', function(event){
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');	
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');	
      }
    });
  };
  burgerMenu();

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function() {

    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {

        if ( $('body').hasClass('offcanvas') ) {

          $('body').removeClass('offcanvas');
          $('.js-colorlib-nav-toggle').removeClass('active');
      
        }
        
      }
    });

    $(window).scroll(function(){
      if ( $('body').hasClass('offcanvas') ) {

          $('body').removeClass('offcanvas');
          $('.js-colorlib-nav-toggle').removeClass('active');
      
        }
    });

  };
  mobileMenuOutsideClick();

  var carousel = function() {
    $('.home-slider').owlCarousel({
      loop:true,
      autoplay: true,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:false,
      autoplayHoverPause: false,
      items: 1,
      navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });

    $('.author-slider').owlCarousel({
      autoplay: true,
      loop: true,
      items:1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      dots: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive:{
        0:{
          items: 1
        },
        600:{
          items: 1
        },
        1000:{
          items: 1
        }
      }
    });

  };
  carousel();

  

  var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
        
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .ftco-animate.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            },  k * 50, 'easeInOutExpo' );
          });
          
        }, 100);
        
      }

    } , { offset: '95%' } );
  };
  contentWayPoint();

  var counter = function() {
    
    $('#section-counter').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
        $('.number').each(function(){
          var $this = $(this),
            num = $this.data('number');
            console.log(num);
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step
            }, 7000
          );
        });
        
      }

    } , { offset: '95%' } );

  }
  counter();

})(jQuery);

