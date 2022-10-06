function form_validation(){
    var mail = document.getElementById("email").value ;
    var mobile = document.getElementById("tel").value ;
    var password = document.getElementById("pass").value ;
    var error = document.getElementById("error");
    var text = "";

    if (mail.indexOf("@") == -1 || mail.length < 11){
        error.style.display = "block";
        text = "Please Enter Valid E-mail !!";
        error.innerHTML = text ;
        return false ;
    } else if (isNaN(mobile) || mobile.length != 11){
        error.style.display = "block";
        text = "Please Enter Valid Number !!";
        error.innerHTML = text ;
        return false ;
    } else if (password.length < 5) {
        error.style.display = "block";
        text = "Please Enter Valid Password !!";
        error.innerHTML = text ;
        return false ;
    } else {
        alert("Done")
        return true ;
    }
}

function open_signup(){
    document.getElementById("mynewacc").style.display = "block";
    document.getElementById("sec").style.opacity = '0.2';

}
function close_signup(){
    document.getElementById("mynewacc").style.display = "none";
    document.getElementById("sec").style.opacity = '1';
}