$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    for(var index = 0; index <= countTo; index += countBy) {
      $("#output").append("<li>" + index + "</li>");
    }
  })
})