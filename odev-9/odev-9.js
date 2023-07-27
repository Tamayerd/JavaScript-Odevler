const sidebar =  document.getElementById("main")
const main = document.getElementById("mySidenav")
const genislik = 250
function openNav() {
    main.style.width = `${genislik}px`;
    sidebar.style.marginLeft = `${genislik}px`;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
 
  function closeNav() {
   main.style.width = "0";
    sidebar.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }