// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var allIds = document.getElementById("id");
// console.log(allIds);

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));



$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // $(".saveBtn").click(function() {
  // var getDataValue = $(this).data('value');
  // // var getIdValue = $(this).attr('id');
  // var textToSave = $(".description").val();

  // var something = document.getElementById(".description");
  // console.log("something:_ " + something + " texttosave:_ " + textToSave  + " getdatavalue:_ " + getDataValue);


  $(".saveBtn").click(function () {
    var textArea = $(".description").val();
    console.log("textarea:_" + textArea);

    // if (textArea.trim() !== "") {
    //   localStorage.setItem("textArea", textArea);
    //   alert("Textarea content saved to local storage!");

    // } else {
    //   alert("Textarea is empty. Please enter some text to save.")
    // }
  })

  // function to populate time slots with previous values. This needs to
  // be outside of the click event.
  $(".time-block").each(function () {
    var hourId = $(this).attr("id");
    var savedDescription = localStorage.getItem(hourId);
    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription);
    }

    // $(this).attr("class").removeClass('present past future').addClass("past");

  });


});

// function updateColorSchemeForHour(){}
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// Iterate through classes and update them with past/present/future coloes.
// $(".time-block").each(function () {
//   var id = $("#id");
//   console.log(id);
//   $(".time-block").removeClass('present past future').addClass("past");
// });
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
