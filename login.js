var objPeople = [
    {
        email: "karan01@gmail.com",
        password: "12345karan"
    },
    {
        email: "arjun01@gmail.com",
        password: "12345arjun"
    },
    {
        email: "naina01@gmail.com",
        password: "12345naina"
    },
    {
        email: "ajay01@gmail.com",
        password: "12345ajay"
    },
    {
        email: "sunita01@gmail.com",
        password: "12345sunita"
    }
]
let form = document.getElementById("loginform")
form.addEventListener("submit", function(event){
    event.preventDefault()
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    for (let i = 0; i < objPeople.length; i++) {
        if (email == objPeople[i].email && password == objPeople[i].password) {
            window.location.href="landingpage.html";
            localStorage.setItem("loginemail", email)
            localStorage.setItem("loginpassword", password)
            return;
        }
        // alert("wrong email or password")
    }

})

