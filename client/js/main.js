// $(function() {
	// $(document).on('click', '#pm1', function() {
	// 	$('#pm1').css({'width': '100%', 'transition': 'width 1s ease-in-out'})
	// });
// })

$(document).on('mouseenter', '#pm1', function() {
  $('#pm1').css({'width': '70%', 'transition':'width 0.5s ease-in-out'});
  $('#pm2').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm3').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm4').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
});

$(document).on('mouseenter', '#pm2', function() {
  $('#pm1').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm2').css({'width': '70%', 'transition':'width 0.5s ease-in-out'});
  $('#pm3').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm4').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
});

$(document).on('mouseenter', '#pm3', function() {
  $('#pm1').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm2').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm3').css({'width': '70%', 'transition':'width 0.5s ease-in-out'});
  $('#pm4').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
});

$(document).on('mouseenter', '#pm4', function() {
  $('#pm1').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm2').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm3').css({'width': '10%', 'transition':'width 0.5s ease-in-out'});
  $('#pm4').css({'width': '70%', 'transition':'width 0.5s ease-in-out'});
});

$(document).on('mouseleave', '.procedureMenu', function() {
  $('#pm1').css({'width': '25%', 'transition':'width 0.5s ease-in-out'});
  $('#pm2').css({'width': '25%', 'transition':'width 0.5s ease-in-out'});
  $('#pm3').css({'width': '25%', 'transition':'width 0.5s ease-in-out'});
  $('#pm4').css({'width': '25%', 'transition':'width 0.5s ease-in-out'});
});