var inptInEmail = document.getElementById("inEmail");
var inptInPassword = document.getElementById("inPass");
var content = document.getElementById("content");

function isEmpty() {
    content.innerHTML = "";
    if (inptInEmail.value.trim() === "" || inptInPassword.value.trim() === "") {
        content.innerHTML = "<span class='text-danger'>All inputs are required</span>";
        return false;
    }
    return true;
}


function checkEmailPass() {
    var dataFromlocal = JSON.parse(localStorage.getItem("sing"));
    for (var i = 0; i < dataFromlocal.length; i++) {
        if (
            inptInEmail.value == dataFromlocal[i].upMail &&
            inptInPassword.value == dataFromlocal[i].upPass
        ) {
            return true
        }
    }
    return false
}

function setLogin() {
    if (isEmpty()) {
        if (checkEmailPass()) {
            content.innerHTML = "<span class='text-success'>Login Success</span>";
            window.location.href = "home.html"
            localStorage.removeItem("upMail");
            localStorage.removeItem("upPass");


        } else {
            content.innerHTML = "<span class='text-danger'>Invalid email or password</span>";
        }
    }
    clearForm();
}
function clearForm() {
    inptInEmail.value = "";
    inptInPassword.value = "";

}