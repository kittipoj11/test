$(document).ready(function(){
  // $("H4#hello").html('Hello jQuery');
  // $(document หรือ "body").on("click", "#btnReload",function () {
  $("body").on("click", "#btnReload", function () {
    location.reload();
  });

  //   $(document หรือ "body").on("click", "#btnHi",function () { หรือ
  $("#btnHi").click(function (event) {
    let btn = event.target;

    $("h4.hello").html("jQuery!!!");
    $("h4#hello").attr("hidden", true);
    // $("h4#hello").hide();
    $("a.hello").css({ "background-color": "yellow" });
    $("a.hello").attr("href", "https://www.youtube.com/");
    $("a.hello").text("youtube");

    // // ใช้แบบ javaScript
    // btn.setAttribute("disabled", true);
    // btn.textContent = "click completed";

    // ใช้แบบ jQuery
    $("button#btnHi").attr("disabled", true);
    $("button#btnHi").html("click completed");
  });
});