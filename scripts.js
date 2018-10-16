var database = [];

window.document.onload = initializeDatabase();
/* void */ function initializeDatabase() {
	database.push(["Krystyna", "Świderska", "Informatyka"]);
	database.push(["a", "a", 1]);
}

/* void */ function tryToAddEntry() {
	F_Name = document.forms[0].F_Name.value;
    F_Surname = document.forms[0].F_Surname.value;
    F_Studies = document.forms[0].F_Studies.value;
	if (validateEntry(F_Name, F_Surname, F_Studies)){
		addEntry(F_Name, F_Surname, F_Studies);
	} else {
		var txt;
		if (confirm("Czy dodać ponownie do bazy danych?")) {
        addEntry(F_Name, F_Surname, F_Studies);
		//todo page refresh after confirm - we loose database
		} else {
			//do nothing
		}
	}
	var feedback = document.getElementById("Feedback");
	feedback.innerHTML += "</br> próba dodania wpisu";
}
/* void */ function addEntry(name, surname, studies) {
	database.push([name, surname, studies]);
    //alert("Dodano " + [name, surname, studies] + "do bazy danych.");
}
/* bool */ function validateEntry(name, surname, studies) {
	return false; //Todo find how to use database.includes[[name, surname, studies]]
}

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