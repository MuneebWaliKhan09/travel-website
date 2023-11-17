let mySidenav = document.getElementById("mySidenav");
let openNav = document.getElementById("openNav");

openNav.onclick = function(){

    if(mySidenav.style.width <= "0px"){
        mySidenav.style.width = "250px";
    }
    else{
        mySidenav.style.width = "0px";
    }
}

const closeNav = function(){
    mySidenav.style.width = "0px"
}