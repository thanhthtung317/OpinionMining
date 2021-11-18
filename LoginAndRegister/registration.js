const username = document.querySelector('.username');
const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.password-confirm');
const dayOfBirth = document.querySelector('.day-of-birth');
const address = document.querySelector('.address');
const email = document.querySelector('.email');
const submitBtn = document.querySelector('input[type="submit"]');

function getGender(){
    const gender = document.getElementsByName("gender");
    for (var i = 0, length = gender.length; i < length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }else{
            return "other";
        }
    }
}


function passwordConfirmationCheck(password, passwordConfirm) {
    if (password !== passwordConfirm) {
        return false;
    }
    return true;
}



async function userRegistration(){
    const userInfo = {
        userName: username.value,
        password: password.value,
        address: address.value,
        email: email.value,
        gender: getGender(),
        dateOfBirth: dayOfBirth.value,
    };
    if (passwordConfirmationCheck(userInfo.password, passwordConfirm.value)){
        try {
            await axios.post("http://localhost:3000/Users", userInfo);
        } catch (error) {
            console.log(error);
        } 
    }
    else{
        alert("Password comfirm does not match password!");
    }
}