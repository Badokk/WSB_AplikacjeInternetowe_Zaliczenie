var database = [];

window.document.onload = initializeDatabase();
/* void */ function initializeDatabase() {
	database.push(["Krystyna", "Świderska", "Informatyka", "nigdy"]);
	database.push(["a", "a", 1, "cokolwiek"]);
	database.push(["a", "b", 1, "cokolwiek"]);
	database.push(["a", "aa", 1, "cokolwiek"]);

}

/* void */ function tryToAddEntry() {
	F_Name = document.forms[0].F_Name.value;
    F_Surname = document.forms[0].F_Surname.value;
    F_Studies = document.forms[0].F_Studies.value;
	if (validateEntry(F_Name, F_Surname)){
		var txt;
		if (confirm("Czy dodać ponownie do bazy danych?")) {
        addEntry(F_Name, F_Surname, F_Studies, initDate());
		//todo page refresh after confirm - we loose database
		} else {
			//do nothing
		}
	} else {
		addEntry(F_Name, F_Surname, F_Studies, initDate());
	}
	var feedback = document.getElementById("Feedback");
	feedback.innerHTML += "</br> próba dodania wpisu";
}
/* void */ function addEntry(name, surname, studies, date) {
	database.push([name, surname, studies, date]);
    alert("Dodano " + [name, surname, studies] + "do bazy danych dnia " + date +".");
}
/* bool */ function validateEntry(name, surname) {
	for (var i = 0; i < database.length; i++) {
		if(database[i][1] == surname) {
			if(database[i][0] == name) {
				return true;
			}
		}
	}
	return false;
}

/* string */ function toUpperCase(mixedCaseString) {}

/* void */ function initDate() {
	var date = new Date();
	var nDate = date.getDate();
    var nMnth = date.getMonth();
    var nYear = date.getFullYear();
	return nDate + "." + nMnth + "." + nYear;
}

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