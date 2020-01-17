let userArray;
let userId;
let sessionLog;
{
    if (sessionStorage.getItem('id') != null) {
        if (localStorage.getItem('userData') != null) {
            userId = sessionStorage.getItem('id');
            userArray = JSON.parse(localStorage.getItem('userData'));
            sessionLog = JSON.parse(localStorage.getItem('sessionData'));
            document.getElementById('userName').innerHTML = "Hello " + userArray[userId].name;
            document.getElementById('links').innerHTML+="<input type='button' onclick='logOutUser()' value='Logout'>"
            showBirthDay();
        }
        else {
            console.log("No User Found");
        }
    }
    else {
        alert("Please Login First");
        location.replace('Login.html');
        
    }
}
function logOutUser() {
    console.log("Logout");
    sessionLog = JSON.parse(localStorage.getItem('sessionData'));
    console.log(sessionLog);
    var dateObj = new Date();
    var sessionObject=sessionLog[sessionLog.length-1];
    sessionObject.logoutTime=dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
    localStorage.setItem('sessionData', JSON.stringify(sessionLog));
    sessionStorage.removeItem('id');
    location.replace("Login.html");
}
function showBirthDay() {
    var index=sessionStorage.getItem('id');
    var currentDate = new Date();

    var date = currentDate.getMonth() + "-" + currentDate.getDate();
        console.log("Current " + date);
        
        var userDate = new Date(userArray[index].dob);
        var userBday = (userDate.getMonth()) + "-" + userDate.getDate();
        console.log("User " +userBday);
        if (userBday == date) {
            document.getElementById('bdayWish').innerHTML += "<br>Happy Birthday "+userArray[index].name+" !!!";
        }
}