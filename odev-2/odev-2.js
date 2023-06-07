//soru 1

const limit = 123
let yas = parseInt(prompt("Yaş giriniz:"))

if (yas === limit){
    alert("hoşgeldiniz")
}else{
    alert("yaşınız yanlış!")
}

//soru 2

let sayi = parseInt(prompt("Bir sayı giriniz:"))
if (isNaN(sayi)) {
    alert("Sayı giriniz.")
}else{ 
  if(sayi > 0){
      alert("pozitif sayı")
  }
  else if(sayi < 0){
      alert("negatif sayı")
  }else{
      alert("sayı 0")
}}

//soru 3 
let sayi_1 = parseFloat(prompt("Sayı giriniz:"))
let sayi_2 = parseFloat(prompt("Sayı giriniz:"))
let islem = prompt("işlem giriniz:(toplama,çıkarma,çarpma,bölme yazabilirsiniz.)")
// let toplam = sayi_1 + sayi_2
// let cikarma = sayi_1 - sayi_2
// let carpma = sayi_1 * sayi_2
// let bolme = sayi_1 / sayi_2

if(islem === "toplama"){
    alert("toplama:"+ (sayi_1 + sayi_2))
}

else if(islem === "çıkarma"){
    alert("çıkarma:"+ (sayi_1 - sayi_2))
}
else if(islem === "çarpma"){
    alert("çarpma:" + (sayi_1 * sayi_2))
}

else if(islem === "bölme"){
    alert("bölme:" + (sayi_1 / sayi_2))
}
else{
    alert("geçersiz işlem")
}

//soru 4

let vize = parseFloat(prompt("vize notu giriniz:"))
let final_ = parseFloat(prompt("final notu giriniz:"))
let ortalama = (vize * 0.4)+ (final_ * 0.6)

if(ortalama <-1 || ortalama > 100 || isNaN(vize) || isNaN(final_) ){
  alert("Sayıları kontrol ediniz.")
}else{
  if(ortalama >= 60 ){
    alert(ortalama + " ile geçer not")
  }
  else{
    alert(ortalama + " ile kaldı")
  }
}

//soru 5 

const ad = prompt("Adınız:")
if (ad === null || ad.length < 3 ){
    alert("Adınızı üç karakterden uzun yazınız.")}
else{
    const soyad = prompt("Soyadınız:")
    if(soyad === null || soyad.length < 3){
      alert("Soyad giriniz.")
  }
    else{
      alert(ad +" "+ soyad)
    }
} 

//soru 6 

let cuzdan = 1
const alınacakOlan = {urunAdi: "çorap" , fiyati: 100, ekle: "ekle"}
const istek = prompt("Ne almak istersiniz: çorap")

if(istek === alınacakOlan.urunAdi){
    if(cuzdan >= 100){
        cuzdan -= 100
        alert("Çorap alındı kalan: "+ cuzdan)
        console.log("Çorap alındı kalan: "+ cuzdan)
    }
    else if(cuzdan < 100){
        alert("Çorap alacak paran yok.")
        prompt("Para eklemek içi ekle yaz")
          if(alınacakOlan.ekle === "ekle"){
          cuzdan += 100
          alert("100 eklendi kalan: "+ cuzdan)
          }
         if(cuzdan >= 100){
            const istek_1 = prompt("Ne almak istersiniz: çorap")
            if(istek_1 === alınacakOlan.urunAdi){
                if(cuzdan >= 100){
                    cuzdan -= 100
                    alert("Çorap alındı kalan: "+ cuzdan)
                    console.log("Çorap alındı kalan: "+ cuzdan)
                  }
                }
          }  
  }
}else{
      alert("ürün adı eşleşmiyor.")
}

//soru 7 

const user = {
    ad:"",
    soyad:"",
    yaş: 0
}

const info = prompt("Ad  giriniz:")
if(info !== ""){
    user.ad = info
    
  }else{
    user.ad = "Belirtilmedi"
   
}
const info_1 = prompt("Soyadı giriniz:")
if(info_1 !== ""){
  user.soyad = info_1
  
}else{
  user.soyad = "Belirtilmedi"
 
}
const info_2 = parseInt(prompt("Yaşınızı girin:"))
if (!isNaN(info_2)) {
  user.yaş = info_2
} else {
  user.yaş = "Belirtilmedi"
}


console.log(user)




