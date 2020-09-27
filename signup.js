
function sign(){
    var Email = document.getElementById("Email").value
    var FullName = document.getElementById("FullName").value
    var Username = document.getElementById("Username").value
    var Password = document.getElementById("Password").value
    if(Email==='' &&FullName==='' &&Username==='' &&Password==='' )
    {
        alert("Information Not Provided");
    }
    else
    {
        alert("hello");
    }
}