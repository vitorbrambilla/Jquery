(function ($) {
  $.fn.load = function (action = "load", params) {
    let defaults = {
      divClass: "dual-ring",
      divQtd: 0,
    };

    let options = $.extend(defaults, params);

    return this.each(function () {
      switch (action) {
        case "load":
          let divToAppend = document.createElement("div");
          divToAppend.id = "loader";
          $(divToAppend).css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          });

          let divLoad = document.createElement("div");
          divLoad.className = "lds-" + options.divClass;

          for (let i = 1; i <= options.divQtd; i++) {
            $(divLoad).append("<div></div>");
          }

          $(divToAppend).append(divLoad);
          $(this).append(divToAppend).hide().fadeIn("slow");
          break;

        case "unload":
          $("#loader").fadeOut(function () {
            $(this).remove();
          });
          break;

        default:
          console.error("Informe uma ação válida");
      }
    });
  };
})(jQuery);
