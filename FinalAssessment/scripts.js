let count = 0;

document.addEventListener("DOMContentLoaded", () => {

const counterbtn = document.getElementById("counter-btn");
const container = document.querySelector("div");
const submitbtn = document.getElementById("submit-btn");
const error = document.getElementById("Error");

counterbtn.addEventListener("click", ()=>{
    const colors = ['aqua', 'yellow', 'blue', 'green', 'skyblue', 'brown', 'pink'];
    container.style.background = colors[count % colors.length];
    count++;
    counterbtn.innerText = `Counter +${count}`;
})

submitbtn.addEventListener("click", (event)=>{
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(Name === '' || email === '' ){
        error.innerText = "Enter the Details";
        alert("Enter the details");
        return;
    }
    if(!emailRegex.test(email)){
        alert("Enter Valid Email Address!");
        error.innerText = 'Enter the valid Email Address';
        return;
    }
    alert("form submitted successfully");
    error.innerText = '';
    
});
});