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