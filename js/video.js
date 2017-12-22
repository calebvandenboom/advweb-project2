  
$(document).ready(function(){

      var $doc = $(document);
      var $win = $(window);

      // dimensions - we want to cache them on window resize
      var windowHeight, windowWidth;
      var fullHeight, scrollHeight;
      var streetImgWidth = 1536, streetImgHeight = 960;
      calculateDimensions();

      var currentPosition = 0;
      var $videoContainer = $('.street-view');
      var video = $('.street-view > video')[0];

      // handling resize and scroll events
      
      function calculateDimensions() {
        windowWidth = $win.width();
        windowHeight = $win.height();
        fullHeight = $('#article-container').height();
        scrollHeight = fullHeight - windowHeight;
      }
      
      function handleResize() {
        calculateDimensions();
        resizeBackgroundImage();
        handleScroll();
      }
      
      function handleScroll() {
        currentPosition = $win.scrollTop() / scrollHeight;
        render( currentPosition );
      }

      // rendering

      function render( position ) {
        renderVideo( position );
      }

      function renderVideo(position) {
        if ( video.duration ) {
          video.currentTime = position * video.duration;
        }
      }

      function resizeBackgroundImage(){
        // get image container size
        var scale = Math.max( windowHeight/streetImgHeight , windowWidth/streetImgWidth );
        var width = scale * streetImgWidth , height = scale * streetImgHeight;
        var left = (windowWidth-width)/1.5, top = (windowHeight-height)/1.5;
        $videoContainer
              .width(width).height(height)
              .css('position','absolute') // you can change to 'fixed'
              .css('left',left+'px')
              .css('top',top+'px');
      }

      // setting up scroll and resize listeners

      $win.resize( handleResize );
      $win.scroll( handleScroll );

      handleResize();

      // put all of your code beneath here






});