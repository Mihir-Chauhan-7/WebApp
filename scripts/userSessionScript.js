{
    if (localStorage.getItem('adminEmail') != null) {
        if (localStorage.getItem('sessionData') != null) {
            sessionLog = JSON.parse(localStorage.getItem('sessionData'));
            displaySessionList();
            console.log(sessionLog);
        }
        else {
            console.log("No Session Data");
        }
    }
    else {
        alert("Please Login First");
        location.replace('Login.html');
    }

}

function displaySessionList() {
    document.getElementById("sessionList").innerHTML = "";
    sessionLog.forEach((row, index) => {

        document.getElementById("sessionList").innerHTML += "<tr><td>" + row.name + "</td><td>" + row.loginTime + "</td><td>" + row.logoutTime + "</td></tr>";
    });
}