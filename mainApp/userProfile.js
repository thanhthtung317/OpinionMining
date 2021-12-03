const username = document.querySelector(".username");
const address = document.querySelector(".address");
const email = document.querySelector(".email");
const dayOfBirth = document.querySelector(".day-of-birth");
const gender = document.getElementsByName("gender");
const goBackBtn = document.querySelector('.go-back-btn');
const userInfo = JSON.parse(localStorage.getItem('userLogin'));

console.log(userInfo);

username.value = userInfo.userName;
dayOfBirth.value = userInfo.dateOfBirth;
address.value = userInfo.address;
email.value = userInfo.email;
// console.log(gender)

goBackBtn.addEventListener("click",()=>{
    location.replace('./index.html')
});

(() => {
    if (userInfo.gender === "male") {
      gender[0].checked = "checked";
    } else if (userInfo.gender === "female") {
      gender[1].checked = "checked";
    } else {
      gender[2].checked = "checked";
    }
})()