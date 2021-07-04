/* Form Handlings  */

var form_validations = () => {
    var name = document.querySelector('#name').value
    var mail = document.querySelector('#mail').value
    var pwd = document.querySelector('#pwd').value
    var cpwd = document.querySelector('#cpwd').value


    if (name == undefined || name == "") {
        document.getElementById('name_err').innerText = "*Enter name"
        return false
    }
    else {
        document.getElementById('name_err').innerText = ""

    }

    if (mail == undefined || mail == "") {
        document.getElementById('mail_err').innerText = "*Enter Email"
        return false
    }
    else if (pwd == undefined || pwd == "") {
        document.getElementById('pwd_err').innerText = "*Enter Password"
        return false
    }
    else if (cpwd == undefined || cpwd == "") {
        document.getElementById('cpwd_err').innerText = "*Enter Confirm Password"
        return false
    }
    else if (pwd == cpwd) {
        window.alert("Both are Matched")
    }
    else {
        document.getElementById('cpwd_err').innerText = "*Both details are Not Matched"
        return false
    }
}