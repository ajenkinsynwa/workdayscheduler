function updateTime() {
    let today = moment();


    $("#currentDay").text(today.format("dddd, MMM Do YYYY, h:mm.ss"));

    let now = moment().format("kk");
    for (let i = 0; i < scheduleELarray.length; i++) {
        scheduleELarray[i].removeClass("future past present");


        if (now > scheduleELarray[i].data("hour")) {
            scheduleELarray[i].addClass("past");

        } else if (now === scheduleELarray[i].attr("data-hour")) {
            scheduleELarray[i].addClass("present");

        } else {
            scheduleELarray[i].addClass("future");
        }
    }
}



let saveBttn = $(".save-icon");
let containerEl = $(".container");
let nineAm = $("#9AM");
let tenAm = $("#10AM");
let elevenAm = $("#11AM");
let twelveAm = $("#12PM");
let onePm = $("#1PM");
let twoPm = $("#2PM");
let threePm = $("#3PM");
let fourPm = $("#4PM");
let fivePm = $("#5PM");

let scheduleELarray = [
    nineAm,
    tenAm,
    elevenAm,
    twelveAm,
    onePm,
    twoPm,
    threePm,
    fourPm,
    fivePm,
];

lastRegistered();
updateTime();
setInterval(updateTime, 1000);

function lastRegistered() {
    for (let el of scheduleELarray) {
        el.val(localStorage.getItem("time block" + el.data("hour")));
    }
}

function handleFormSubmit(event) {
    event.preventDefault();


    let btnClicked = $(event.currentTarget);

    let targetText = btnClicked.siblings("textarea");

    let targetTimeBlock = targetText.data("hour");
    console.log(targetTimeBlock + " ");

    localStorage.setItem("time block" + targetTimeBlock, targetText.val())

    
}

saveBttn.on("click", handleFormSubmit);



