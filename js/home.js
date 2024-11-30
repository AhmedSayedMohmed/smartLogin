var dataFromlocal = JSON.parse(localStorage.getItem("sing"));


if (dataFromlocal && Array.isArray(dataFromlocal) && dataFromlocal.length > 0) {
    var userFound = false;

    for (var i = 0; i < dataFromlocal.length; i++) {
        if (dataFromlocal[i].name) {
            document.getElementById("userName").innerHTML = "Welcome " + dataFromlocal[i].name;
            userFound = true; 
            break;
        }
    }

 
    if (!userFound) {
        document.getElementById("userName").innerHTML = "Welcome Guest";
    }
} else {
   
    document.getElementById("userName").innerHTML = "Welcome Guest";
}
