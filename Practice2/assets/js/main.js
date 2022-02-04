$(".toggles").click(function () {
    if ($(this).next().is(":visible")) {
      $(this).next().hide("slow");
    } else {
      $(".inner:visible").hide("slow");
      $(this).next().show("slow");
    }
  });