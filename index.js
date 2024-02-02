let fetureLi = document.querySelector("header>nav>div>ul>li:nth-child(3)");
let drpLi = document.querySelector("header>nav>div>ul>li:nth-child(3)>ul");

fetureLi.addEventListener("mouseover", ()=>{
    drpLi.style.display = "block";
    drpLi.style.marginRight  = "-140px";
});
fetureLi.addEventListener("mouseout", ()=>{  
    drpLi.style.display = "none";
    drpLi.style.marginRight  = "0";
});




let changealeImgDiv = document.querySelector("#changealeImgDiv>img")
let heddinTextP = document.querySelectorAll(".text>p")
let imageList = [
"https://trackingtime.co/wp-content/uploads/2023/03/website-illustrations-slide-home-time-blocking.png",
"https://trackingtime.co/wp-content/uploads/2023/03/website-illustrations-slide-home-project-management.png",
"https://trackingtime.co/wp-content/uploads/2023/03/website-illustrations-slide-home-timesheets.png",
"https://trackingtime.co/wp-content/uploads/2023/03/website-illustrations-slide-home-attendance.png",
"https://trackingtime.co/wp-content/uploads/2023/03/website-illustrations-slide-home-time-cards.png",
"https://trackingtime.co/wp-content/uploads/2023/03/website-illustrations-slide-home-time-reporting.png",
]
let i=0;
let j=0;
setInterval(function () {
    if(i==0){
        j=5;
    }else{
        j=i-1;
    }
    changealeImgDiv.src = imageList[i]
    heddinTextP[i].style.display = "block"

    heddinTextP[j].style.display = "none"
    i++;
    
    if(i==6){
        i=0;
    }
}, 2000);

let navUl = document.querySelector("nav>div:nth-child(2)")
let hidden = true;
function myFunction(x) {
    x.classList.toggle("change");
    if(hidden==true){
        navUl.style.display = "block";
        hidden = false
    }else{
        navUl.style.display = "none";
        hidden = true;
    }
  }