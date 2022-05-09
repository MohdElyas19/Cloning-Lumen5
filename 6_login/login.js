var userDetails = JSON.parse(localStorage.getItem("storedDetails"));
console.log(userDetails);

document.querySelector("form").addEventListener("submit",loginFunction);

function loginFunction(){
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    var flag = false;
    
    for(var i = 0; i<userDetails.length; i++){
        if((userDetails[i].enteredemail == email) && (userDetails[i].enteredpass == pass)){
            flag = true;
        }
    }
    if(flag == true){
        alert("Login SuccessFull");
        window.location.href = "../7_create_video/start_video.html"
    }
    else{
        alert("Login fail");
    }
}