function add() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userCity = document.getElementById("userCity").value;
    var myObject = { Name: userName, Email: userEmail, Password: userPassword, City: userCity };
    localStorage.setItem("data", JSON.stringify(myObject));
    // if (userName || userPassword || userEmail === "") {
    //     alert("You must fill out the required fields")
    // } else(alert("Successfuly Registered"))
}

// function cancel() {
//     document.getElementById("userName").value == "";
//     document.getElementById("userEmail").value == "";
//     document.getElementById("userPassword").value == "";
//     document.getElementById("userCity").value == "";
// }