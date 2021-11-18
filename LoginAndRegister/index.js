let usernameDOM = document.querySelector("#username");
let passwordDOM = document.querySelector("#password");
const form = document.querySelector('form');
let username = '';
let password = '';

usernameDOM.oninput = (e) => {
  username = e.target.value;
};

passwordDOM.oninput = (e) => {
  password = e.target.value;
};

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

