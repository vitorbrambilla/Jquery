$(function () {
  $("button").on("click", function () {
    var cidade = $("#cidade").val();
    var access_key = "";
    var tempURL = "";

    tempURL = "http://api.weatherstack.com/current?access_key=";
    tempURL += access_key;
    tempURL += "&query=";
    tempURL += cidade;

    $.ajax({
      url: encodeURI(tempURL),
      dataType: "json",
      success: function (data) {
        if (data.success == "" || data.success == false) {
          console.log("Falha");
        } else {
          var temperatura = data.current.temperature;
          $("#res").text(temperatura + " ºC");
        }
      },
      error: function () {
        console.log("Falha");
      }, 
    });
  });
});
