const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.password-confirm');
const oldPassword = document.querySelector('.old-password');
const userInfo = JSON.parse(localStorage.getItem('userLogin'));
const submitBtn = document.querySelector(".update-password-btn");
console.log(userInfo);

function passwordConfirmationCheck(password, passwordConfirm) {
  if (password !== passwordConfirm) {
    return false;
  }
  return true;
};

async function updatePassword(){
    try {
        if(passwordConfirmationCheck(password.value, passwordConfirm.value) && oldPassword.value === userInfo.password){
            alert(password.value)
        }else if (password.value.trim() === "" || passwordConfirm.value.trim() === "" || oldPassword.value.trim() === ""){
            alert("Please Fill Out All The Information!");
        }else{
            alert("Something Went Wrong!");
        }
    } catch (error) {
        console.log(error);
    }
};

(async ()=>{
    submitBtn.addEventListener("click",()=>{
        console.log('hello')
        updatePassword()
    })
})()