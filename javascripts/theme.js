window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href*="activity"][title*=":"]').forEach(function (el) {
    el.setAttribute("data-absolute-date", el.title);
  });
})