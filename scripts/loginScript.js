let adminObj;
let userArray;
let sessionLog=new Array();
{
    if(localStorage.getItem('adminObject')==null )
    {
        console.log("Not Registered");
        document.getElementById('btnRegister').hidden=false;
    }
    else
    {
        userArray=JSON.parse(localStorage.getItem('userData'));
        adminObj=JSON.parse(localStorage.getItem('adminObject'));
        if(localStorage.getItem('sessionData')==null)
        {
            sessionLog=[];
        }
        else
        {
            sessionLog=JSON.parse(localStorage.getItem('sessionData'));
        }
        
        console.log("Registered");
        
    }
}

var form=document.getElementById('loginForm');
form.addEventListener("submit",event => {
    
    var flag=0;
    console.log(adminObj);
    if(form.txtEmail.value==adminObj.email && form.txtPassword.value==adminObj.password)
    {
        sessionStorage.setItem('adminEmail',adminObj.email);
        return true;
    }
    else
    {
        form.action="SubUser.html";
        userArray.forEach((singleUser,index) => {
            if(singleUser.email==form.txtEmail.value && singleUser.password==form.txtPassword.value)
            {
                flag=1;
                sessionStorage.setItem('id',index);
                var dateObj=new Date();
                sessionLog.push({"name":singleUser.name ,"loginTime":dateObj.getHours()+":"+dateObj.getMinutes()+":"+dateObj.getSeconds()});
                localStorage.setItem('sessionData',JSON.stringify(sessionLog));
                console.log("sub USer "+index);
            }
            else
            {
                console.log("Incorrect Subuser");
            }
        });
    }
    if(flag==1)
    {
        return true;    
    }
    else
    {
        alert("Incorrect Email or Password");
    }
    
    event.preventDefault();
    localStorage.setItem('isAdminRegister',true);
    
});
