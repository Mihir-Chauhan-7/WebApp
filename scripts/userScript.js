let userArray = [];
{
    if (sessionStorage.getItem('adminEmail') != null) {
        if (localStorage.getItem('userData') != null) {
            userArray = JSON.parse(localStorage.getItem('userData'));
            displayUserList();
        }
        else {
            console.log("No Users");
        }
    }
    else {
        alert("Please Login First");
    }
}
class User {
    constructor(name, email, password, dob, dateObj) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.age = dateObj.getFullYear() - (new Date(this.dob).getFullYear());
    }
}

var form = document.getElementById('userForm');
form.addEventListener("submit", event => {

    console.log(form.txtName.value, form.txtEmail.value, form.txtPassword.value, form.txtDob.value);
    var userObj = new User(form.txtName.value, form.txtEmail.value, form.txtPassword.value, form.txtDob.value, new Date());
    userArray.push(userObj);
    console.log(userObj);
    displayUserList();
    updateData();
    event.preventDefault();
});
function updateData() {
    localStorage.setItem('userData', JSON.stringify(userArray));
    console.log("Updated");
}

function displayUserList() {
    document.getElementById("userData").innerHTML = "";
    userArray.forEach((user, index) => {

        document.getElementById("userData").innerHTML += "<tr><td>" + user.name + "<td>" + user.email + "</td>" + "<td>" + user.password + "</td>" + "<td>" + user.dob + "</td>" + "<td>" + user.age + "</td>" + "<td><a onclick='updateUser(" + index + ")'>Edit</a>" + "</td>" + "<td>" + "<a onclick='deleteUser(" + index + ")'>Delete</a>" + "</td>" + "</td></tr>";
    });
}

function updateUser(index) {
    //form = document.getElementById('userForm');
    console.log("UpdateUser " + index);
    console.log(form);
    var singleObj = userArray[index];
    console.log(singleObj);
    form.txtEmail.value = singleObj.email;
    form.txtName.value = singleObj.name;
    form.txtPassword.value = singleObj.password;
    form.txtDob.value = singleObj.dob;
    //form.innerHTML += "<input type='button' id='btnUpdate' onclick='saveUser(" + index + ")' value='Update'>";
    //form.btnAdd.hidden = true;
    console.log(singleObj);
}
function saveUser(index) {
    var singleObj = userArray[index];
    singleObj.email = form.txtEmail.value;
    singleObj.name = form.txtName.value;
    singleObj.password = form.txtPassword.value;
    singleObj.dob = form.txtDob.value;
    userArray[index] = singleObj;
    updateData();
}
function deleteUser(index) {
    
    userArray.splice(index, 1);
    displayUserList();
    updateData();
    console.log("DeleteUser" + index);
}