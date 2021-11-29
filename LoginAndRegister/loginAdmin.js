let usernameDOM = document.querySelector("#username");
let passwordDOM = document.querySelector("#password");
const form = document.querySelector('form');
let email = '';
let password = '';

usernameDOM.oninput = (e) => {
  email = e.target.value;
};

passwordDOM.oninput = (e) => {
  password = e.target.value;
};

form.addEventListener('submit', function(e){
    e.preventDefault();
        if ("admin@email.com" === email && "1234" === password) {
          location.replace("../mainApp/adminDashboard.html");
        }
})
