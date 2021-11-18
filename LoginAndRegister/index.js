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
    (async () => {
      const users = await getUsers();
      console.log(users[0].userName);
      console.log(users[0].password);

      for(let i = 0; i < users.length; i++){
        if (users[i].userName === username && users[i].password === password){
          location.replace(
            "../mainApp/index.html"
          );
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