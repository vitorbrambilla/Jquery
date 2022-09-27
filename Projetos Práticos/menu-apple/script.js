$(function () {
  $(".icone").hover(
    function () {
      $(this).animate(
        {
          width: 100,
          height: 100,
          marginTop: -30,
        },
        200
      );
    },
    function () {
      $(this).animate(
        {
          width: 70,
          height: 70,
          marginTop: 0,
        },
        200
      );
    }
  );
});
