/* Form Handlings  */

function form_validations() {

    //Target_Inputs
    var unameDOM = document.getElementById('uname')
    var emailDOM = document.getElementById('email')
    var pwdDOM = document.getElementById('pwd')
    var messageDOM = document.getElementById('message1')
    var genderDOM = document.getElementById('gender1')
    var radioDOM1 = document.getElementById('rd1').checked
    var radioDOM2 = document.getElementById('rd2').checked
    var chkDOM = document.getElementById('myCheck').checked
    var fileDOM = document.getElementById('myFile')

    //Err_DOM
    var unameErr = document.getElementById('uname_err')
    var emailErr = document.getElementById('email_err')
    var pwdErr = document.getElementById('pwd_err')
    var messageErr = document.getElementById('msg_err')
    var genderErr = document.getElementById('gender_err')
    var radioErr = document.getElementById('rd_err')
    var chkErr = document.getElementById('chk_err')
    var fileErr = document.getElementById('file_err')

    var status = true


    //Icons
    var wrong = `<i class="fas fa-power-off"></i>`


    //*********************************************************************************************************************************************************** */
    //Name Conditions..
    if (uname.value == undefined || uname.value == "") {
        unameErr.innerHTML = `${wrong} Enter Your name`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status = false   //stop execution...
    }
    else if (!uname.value.match(/^[a-z]+$/)) {
        unameErr.innerHTML = `${wrong} Name must be Alphabets [a-z]...`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        status = false
    }
    else {
        unameErr.innerText = ""
        unameDOM.style.border = "1px solid #e5e5e5"
    }
    //***************************************************************************************** */

    //mail Conditions..
    if (email.value == undefined || email.value == "") {
        emailErr.innerHTML = `${wrong} Enter Your Email`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status = false
    }
    else if (!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
        emailErr.innerHTML = `${wrong} Enter Valid Email name@domain.ext`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        status = false
    }
    else {
        emailErr.innerText = ""
        emailDOM.style.border = "1px solid #e5e5e5"
    }

    //*********************************************************************************************************************************************************** */

    //pwd Conditions..
    if (pwd.value == undefined || pwd.value == "") {
        pwdErr.innerHTML = `${wrong} Enter Your Password`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status = false
    }
    else if (!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        pwdErr.innerHTML = `${wrong} Pwd must be 1-uppercase, Lowercase, Number, SpecialCharacter`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        status = false
    }
    else {
        pwdErr.innerText = ""
        pwdDOM.style.border = "1px solid #e5e5e5"
    }
    //*********************************************************************************************************************************************************** */

    //Select Conditions..
    if (gender1.value == "Select Any Option" || gender1.value == undefined) {
        genderErr.innerHTML = `${wrong} select option`
        genderErr.style.color = "red"
        status = false
    }
    else {
        genderErr.innerText = ""
        genderDOM.style.border = "1px solid #e5e5e5"
    }
    //*********************************************************************************************************************************************************** */

    //msg Conditions..
    if (messageDOM.value == "") {
        messageErr.innerHTML = `${wrong} Enter Message`
        messageErr.style.color = "red"
        messageDOM.style.border = "1px solid red"
        status = false
    }
    else {
        messageErr.innerText = ""
        messageDOM.style.border = "1px solid #e5e5e5"
    }
    //*********************************************************************************************************************************************************** */
    //radio Conditions..
    if (radioDOM1 == "" && radioDOM2 == "") {
        radioErr.innerHTML = `${wrong} Who are you?`
        radioErr.style.color = "red"

        status = false
    }
    else {
        radioErr.innerText = ""

    }
    //*********************************************************************************************************************************************************** */
    //check box Conditions..
    if (chkDOM == "" || chkDOM == undefined) {
        chkErr.innerHTML = `${wrong}"confirm declaration"`
        chkErr.style.color = "red"

        status = false
    }
    else {
        chkErr.innerText = ""

    }
    //*********************************************************************************************************************************************************** */
    //file upload Conditions..

    //if (!/(\.jpg)$/.exec(fileDOM.value))
    if (fileDOM.value == "") {
        fileErr.innerHTML = `${wrong} please upload file`
        fileErr.style.color = "red"
        status = false
    }
    else if (!fileDOM.value.match(/(\.jpg|\.png|\.jpeg|\.gif|\.mp4)/)) {
        fileErr.innerHTML = `${wrong} please upload jpg ,png ,jpeg ,gif ,mp4`
        fileErr.style.color = "red"
        status = false
    }
    else if (fileDOM.files[0].size < 1024 * 1024 * 2) {
        fileErr.innerHTML = ""

    }
    else {
        fileErr.innerText = "file size is big"
        fileErr.style.color = "red"
        status = false
    }
    return status
}


