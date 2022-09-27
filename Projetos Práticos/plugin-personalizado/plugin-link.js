(function ($) {
  $.fn.showRealLink = function () {
    this.each(function () {
      let link = $(this).attr("href");
      $(this).append(" (" + link + ")");
    });

    return this;
  };
})(jQuery);
