// All Custom JS

// Nivo  Slider Call

//NivoSlider Slider

  jQuery(window).load(function() {

    jQuery('#slider').nivoSlider({
      effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown'
      slices: 15,                     // For slice animations
      boxCols: 8,                     // For box animations
      boxRows: 4,                     // For box animations
      animSpeed: 1000,                 // Slide transition speed
      pauseTime: 2900,                 // How long each slide will show
      startSlide: 0,                     // Set starting Slide (0 index)
      directionNav: true,             // Next & Prev navigation
      controlNav: false,                 // 1,2,3... navigation
      controlNavThumbs: false,         // Use thumbnails for Control Nav
      pauseOnHover: true,             // Stop animation while hovering
      manualAdvance: false,             // Force manual transitions
      prevText: '<i class="fa fa-chevron-left fa-4x"></i>', // Prev directionNav text
      nextText: '<i class="fa fa-chevron-right fa-4x"></i>', // Next directionNav text
      randomStart: false,             // Start on a random slide
      beforeChange: function(){},     // Triggers before a slide transition
      afterChange: function(){},         // Triggers after a slide transition
      slideshowEnd: function(){},     // Triggers after all slides have been shown
      lastSlide: function(){},         // Triggers when last slide is shown
      afterLoad: function(){}         // Triggers when slider has loaded      
    });


//Magnific Popup
    jQuery('.tester-a').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom mfp-fade', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 800 // don't foget to change the duration also in CSS
        }
    });
    

    //Mobile menu glow fo UI purposes.
    mobileBlink();

    function mobileBlink(){

      var counter = 0;

      //Check window Size
      if(jQuery(window).width() <= 768){

          var blinker = function(){
              jQuery('.navbar-toggle').fadeTo(1000, 0.2).fadeTo(1000, 1.0);
          }


          var triggerA = setInterval(function(){

              blinker(); 
              counter += 1;
              if(counter === 2){
                clearInterval(triggerA);
              }
              
              jQuery('.navbar-toggle').click(function(){
                  clearInterval(triggerA);
              });

          }, 2200);

      } //End of window size if/else

    } //End of mobileBlink function



  }); //Window onload ends



