var inputName = document.getElementById('name');
var inputUpEmail = document.getElementById('upEmail');
var inputSetPass = document.getElementById('upPass');
var content = document.querySelector(".content");
var array = [];


if (localStorage.getItem("sing") != null) {
    array = JSON.parse(localStorage.getItem("sing"));
}

function setUp() {

    for (var i = 0; i < array.length; i++) {
        if (array[i].upMail == inputUpEmail.value) {
            content.innerHTML = '<span>Email already exists</span>';
            content.classList.remove('text-success');
            content.classList.add('text-danger');
            return;

        }

    }

    if (validationForm(inputName) &&
        validationForm(inputUpEmail) &&
        validationForm(inputSetPass)) {

        var signUp = {
            name: inputName.value,
            upMail: inputUpEmail.value,
            upPass: inputSetPass.value,
        };

        array.push(signUp);
        localStorage.setItem("sing", JSON.stringify(array));
        console.log(array);
        clearForm();
        content.innerHTML = '<span>Registration successful!</span>';
        content.classList.remove('text-danger');
        content.classList.add('text-success');

    } else {
        content.innerHTML = '<span>All inputs are required</span>';
        content.classList.remove('text-success');
        content.classList.add('text-danger');
        return false;
    }
}

function clearForm() {
    inputName.value = '';
    inputUpEmail.value = '';
    inputSetPass.value = '';
}

function validationForm(ele) {

    var regex = {
        name: /^[a-zA-Z ]{5,}$/,
        upEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        upPass: /^(?=.*[0-9]).{5,}$/
    };


    if (ele.value.trim() === "") {
        return false;
    }


    if (regex[ele.id].test(ele.value)) {
        return true;
    } else {
        return false;
    }
}