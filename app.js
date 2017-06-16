function add() {
    var userName = document.getElementById("userName").value;
    var userNameFirstChar = userName.slice(0, 1);
    var userNameOtherChars = userName.slice(1);
    userNameFirstChar = userNameFirstChar.toUpperCase();
    userName = userNameFirstChar + userNameOtherChars;
    var userEmail = document.getElementById("userEmail").value;
    userEmail = userEmail.toLowerCase();
    var userPassword = document.getElementById("userPassword").value;
    var userCity = document.getElementById("userCity").value;
    var myObject = { Name: userName, Email: userEmail, Password: userPassword, City: userCity };
    localStorage.setItem("data", JSON.stringify(myObject));
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("userCity").value = "";
    alert("Successful Signup")
}

function verify() {
    var parseData = localStorage.getItem("data");
    JSON.parse(parseData);
    var userEnteredEmail = document.getElementById("userEnteredEmail").value;
    var userEnteredPassword = document.getElementById("userEnteredPassword").value;
    if (userEnteredEmail === JSON.parse(parseData).Email && userEnteredPassword === JSON.parse(parseData).Password) {
        alert("Hello! " + JSON.parse(parseData).Name)
        alert("Succesfully Login");
    } else(alert("Something Wrong! Please Enter the correct User name and password"))
}

function cancel() {
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
    document.getElementById("userCity").value = "";
}