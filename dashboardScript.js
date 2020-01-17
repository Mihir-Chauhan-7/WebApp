
console.log("DashBoard");
{
    if (sessionStorage.getItem('adminEmail') != null) {
        console.log("True");
        if (localStorage.getItem('adminObject') != null) {
            var adminObj = JSON.parse(localStorage.getItem('adminObject'));
            document.getElementById('userName').innerHTML = "Hello " + adminObj.name + "<input type='button' onclick='logOutUser()' value='Logout'>";
            if (localStorage.getItem('userData') != null) {
                userArray = JSON.parse(localStorage.getItem('userData'));
                displayCount();
                showBirthDay();
            }
            else {
                console.log("No Users");
            }
        }
        else {
            console.log("No Admin Found");
        }
    }
    else {
        alert("Please Login First");
    }
    
}
function logOutUser() {
    sessionStorage.removeItem('adminEmail');
}

function showBirthDay() {
    var currentDate = new Date(2018,11,01);

    var date = currentDate.getMonth() + "-" + currentDate.getDate();

    userArray.forEach(singleUser => {
        console.log("Current " + date);
        
        var userDate = new Date(singleUser.dob);
        var userBday = userDate.getMonth() + "-" + userDate.getDate();
        console.log("User " +userBday);
        if (userBday == date) {
            document.getElementById('bdayWish').innerHTML += "<br>Today is " + singleUser.name + "'s Birthday";
        }
    });
}




function displayCount() {
    var lessThan18 = 0;
    var between18To50 = 0;
    var greaterThan50 = 0;
    userArray.forEach(singleUser => {

        if (singleUser.age < 18) {
            lessThan18++;
        }
        else if (singleUser.age >= 18 && singleUser.age < 50) {
            between18To50++;
        }
        else if (singleUser.age >= 50) {
            greaterThan50++;
        }
    });
    document.getElementById("div1").innerHTML = lessThan18;
    document.getElementById("div2").innerHTML = between18To50;
    document.getElementById("div3").innerHTML = greaterThan50;
}