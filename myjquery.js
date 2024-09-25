$(document).ready(function () {
  // $("H4#hello").html('Hello jQuery');
  // $(document หรือ "body").on("click", "#btnReload",function (event) {location.reload();}); หรือ
  // $(document).on("click", "#btnReload", myFunc); หรือ
  $("#btnReload").on("click", myFunc);
  function myFunc(event) {
    console.log(event.target);
    location.reload();
  }
  //   $(document หรือ "body").on("click", "#btnHi",function () {}); หรือ
  $("#btnHi").click(function (e) {
    console.log(e.target);
    // let btn = event.target;

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

  $("div").hover(function () {
    $(this).css({ 'background-color': 'yellow', 'font-weight': 'bolder' });
  }, function () {
    var cssObj = {
      'background-color': '#ddd',
      'font-weight': '',
      'color': 'rgb(0,40,244)',
      'border': '1px solid red',
      'border-radius': '50%',
      'text-align': 'center',
      'justify-content': 'center',
    }
      // < !--$(this).text(''); -->
        $(this).css(cssObj);
  });

});