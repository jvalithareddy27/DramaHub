
function loginUser()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "12345")
    {
        alert("Login Successful");
        window.location.href = "project.html";
    }
    else
    {
        alert("Invalid Email or Password");
    }
}
function signupUser()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword)
    {
        alert("Passwords do not match!");
        return;
    }

    // store data in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userName", name);

    alert("Signup Successful!");

    window.location.href = "login.html";
}
let stars = document.querySelectorAll(".star");
let rating = 0;

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

rating = index + 1;

stars.forEach(s=>s.classList.remove("active"));

for(let i=0;i<=index;i++){
stars[i].classList.add("active");
}

});

});

function submitReview(){

let text = document.getElementById("reviewText").value;

if(rating === 0 || text === ""){
alert("Please give rating and review");
return;
}

let reviewBox = document.getElementById("reviews");

let review = document.createElement("div");
review.classList.add("review");

review.innerHTML = "⭐".repeat(rating) + "<br>" + text;

reviewBox.prepend(review);

document.getElementById("reviewText").value = "";

}