        var x=document.getElementById("Login");
        var z=document.getElementById("Register");
        var y =document.getElementById("btn");
        function register (){
            x.style.left="-400px";
            z.style.left="50px";
            y.style.left="110px";
        }
        function login(){
            x.style.left="50px";
            z.style.left="450px";
            y.style.left="0px";
        }
        
        // Register formunda girilen bilgileri değişkenlerde sakla
        var registerUsername = document.forms['Register']['kullanici-adi1'].value;
        var registerPassword = document.forms['Register']['kullanici-sifre1'].value;
        var registerEmail = document.forms['Register']['kullanici-email1'].value;

        // Login formunda girilen bilgileri değişkenlerde sakla
        var loginUsername = document.forms['Login']['kullanici-adi'].value;
        var loginPassword = document.forms['Login']['kullanici-sifre'].value;

        // Giriş yapma butonuna tıklandığında çalışacak fonksiyon
        function girisDeneme(lgnUsername,lgnPassword,registerUsername,registerPassword) {
        // Kullanıcı adı ve şifreler eşleşiyor mu kontrol et
        if (lgnUsername == registerUsername && lgnPassword == registerPassword) {
            alert("Giriş başarılı");
        } 
        else {
            // Eşleşmiyorsa hata mesajı göster
            alert('Kullanıcı adı ve şifre eşleşmiyor. Lütfen tekrar deneyin.');
        }
        }

        document.getElementById("girisButonu").addEventListener("click", girisDeneme(loginUsername,loginPassword,registerUsername,registerPassword));
          

          