function scrollProgress() {
  var docHeight = document.documentElement,
      docBody = document.body,
      scrollT = 'scrollTop',
      scrollH = 'scrollHeight',
      progress = document.querySelector('.js-progress-bar'),
      scroll;

  scroll = (docHeight[scrollT]||docBody[scrollT]) / ((docHeight[scrollH]||docBody[scrollH]) - docHeight.clientHeight) * 100;
  progress.style.width = scroll + '%';
};

document.addEventListener('scroll', scrollProgress);