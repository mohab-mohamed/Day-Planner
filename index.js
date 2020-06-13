$(document).ready(function () {
  const now = new Date();

  const momentToday = moment(now);

  const today = momentToday.format("MMMM Do YYYY");
  const time = momentToday.format("h:mma");

  var nowTime = moment(time, "h:mma");
  console.log(nowTime);

  $today = $("#today");
  $today.text(today);

  $inputArea = $(".inputArea");

  $9 = $("#9");
  $9time = $("#9time");
  var nineTime = moment("9:00am", "h:mma");
  if (nineTime.isBefore(nowTime)) {
    $9time.css("background-color", "#EAEAEA");
  }
  if (nineTime.isAfter(nowTime)) {
    $9time.css("background-color", "#bcf5bc");
  }
  $9.val(localStorage.getItem("9"));

  $10 = $("#10");
  $10time = $("#10time");
  var tenTime = moment("10:00am", "h:mma");
  if (tenTime.isBefore(nowTime)) {
    $10time.css("background-color", "#EAEAEA");
  }
  if (tenTime.isAfter(nowTime)) {
    $10time.css("background-color", "#bcf5bc");
  }
  $10.val(localStorage.getItem("10"));

  $11 = $("#11");
  $11time = $("#11time");
  $10time = $("#10time");
  var elevenTime = moment("11:00am", "h:mma");
  if (elevenTime.isBefore(nowTime)) {
    $11time.css("background-color", "#EAEAEA");
  }
  if (elevenTime.isAfter(nowTime)) {
    $11time.css("background-color", "#bcf5bc");
  }
  $11.val(localStorage.getItem("11"));

  $12 = $("#12");
  $12time = $("#12time");
  var twelveTime = moment("12:00pm", "h:mma");
  if (twelveTime.isBefore(nowTime)) {
    $12time.css("background-color", "#EAEAEA");
  }
  if (twelveTime.isAfter(nowTime)) {
    $12time.css("background-color", "#bcf5bc");
  }
  $12.val(localStorage.getItem("12"));

  $1 = $("#1");
  $1time = $("#1time");
  var oneTime = moment("1:00pm", "h:mma");
  if (oneTime.isBefore(nowTime)) {
    $1time.css("background-color", "#EAEAEA");
  }
  if (oneTime.isAfter(nowTime)) {
    $1time.css("background-color", "#bcf5bc");
  }
  $1.val(localStorage.getItem("1"));

  $2 = $("#2");
  $2time = $("#2time");
  var twoTime = moment("2:00pm", "h:mma");
  if (twoTime.isBefore(nowTime)) {
    $2time.css("background-color", "#EAEAEA");
  }
  if (twoTime.isAfter(nowTime)) {
    $2time.css("background-color", "#bcf5bc");
  }
  $2.val(localStorage.getItem("2"));

  $3 = $("#3");
  $3time = $("#3time");
  var threeTime = moment("3:00pm", "h:mma");
  if (threeTime.isBefore(nowTime)) {
    $3time.css("background-color", "#EAEAEA");
  }
  if (threeTime.isAfter(nowTime)) {
    $3time.css("background-color", "#bcf5bc");
  }
  $3.val(localStorage.getItem("3"));

  $4 = $("#4");
  $4time = $("#4time");
  var fourTime = moment("4:00pm", "h:mma");
  if (fourTime.isBefore(nowTime)) {
    $4time.css("background-color", "#EAEAEA");
  }
  if (fourTime.isAfter(nowTime)) {
    $4time.css("background-color", "#bcf5bc");
  }
  $4.val(localStorage.getItem("4"));

  $5 = $("#5");
  $5time = $("#5time");
  var fiveTime = moment("5:00pm", "h:mma");
  if (fiveTime.isBefore(nowTime)) {
    $5time.css("background-color", "#EAEAEA");
  }
  if (fiveTime.isAfter(nowTime)) {
    $5time.css("background-color", "#bcf5bc");
  }
  $5.val(localStorage.getItem("5"));

  $saveButtons = $(".saveButton");

  $saveButtons.click(function () {
    let id = $(this).attr("id");
    let idNum = id.substring(0, id.length - 4);

    let inputEl = $("#" + idNum);
    console.log(inputEl.val());

    console.log(idNum);
    localStorage.setItem(idNum, inputEl.val());
  });

  //   $inputArea.on("input", function () {
  //     console.log($(this));
  //     let elementID = $(this).attr("id");

  //     localStorage.setItem(elementID, $(this).val());
  //     console.log(elementID);
  //   });
});
