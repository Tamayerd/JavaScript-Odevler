
const div = document.getElementById('main');
const cardCount = document.getElementById('count');
const mySidenav= document.getElementById('mySidenav');
const photoStyle = document.getElementsByClassName('photo-style');
const delCount = document.getElementById('delcount');

window.onload = async function(){
    const requset = await fetch("odev-9.json");
    data = await requset.json();

    UpDateHTML(data);

}

function UpDateHTML(data){
    data.forEach(function(urun){
        return div.innerHTML += `
        <div class="container">
        <div class="photo-style">
            <img class="img" src="${urun.source}" alt="">
            <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, fugiat.</p></div>
            <button onclick= addSepet("${urun.id}") >Sepete Ekle</button>
        </div>
        <div  class="photo-style">
            <img class="img" src="${urun.source}" alt="">
            <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, fugiat.</p></div>
            <button onclick= addSepet("${urun.id}")> Sepete Ekle</button>
        </div>
        </div>
        `
    })
}

function addSepet(urunID){
   
    const urun = data.find(function(urun){
        return urun.id === Number(urunID);
       
    });

    if(urun){
        userSepet.push(urun);
      
        updateCount();
        return UpdateDellCount();
    }
   
}
function updateCount(){
    cardCount.textContent = userSepet.length;
    mySidenav.innerHTML = '';
}

function delSepet(urunID) {
    const index = userSepet.find(function(urun) {
      return urun.id === Number(urunID);
    });
    if (index !== -1) {
      userSepet.splice(index, 1);
      UpdateDellCount();
      }
  }

 function UpdateDellCount(){
    delCount.textContent = userSepet.length;
    mySidenav.innerHTML = '';

    userSepet.forEach(function (urun) {
        mySidenav.innerHTML += `
        <div class="photo-style-nav">
            <p class="prod-name">${urun.name}</p>
            <img class="img-nav" src="${urun.source}">
            <button class = "nav-button" onclick=delSepet("${urun.id}")>Sepetten Çıkart</button>
        </div>
        `;
      });
    }



  
  
  
  
  
  






