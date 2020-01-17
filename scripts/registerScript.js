class Admin{
    constructor(name,email,password,city,state)
    {
    this.name=name;
    this.email=email;
    this.password=password;
    this.city=city;
    this.state=state;
    }
}


var form=document.getElementById('regForm');
form.addEventListener("submit",event => {
    event.preventDefault();
    console.log(form);
    var adminObj=new Admin(form.txtname.value,form.txtemail.value,form.txtpassword.value,form.txtcity.value,form.txtstate.value);
    console.log(adminObj);
    localStorage.setItem('adminObject',JSON.stringify(adminObj));
});