const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    location.replace(
     "../mainApp/index.html"
    );
})