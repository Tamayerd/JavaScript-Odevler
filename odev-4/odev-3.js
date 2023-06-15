//soru 1

function getir(sayi){
  let sayilar = []
  for(let i = 1; i <= sayi; i++) {
    sayilar.push(i)
  }
  return sayilar
}

console.log(getir(50))


//soru 2
function calc(sayi1,sayi2) {

  if(isNaN(sayi1) || isNaN(sayi2)){
    alert("Sayi giriniz.")
    return
  }
 
  
  alert( sayi1 + sayi2 )

}
var sayi_1 = parseFloat(prompt("Sayı 1 :"))
var sayi_2 = parseFloat(prompt("Sayı 2 :"))
calc(sayi_1,sayi_2)

//soru 3

var sayilar = []
for(var i = 0; i <= 10; i++){
  var rastgele = Math.floor(Math.random() * 100)
  sayilar.push(rastgele)
}
alert(sayilar)

function BuyukSayi(sayilar){
  // var büyük =Math.max(...sayilar)
  // alert(büyük)
  var enBuyukSayi = sayilar[0]
  for (var i = 1; i < sayilar.length; i++) {
    if (sayilar[i] > enBuyukSayi) {
      enBuyukSayi = sayilar[i]
    }
  }
  
  return enBuyukSayi

}

var enbuyuk = BuyukSayi(sayilar)
console.log(enbuyuk)


//soru 4
const users = [
  {
    name: "Yaren",
    password: "1234",
    rol: "admin"
  },
  {
    name: "Tamay",
    password: "2345",
    rol: "Kullanıcı"
  }
]

function user_(name, password) {
  let name_ = prompt("adınızı giriniz:")
  let password_ = prompt("Şifre:")
  let login = null

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name_ && users[i].password === password_) {
      login = users[i]
      break
    }
  }

  if (login === null) {
    alert("Hatalı giriş!")
  } else if (login.rol === "admin") {
    alert("Merhaba admin.");
  } else if (login.rol === "Kullanıcı") {
    alert("Merhaba kullanıcı.")
  } else {
    alert("Hata oluştu")
  }
}
user_(users[1].name, users[1].password)




//soru 5

var rezervasyonListesi = ["Yaren", "Tamay", "Baran"]

function RezervasyonOlustur(){
  var musteri = prompt("Adınız:") 
  rezervasyonListesi[rezervasyonListesi.length] = musteri //.push
  alert("Oluşturuldu")
}
function RezervasyonKontrol(){
  
  var yeniMusteri = prompt("Adınızz:")
  var rezervasyonVar = false

    for (var i = 0; i < rezervasyonListesi.length; i++) {
    if (rezervasyonListesi[i] === yeniMusteri) {
      rezervasyonVar = true
      break;
    }
  }

    if (rezervasyonVar) {
      alert("Bu isim için rezervasyon yapılmıştır.")
    } else {
      alert("Rezervasyon bulunamadı.")
      RezervasyonOlustur()
  }
  
}
RezervasyonKontrol()


