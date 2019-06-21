window.onload = function() {
  const elementsWithTitle = document.querySelectorAll('a[href*="activity"][title*=":"]');
  for (i = 0; i < elementsWithTitle.length; i++) {
    elementsWithTitle[i].setAttribute("data-absolute-date", elementsWithTitle[i].title);
  }
}