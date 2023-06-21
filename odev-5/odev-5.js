
//1. soru

function Score(){
  let getScore =parseInt(prompt("Not giriniz:"))
  let message;
  switch(true){
    case  (getScore >= 0 && getScore <= 50):
      message = "ortalama ile geçtiniz.";
      break;
    case  (getScore > 50 && getScore <= 70):
    message = "iyi ile geçtiniz.";
      break;
    case  (getScore > 70 && getScore <= 80):
    message = "pekiyi ile geçtiniz";
      break;
    case  (getScore > 80 && getScore <= 100):
    message = "çokiyi";
      break;
    default:
    message = "Geçersiz not.";
    break;
  }
  alert(message);

}
Score();


//soru 2

let users = [
  { name: "Tamay", password: 1234 },
  { name: "Akın", password: 1243 }
];

function Change() {
  const name = prompt("Değiştirmek istediğiniz isim: (Tamay, Akın)");
  const newName = prompt("Yeni ismi giriniz:");

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      users[i].name = newName;
      alert("İsim başarıyla güncellendi.");
      alert("Yeni isim: " + newName);
      return; 
    }
  }

  alert("İsim bulunamadı.");
}

Change();

//soru 3

function ArrayFromSentence() {
  let sentence = prompt("Cümle giriniz:");
  let sentenceArray = [];
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word += sentence[i];
    } else if (word !== "") {
      sentenceArray.push(word);
      word = "";
    }
  }

  if (word !== "") {
    sentenceArray.push(word);
  }
  
  return sentenceArray;
}

let result = ArrayFromSentence();
alert(result);


// soru 4 

let array = [{isim : "Tamay", yetki : "user" , status : false },
{isim : "Akın", yetki : "admin" , status : false }]


function Control(){
  let name = prompt("İsim giriniz:");
  for(let i = 0 ; i < array.length ; i ++ ){
    
      if(name === array[i].isim && array[i].yetki !== "admin"){
        array[i].status = true;
        alert("Hoşgeldin");
       
      }else{
      alert("giriş yapılamadı.");
    }
    break;
  }
}
Control();

// soru 5

let users = [{name: "Tamay", password: 1234, dailySituation: 3 },
            {name: "Yaren", password: 2345, dailySituation: 3 }];

function Login() {
  let getName = prompt("Adınız:");
  for (let i = 0; i < users.length; i++) {
    if(users[i].name === getName){
      let getPass = prompt("Şifrenizi giriniz:");
      if(users[i].password === getPass){
        alert("Giriş yaptınız.");
        break;
      }else{
        if(users[i].password !== getPass){
          users[i].dailySituation -= 1 ;
          alert("Yanlış şifre, kalan hak:"+" "+ users[i].dailySituation);
          if(users[i].dailySituation === 0){
            alert("Hesap bloke oldu.");
            return Login();
          }else{
            Login();
          }
        }
      }
    }else{
      alert("Adınız yanlış.");
      return Login();
    }
  }
}
Login()

