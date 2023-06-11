//soru 1

const user = {username: "tamay", password: "1234"}
const welcome = prompt("adınız:")
const welcome_ = prompt("parola:")
if (welcome !== user.username && welcome_ !== user.password){
  alert("Yanlış girdiniz.")
}else{
  alert("giriş yaptınız.")
}






//soru 1

const limit = 123
let yas = parseInt(prompt("Yaş giriniz:"))

if (yas === limit){
    alert("hoşgeldiniz")
}else{
    alert("yaşınız yanlış!")
}

//soru 2

const user = {
  name: prompt("Adınızı girin:"),
  age: parseInt(prompt("Yaşınızı girin:")),
  group: ""
}
if(user.age <5 || user.age >=150) alert("Yanlış ifade girdiniz")
else if(user.age <= 14) user.group = "çocuk"
else if(user.age <= 25) user.group = "genç"
else if(user.age <= 45) user.group = "yetişkin"
else if(user.age <= 60) user.group = "orta"
else  user.group = "yaşlı"

console.log(user.name,user.age,user.group)

//soru 3

const weather = parseInt(prompt("Havanın derecesi giriniz:"))

if(weather < -91 || weather > 60) alert("Geçersiz değer.")
else if(weather <= 0) alert("dondurucu")
else if( weather <= 5) alert("soğuk")
else if( weather <= 15) alert("serin")
else if( weather <= 25)alert("sıcak")
else if(weather <= 40) alert("çok sıcak")
else alert("tehlikeli sıcak")



//soru 4

const user_ = { ad: "tamay", hak: 2, yasakli: false}
const name = prompt("İsim giriniz:")

if((name === user_.ad && user_.hak>= 1 ) || (name === user_.ad && user_.yasakli === false)) alert("giriş sağlandı")
else alert("Giriş yapamadın.")
if(name !== user_.ad) alert("Ad yanlış")
if (user.hak < 1) alert("hakkın kalmadı")
if (user.yasakli) alert("erişim yasak")

//soru 5

const ay = prompt("Bir ay girin:").toLowerCase()

if (ay === "aralık" || ay=== "ocak" || ay === "şubat") alert("Girdiğiniz ay kış mevsimine aittir.")
else if (ay === "mart" || ay === "nisan" || ay === "mayıs") alert("Girdiğiniz ay ilkbahar mevsimine aittir.")
else if (ay === "haziran" || ay === "temmuz" || ay === "ağustos") alert("Girdiğiniz ay yaz mevsimine aittir.")
else if (ay === "eylül" || ay === "ekim" || ay === "kasım") alert("Girdiğiniz ay sonbahar mevsimine aittir.")
else alert("Geçersiz bir ay girdiniz.")


//soru 6

const urun = {
  ad: "Telefon",
  ucret: 10000,
  musteriTuru: "öğrenci"
}
const musteri = prompt("Müşteri türü nedir?").toLocaleLowerCase()
if (urun.musteriTuru === musteri){
  const sale = urun.ucret * 0.5
  alert("Öğrenci indirimi: " + sale )
}else{
  alert("indirimsiz: "+ urun.ucret)
}