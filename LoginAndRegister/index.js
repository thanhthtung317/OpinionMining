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
    (async () => {
      const users = await getUsers();
      console.log(users[0].email);
      console.log(users[0].password);

      for(let i = 0; i < users.length; i++){
        if (users[i].email === email && users[i].password === password){
          localStorage.setItem("userLogin", JSON.stringify(users[i]));
          location.replace(
            "../mainApp/index.html"
          );
        }else{
          alert("email or password wrong!")
        }
      }
    })()
})

async function getUsers() {
  try {
    const response = await axios.get("http://localhost:3000/Users");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
} 