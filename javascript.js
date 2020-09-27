var objPeople = [
    {
        username:"pandey.saksham0",
        password:"123456"
    },

    {
        username:"saksham.pandey0",
        password:"012345"
    },


    {
        username:"deepak",
        password:"12345"
    }
]

function getinfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(let i=0;i<objPeople.length;i++)
    {
        if(username===objPeople[i].username&&password===objPeople[i].password)
        {
            location="login.html"
        }
    }

    if(username===''||password==='')
    {
        alert("incorrect username and password")
    }
}
