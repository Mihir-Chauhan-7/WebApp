let userArray;
let userId;
{
    if(sessionStorage.getItem('id')!=null)
    {
    if(localStorage.getItem('userData')!=null)
    {
        userId=sessionStorage.getItem('id');
        userArray=JSON.parse(localStorage.getItem('userData'));
        document.getElementById('userName').innerHTML="Hello "+userArray[userId].name+"<input type='button' onclick='logOutUser()' value='Logout'>";
        
    }
    else
    {
        console.log("No User Found");
    }
    }
    else
    {
        alert("Please Login First");
    }
}
function logOutUser()
{
    console.log("Logout");
    sessionStorage.removeItem('id');
}