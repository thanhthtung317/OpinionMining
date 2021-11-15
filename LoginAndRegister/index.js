import axios from "axios";
let username = document.querySelector("#username");
let password = document.querySelector("#password");
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    location.replace(
     "../mainApp/index.html"
    );
})

async function basiclogin(username, password) {
  const response = await axios.post(loginEndpoint, {
    auth: {
      username: username,
      password: password,
    }
  });
  const { token } = response.body;
  localStorage.setItem("token", token);
}

function getUsername(){
    email.oninput = (e)=>{
        let username = e.target.value;
    }
    return username;
}

async function isLoggedIn() {
  const token = store.get("token");
  if (!token) return false;
}