var database = [];
/* void */ function initializeDatabase() {}

/* void */ function tryToAddEntry() {
	var feedback = document.getElementById("Feedback");
	feedback.innerHTML += "</br> próba dodania wpisu";
}
/* void */ function addEntry() {
    F_Name = document.forms[0].F_Name.value;
    F_Surname = document.forms[0].F_Surname.value;
    F_Studies = document.forms[0].F_Studies.value;
    alert("Hello " + F_Name + " " + F_Surname + " " + F_Studies + "!");
}
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