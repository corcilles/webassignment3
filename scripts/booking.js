/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let daysOfTheWeekElm = document.querySelectorAll(".day-selector li")

let totalCostElm = document.querySelector("#calculated-cost")

let totalCost = 0

let numberOfdays = 0

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


for (const dayElm of daysOfTheWeekElm) {
    dayElm.addEventListener("click", function (element) {
        let dayElm = element.target

        if (!dayElm.classList.contains("btn-click")) {
            if (halfDaybutton.classList.contains("clicked")) {
                totalCost += 20;
            }
            else {
                totalCost += 35;
            }
            totalCostElm.textContent = totalCost;
            numberOfdays += 1
        }
        dayElm.classList.add("btn-click")
    })

}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearBtn = document.querySelector("#clear-button")

clearBtn.addEventListener("click", function () {
    let allDays = document.querySelectorAll(".btn-click")
    for (let day of allDays) {
        day.classList.remove("btn-click")
    }
    fulldayButton.classList.add("clicked")
    halfDaybutton.classList.remove("clicked")
    totalCost = 0
    numberOfdays = 0
    totalCostElm.textContent = totalCost
})


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfDaybutton = document.querySelector("#half")
let fulldayButton = document.querySelector("#full")

halfDaybutton.addEventListener("click", function (element) {
    let btnTarget = element.target
    if (fulldayButton.classList.contains("clicked")) {
        fulldayButton.classList.remove("clicked")
    }
    totalCost = 20 * numberOfdays
    totalCostElm.innerHTML = totalCost
    btnTarget.classList.add("clicked")
})


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fulldayButton.addEventListener("click", function (element) {
    let btnTarget = element.target
    if (halfDaybutton.classList.contains("clicked")) {
        halfDaybutton.classList.remove("clicked")
    }
    totalCost = 35 * numberOfdays
    totalCostElm.innerHTML = totalCost
    btnTarget.classList.add("clicked")
})



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


