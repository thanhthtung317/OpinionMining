const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordConfirm = document.querySelector(".password-confirm");
const dayOfBirth = document.querySelector(".day-of-birth");
const address = document.querySelector(".address");
const email = document.querySelector(".email");
const submitBtn = document.querySelector('input[type="submit"]');
const registerBtn = document.querySelector(".register-btn");

function getGender() {
  const gender = document.getElementsByName("gender");
  for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    } else {
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

async function userRegistration() {
  const userInfo = {
    userName: username.value,
    password: password.value,
    address: address.value,
    email: email.value,
    gender: getGender(),
    dateOfBirth: dayOfBirth.value,
  };

  if (passwordConfirmationCheck(userInfo.password, passwordConfirm.value)) {
    try {
      const users = await getUsers();
      const emailExisted = users.map((user) => user.email);
      if (emailCheck(email.value, emailExisted)) {
        const res = await axios.post(
          "http://localhost:5000/api/register",
          userInfo
        );
        alert("register successs");
        // const res = await axios.post("http://localhost:3000/Users", userInfo);
        // alert(res.data);
      } else {
        alert("Email already exists!");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Password comfirm does not match password!");
  }
}

registerBtn.addEventListener("click", () => {
  if (
    username.value !== "" &&
    password.value !== "" &&
    email.value !== "" &&
    getGender() !== ""
  ) {
    userRegistration();
  } else {
    alert("Please fill out all the information!");
  }
});

const login = document.querySelector(".login");
login.addEventListener("click", () => {
  location.replace("../LoginAndRegister/login.html");
});

function emailCheck(email, emailExisted) {
  for (let i = 0; i < emailExisted.length; i++) {
    if (email === emailExisted[i]) {
      return false;
    }
  }
  return true;
}

async function getUsers() {
  try {
    const response = await axios.get("http://localhost:5000/api/get_user");
    console.log(typeof response.data)
    return JSON.parse(response.data);
  } catch (error) {
    console.log(error);
  }
}
