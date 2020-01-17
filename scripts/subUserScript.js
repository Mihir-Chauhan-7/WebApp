let userArray;
let userId;
let sessionLog;
{
    if (sessionStorage.getItem('id') != null) {
        if (localStorage.getItem('userData') != null) {
            userId = sessionStorage.getItem('id');
            userArray = JSON.parse(localStorage.getItem('userData'));
            sessionLog = JSON.parse(localStorage.getItem('sessionData'));
            document.getElementById('userName').innerHTML = "Hello " + userArray[userId].name + "<input type='button' onclick='logOutUser()' value='Logout'>";

        }
        else {
            console.log("No User Found");
        }
    }
    else {
        alert("Please Login First");
    }
}
function logOutUser() {
    console.log("Logout");
    sessionLog = JSON.parse(localStorage.getItem('sessionData'));
    var dateObj = new Date();
    sessionLog[sessionLog.length-1]+="'logoutTime': "+dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
    localStorage.setItem('sessionData', JSON.stringify(sessionLog));
    sessionStorage.removeItem('id');
}