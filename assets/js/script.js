$('#currentDay').text(moment().format('MMMM DD, YYYY'));

// Thanks Tish!
$('.hour').each(function () {
  var currentHour = (moment().hour());
  var blockTime = parseInt($(this).attr('id'));
  if (currentHour === blockTime) {
    $(this).next().addClass('present');
  } else if (currentHour < blockTime) {
    $(this).next().addClass('future');
  } else if (currentHour > blockTime) {
    $(this).next().addClass('past');
  }
}
);

function storageSave() {
  var description = $(this).prev().val();
  console.log(description);
  console.log(this);
  console.log($(this).prev());
  localStorage.setItem('Description', description);
};


$('.btn').on('click', storageSave);