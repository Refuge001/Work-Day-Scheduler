$('#currentDay').text(moment().format('MMMM DD, YYYY'));

// Thanks Tish!
$('.timecolor').each(function () {
  var currentHour = (moment().hour());
  var blockTime = parseInt($(this).attr('id'));
  if (currentHour === blockTime) {
    $(this.nextElementSibling).addClass('present');
  } else if (currentHour < blockTime) {
    $(this.nextElementSibling).addClass('future');
  } else if (currentHour > blockTime) {
    $(this.nextElementSibling).addClass('past');
  }
}
);