//Claculate tip

function calculateTip() {
	var billAmt = 
document.getElementById("billamt").value;
	var serviceQual = 
document.getElementById("serviceQual").value;
	var numOfPeople = 
documnet.getElementById("peopleamt").value;

//validate input
if (billAmt === "" || serviceQual == 0) {
	alert("Please enter values");
	return;
}
//Check to see if this input is empty or less than or equal to 1
if (numOfPeople === "" || numOfPeople <= 1) {
	numOfPeople = 1;
	document.getElementById("each").style.display = "none";
} else {
	document.getElementById("each").style.display = "block";
}

//Claculate tip
var total = (billAmt * serviceQual) / numOfPeople;
// round to two decimal places
total = Math.round(total * 100) /100;
//next line allows us to always have two digits after decimal point
}
