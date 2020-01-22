$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    if(countBy > countTo) {
      $("#output").append("<li>" + "Error: count to needs to be greater than count by." + "</li>")
    } else {
      for(var index = 0; index <= countTo; index += countBy) {
        $("#output").append("<li>" + index + "</li>");
      }
    }
      
  })
})