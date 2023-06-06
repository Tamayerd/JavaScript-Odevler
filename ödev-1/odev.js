
//Birinci soru

let isim = "yaren"
let yas = 23
let aktif = True 

console.log("ad:",isim,"yaş:",yas,"aktif:",aktif)
console.log("ad:",typeof(isim),"yaş:",typeof(yas),"aktif:",typeof(aktif))

//İkinci soru

let sehirler = ["Antalya","İstanbul","Bursa","Eskişehir","İzmir"]
console.log("Şehir",sehirler[2])
sehirler.push("Burdur")
console.log(sehirler.length)

//üçüncü soru 

let sayi1 = 234
let sayi2 = 123

console.log("toplam:",sayi1+sayi2)
console.log("çıkarma:",sayi1-sayi2)
console.log("çarpma:",sayi1*sayi2)
console.log("bölme:",sayi1/sayi2)
console.log("mod:",sayi1%sayi2)

//dördüncü soru 

let sayi3 = 345
let sayi4 = 567

console.log("eşit mi:", sayi3 == sayi4)
console.log("eşit mi:", sayi3 !== sayi4)
console.log("büyük mü:", sayi3 > sayi4)
console.log("küçük mü:", sayi3 < sayi4)

//beşinci soru

let x = 890
let y = 789
let toplam = x + y
x = x + 2
y = y - 5
console.log(x + y)

let ad = prompt("Lütfen adınızı giriniz:")
const obje = { isim: ad}
console.log(obje)

