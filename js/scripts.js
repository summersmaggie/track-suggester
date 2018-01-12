$(document).ready(function() {
  $("form#track").submit(function(event) {
    var company = $("select#company").val();
    var android = $("select#android").val();
    var work = $("select#work").val();
    var build = $("select#build").val();
    var mobile = $("select#mobile").val();

    if (company === 'startup') {
      $('#ruby').show();
    } else {
      $('#c').show();
    }



    event.preventDefault();
  });
});
