function setDiscontinuityClassToTabContent(id) {
  if ($('#' + id).hasClass('selected')) {
    if (id === 'tab-notes' || id === 'tab-properties') {
      $('div#tab-content-history').addClass('discontinuity');
    } else {
      $('div#tab-content-history').removeClass('discontinuity');
    }
  }
}

$(function(){
  /* Change to open external link in another tab */
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");
  $("div#footer a[href^='https://www.redmine.org/']").attr("target","_blank");

  if (($("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang")) == "ja") {
    /* When the language is Japanese, the link destination of help is Redmine.jp */
    $("a.help").attr("href", "http://guide.redmine.jp/");
  }

  $('a[href*="activity"][title*=":"]').each(function(_index, element){
    $(element).attr("data-absolute-date", element.title);
  });

  $('#history > .tabs a').each(function(){
    setDiscontinuityClassToTabContent($(this).attr('id'));
    $(this)[0].addEventListener('click', function(){
      setDiscontinuityClassToTabContent($(this).attr('id'));
    });
  });
});

// collapsible sidebar jQuery plugin
(function($) {
  // main container this is applied to
  var main;
  // triggers show/hide
  var button;
  // the key to use in local storage
  // this will later be expanded using the current controller and action to
  // allow for different sidebar states for different pages
  var localStorageKey = 'redmine-sidebar-state';
  // true if local storage is available
  var canUseLocalStorage = function(){
    try {
      if('localStorage' in window){
        localStorage.setItem('redmine.test.storage', 'ok');
        var item = localStorage.getItem('redmine.test.storage');
        localStorage.removeItem('redmine.test.storage');
        if(item === 'ok') return true;
      }
    } catch (err) {}
    return false;
  }();
  // function to set current sidebar state
  var setState = function(state){
    if(canUseLocalStorage){
      localStorage.setItem(localStorageKey, state);
    }
  };
  var applyState = function(){
    if(main.hasClass('hide-sidebar')){
      setState('hidden');
    } else {
      setState('visible');
    }
  };
  var setupToggleButton = function(){
    $('#content').prepend('<div id="sidebar-switch-panel" style="visibility: visible;"><a id="sidebar-switch-button" href="#"></a></div>')
    button = $('#sidebar-switch-button');
    button.click(function(e){
      main.addClass("animate");
      main.toggleClass('hide-sidebar');
      applyState();
      e.preventDefault();
      return false;
    });
    applyState();
  };
  $.fn.collapsibleSidebar = function() {
    main = this;
    // determine previously stored sidebar state for this page
    if(canUseLocalStorage) {
      // determine current controller/action pair and use them as storage key
      var bodyClass = $('body').attr('class');
      if(bodyClass){
        try {
          localStorageKey += '-' + bodyClass.split(/\s+/).filter(function(s){
            return s.match(/(action|controller)-.*/);
          }).sort().join('-');
        } catch(e) {
          // in case of error (probably IE8), continue with the unmodified key
        }
      }
      var storedState = localStorage.getItem(localStorageKey);
      main.toggleClass('hide-sidebar', storedState === 'hidden');
    }
    // draw the toggle button once the DOM is complete
    $(document).ready(setupToggleButton);
  };
}(jQuery));

$(document).ready(function(){
  if (!$('#main').hasClass('nosidebar')) {
    $('#main').collapsibleSidebar();
  }
});