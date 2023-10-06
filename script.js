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

  $(".saveBtn").click(function () {

    // Add a click event listener to all elements with the "saveBtn" class
    // Find the corresponding description element for the clicked save button
    // Also learned about parent/chile
    var textArea = $(this).siblings(".description").val();

    // Find the hour id for the corresponding time-block
    var hourId = $(this).closest(".time-block").attr("id");

    if (textArea.trim() !== "") {
      // Use the hour id as a key to save the textarea in local storage
      localStorage.setItem(hourId, textArea);
      alert("Textarea content saved to local storage!");
    } else {
      alert("Textarea is empty. Please enter some text to save.");
    }
  });

  // function to populate time slots with previous values. This needs to
  // be outside of the click event.
  $(".time-block").each(function () {
    var hourId = $(this).attr("id");
    var savedDescription = localStorage.getItem(hourId);
    if (savedDescription !== null) {
      $(this).find(".description").val(savedDescription);
    }

  });

  // The following code was supposed to be able to update each cell with the current color
  // Scheme as it iterated down the list. However, this proved have have a bug in it that 
  // I could not resolve. I am leaving the code and asking for help.
  var currentHour = "hour-" + dayjs().hour();
  // $(".time-block").each(function () {
  //   // Get the hour from the time-block's ID (e.g., "hour-9" => 9)

  //   var hourIdOfBlock = $(this).attr("id");
  //   var hourId = hourIdOfBlock.replace("hour-",'');

  //   // // Compare hourId (like hour-9) to currentHour and update classes accordingly
  //   if (hourId < currentHour) {
  //     $(this).removeClass("present future past").addClass("row time-block past]");
  //   } else if (hourId === currentHour) {
  //     $(this).removeClass("row time-block present future past").addClass("row time-block present");
  //   } else {
  //     $(this).removeClass("row time-block present future past").addClass("row time-block future");
  //   }
  // });


});
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
