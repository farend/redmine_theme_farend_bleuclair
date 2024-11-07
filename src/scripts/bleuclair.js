function setDiscontinuityClassToTabContent(id) {
  if ($('#' + id).hasClass('selected')) {
    if (id === 'tab-notes' || id === 'tab-properties' || id === 'tab-changesets') {
      $('div#tab-content-history').addClass('discontinuity');
    } else {
      $('div#tab-content-history').removeClass('discontinuity');
    }
  }
}

$(document).ajaxSuccess(function() {
  // Put the title in the before content without breaking the tooltip (For issues/show time_entries and changesets tabs)
  $('body.controller-issues.action-show a[href*="activity"][title*=":"]:not([data-absolute-date*=":"])').each(function(_index, element){
    $(element).attr('data-absolute-date', element.title);
  });
});

$(function(){
  /* Change to open external link in another tab */
  $("a.external").attr("target","_blank");
  $("a.help").attr("target","_blank");
  $("div#footer a[href^='https://www.redmine.org/']").attr("target","_blank");

  if (($("a.help").text() == "ヘルプ" ? "ja" : $("html").attr("lang")) == "ja") {
    /* When the language is Japanese, the link destination of help is Redmine.jp */
    $("a.help").attr("href", "https://redmine.jp/guide/");
  }

  // Put the title in the before content without breaking the tooltip
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
