(function ($) {
  $.fn.mudarCor = function (cor) {
    this.each(function () {
      $(this).css({
        color: cor,
        "text-decoration": "none",
      });

      $(this).hover(
        function () {
          $(this).css("background-color", "#ccc");
        },
        function () {
          $(this).css("background-color", "#fff");
        }
      );
    });

    return this;
  };
})(jQuery);
