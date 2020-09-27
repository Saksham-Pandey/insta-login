
function sign(){
    var a = document.getElementsById("email").value;
    var b = document.getElementsById("FullName").value;
    var c = document.getElementsById("Username").value;
    var d = document.getElementsById("password").value;
    if(a==''||b==''||c==''||d=='')
    {
        alert("Information Not Provided");
    }
}