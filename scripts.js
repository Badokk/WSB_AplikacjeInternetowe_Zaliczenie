/* void */ function initializeDatabase() {}

/* void */ function tryToAddEntry() {
	var feedback = document.getElementById("Feedback");
	feedback.innerHTML += "</br> próba dodania wpisu";
}
/* void */ function addEntry(name, surname, studies) {}
/* bool */ function validateEntry(name, surname, studies) {}

/* string */ function toUpperCase(mixedCaseString) {}

/* void */ function showDatabase() {
	var feedback = document.getElementById("DbView");
	feedback.innerHTML += "</br> pokaż bazę";
}
/* void */ function hideDatabase() {
	var feedback = document.getElementById("DbView");
	feedback.innerHTML += "</br> ukryj bazę";
}

/* void */ function reportStudentsPerStudies() {
	document.getElementById("Report").innerHTML += "</br> raport wpis/kierunek";
}
/* void */ function reportStudentsPerDay() {
	document.getElementById("Report").innerHTML += "</br> raport wpis/dzień";
}
/* void */ function hideReports() {
	document.getElementById("Report").innerHTML += "</br> ukryj raport";
}