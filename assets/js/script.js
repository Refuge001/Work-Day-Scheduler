//Day ticker in the header
$('#currentDay').text(moment().format('MMMM DD, YYYY'));

// Thanks Tish! Main scheduling function - loops through hours, updates description based on localStorage
$('.hour').each(function () {
  var blockTime = parseInt($(this).attr('id'));
  var currentHour = moment().hour();
  var description = localStorage.getItem(blockTime);
  if (currentHour === blockTime) {
    $(this).next().addClass('present').text(description);
  } else if (currentHour < blockTime) {
    $(this).next().addClass('future').text(description);
  } else if (currentHour > blockTime) {
    $(this).next().addClass('past').text(description);
  }
}
);

//Saves to localStorage
function storageSave() {
  var description = $(this).prev().val();
  var pH = $(this).prev().prev().attr('id');
  localStorage.setItem(pH, description);
};

$('.btn').on('click', storageSave);