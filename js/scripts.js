$(document).ready(function() {
  $("form#track").submit(function(event) {
    var company = $("select#company").val();
    var android = $("select#android").val();
    var work = $("select#work").val();
    var build = $("select#build").val();
    var mobile = $("select#mobile").val();

    if (work === 'software' && build === 'games') {
      $('#c').show();
    } else if (android === 'yes' && mobile === 'yes2') {
      $('#java').show();
    } else if (work === 'web' && build === 'websites') {
      $('#ruby').show();
    } else if (android === 'no' && mobile === 'no2') {
      $('#ruby').show();
    } else {
      $('#java').show();
    }

    event.preventDefault();
  });
});
