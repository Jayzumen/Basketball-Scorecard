let countHome = 0;
let countGuest = 0;
let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");


// HOME
function addOneHome() {
    countHome = countHome + 1;
    scoreHome.innerHTML = countHome;
}

function addTwoHome() {
   countHome = countHome + 2;
   scoreHome.innerHTML = countHome;
}

function addThreeHome() {
   countHome = countHome + 3;
   scoreHome.innerHTML = countHome;
}



// GUEST
function addOneGuest() {
    countGuest = countGuest + 1;
    scoreGuest.innerHTML = countGuest;
}

function addTwoGuest() {
   countGuest = countGuest + 2;
   scoreGuest.innerHTML = countGuest;
}

function addThreeGuest() {
   countGuest = countGuest + 3;
   scoreGuest.innerHTML = countGuest;
}