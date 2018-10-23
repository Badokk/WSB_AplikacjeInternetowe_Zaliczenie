var database = [];

window.document.onload = initializeDatabase();
/* void */ function initializeDatabase() {
	database.push(["KRYSTYNA", "ŚWIDERSKA", "Informatyka", "21.9.2018"]);
	database.push(["PIOTR", "URLIK", "Informatyka", "22.9.2018"]);
	database.push(["BOLEK", "X", "Filologia", "22.9.2018"]);
	database.push(["LOLEK", "X", "Teologia", "23.9.2018"]);
}

/* void */ function tryToAddEntry() {
	var feedback = document.getElementById("Feedback");
	F_Name = document.getElementById("F_Name").value.toUpperCase();
    F_Surname = document.getElementById("F_Surname").value.toUpperCase();
    F_Studies = document.getElementById("F_Studies").value;
	if (validateEntry(F_Name, F_Surname)){
		if (confirm("Czy dodać ponownie do bazy danych?")){
			addEntry(F_Name, F_Surname, F_Studies, initDate());
			feedback.innerHTML = "Dodano " + [F_Name, F_Surname] + " do bazy danych.";
		} 
		else {
			feedback.innerHTML = "Nie udało się dodać " + [F_Name, F_Surname] + " do bazy danych.";
		}
	} else {
		addEntry(F_Name, F_Surname, F_Studies, initDate());
		feedback.innerHTML = "Dodano " + [F_Name, F_Surname] + " do bazy danych.";
	}
}
/* void */ function addEntry(name, surname, studies, date) {
	database.push([name, surname, studies, date]);
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

/* void */ function initDate() {
	var date = new Date();
	var nDate = date.getDate();
    var nMnth = date.getMonth();
    var nYear = date.getFullYear();
	return nDate + "." + nMnth + "." + nYear;
}

/* void */ function showDatabase() {
	var dbDiv = document.getElementById("DbView");
	var table = dbDiv.getElementsByTagName("table")[0];
	table.style.display = "block";
	
	var new_tbody = document.createElement("tbody");
	for (var i = 0; i < database.length; i++)
	{
		var row = "<tr><td>" + (i+1) + "</td><td>" + database[i][0] + "</td><td>" + database[i][1] + "</td><td>" + database[i][2] + "</td><td>" + database[i][3] + "</td></tr>";
		new_tbody.innerHTML += row;
	}
	var old_tbody = table.getElementsByTagName("tbody")[0];
	table.replaceChild(new_tbody, old_tbody)
}
/* void */ function hideDatabase() {
	var dbDiv = document.getElementById("DbView");
	var table = dbDiv.getElementsByTagName("table")[0];
	table.style.display = "none";
}

/* void */ function reportStudentsPerStudies() {
	var reportDiv = document.getElementById("Report");
	var table = reportDiv.getElementsByTagName("table")[0];
	table.innerHTML = "<tr><td>Kierunek</td><td>Liczba zarejestrowanych studentów</td></tr>";
	table.style.display = "block";

	var studies = new Map();
	for (var i = 0; i < database.length; i++)
	{
		if(typeof studies.get(database[i][2]) === 'undefined')
			studies.set(database[i][2], 1);
		else
			studies.set(database[i][2], studies.get(database[i][2])+1);
	}
	studies.forEach( (value, key) => {table.innerHTML = table.innerHTML + "<tr><td>"+key+"</td><td>"+value+"</td></tr>"});
}
/* void */ function reportStudentsPerDay() {
	var reportDiv = document.getElementById("Report");
	var table = reportDiv.getElementsByTagName("table")[0];
	table.innerHTML = "<tr><td>Data</td><td>Liczba zarejestrowanych studentów</td></tr>";
	table.style.display = "block";
	
	var dates = new Map();
	for (var i = 0; i < database.length; i++)
	{
		if(typeof dates.get(database[i][3]) === 'undefined')
			dates.set(database[i][3], 1);
		else
			dates.set(database[i][3], dates.get(database[i][3])+1);
	}
	dates.forEach( (value, key) => {table.innerHTML = table.innerHTML + "<tr><td>"+key+"</td><td>"+value+"</td></tr>"});
	
}
/* void */ function hideReports() {
	var reportDiv = document.getElementById("Report");
	var table = reportDiv.getElementsByTagName("table")[0];
	table.style.display = "none";
}