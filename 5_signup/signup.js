document.querySelector("form").addEventListener("submit",signUpFunction);

function signUpFunction(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var detailArr = JSON.parse(localStorage.getItem("storedDetails")) || [];

    var detailsObj = {
        enteredname : name,
        enteredemail : email,
        enteredpass : password
    }
    console.log(detailsObj);
    detailArr.push(detailsObj);

    localStorage.setItem("storedDetails",JSON.stringify(detailArr));
    window.location.href = "../6_login/login.html"
}
