<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>HTML</title>
  
  <!-- HTML -->
  

  <!-- Custom Styles -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header >
    

<h1>اسامه المحمدي</h1>
<p>شاب طموح جدا🌠</p>
<nav>
  <a href="#About">من أنا؟</a>
  <a href="#projects">الهدف</a>
  <a href="#skills">مهاراتي</a>
 
</nav>
  </header>
  <section id="About">
        <h2>من أنا؟</h2>
  <p>أنا أاسامه المحمدي، إنسان واثق وطموح، أحب البرمجة، التصميم، والتعلم المستمر. أشتغل على مشاريعي الخاصة وأسعى أطور نفسي يومياً.</p>
    
  </section>
  <section id="projects">
    <h2>هدفي</h2>
    <h3>صنع مواقع تفيد العالم والدوله </h3>
  </section>
<section id="skills">
  <h2>مهاراتي</h2>
  <div class="skill">
    <h3>HTML / CSS</h3>
    <div class="bar"><div class="fill" style="width: 30%;"></div></div>

  <div class="skill">
    <h3>تصميم واجهات</h3>
    <div class="bar"><div class="fill" style="width: 85%;"></div></div>
  </div>
</section>
<section id="contact">

<!-- زر فتح النموذج -->
<button class="popup-btn" onclick="openModal()">📩 أرسل رسالة</button>

<!-- المودال -->
<div class="modal-overlay" id="modal">
  <div class="modal-content">
    <button class="close-btn" onclick="closeModal()">×</button>
    <h2>راسلنا الآن</h2>
    <form id="email-form">
      <input type="text" name="user_name" placeholder="اسمك الكامل" required />
      <input type="email" name="user_email" placeholder="بريدك الإلكتروني" required />
      <textarea name="message" placeholder="اكتب رسالتك..." required></textarea>
      <button type="submit">إرسال</button>
    </form>
  </div>
</div>

<!-- سكربت EmailJS -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function() {
    emailjs.init("MwUPvxv5_SEPrg45w");
  })();
  
  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  document.getElementById("email-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    emailjs.sendForm("service_f0r0kaz", "template_ubtdhgp", this)
      .then(() => {
        alert("✅ تم الإرسال بنجاح!");
        this.reset();
        closeModal();
      })
      .catch((error) => {
        alert("❌ حدث خطأ: " + JSON.stringify(error));
      });
  });
</script>
</section>


</head>
<body>



</body>
</html>
</section>

</body>
<style>
  
    * {
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Tajawal', sans-serif;
      background: linear-gradient(135deg, #0f0f2e, #1c1c3a);
      color: white;
      margin: 0;
      direction: rtl;
      text-align: center;
    }

    header {
      padding: 60px 2px 30px;
      background: #0f0f2e;
    }

    h1 {
      font-size: 48px;
      color: #00ffe7;
      animation: glow 2s infinite alternate;
    }

    nav {
      margin-top: 2px;
    }

    nav a {
      text-decoration: none;
      margin: 0 10px;
      color: #00ffe7;
      border: 1px solid #00ffe7;
      padding: 10px 15px;
      border-radius: 8px;
      transition: 0.3s;
    }

    nav a:hover {
      background-color: #00ffe7;
      color: #0f0f2e;
    }

    section {
      padding: 60px 20px;
      max-width: 800px;
      margin: auto;
      background-color: rgba(255, 255, 255, 0.03);
      margin-top: 40px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0,255,231,0.05);
    }

    h2 {
      color: #00ffe7;
      margin-bottom: 15px;
    }

    p {
      color: #4B6B68;
      font-size: 20px;
    }

    .project, .skill {
      background-color: #1c1c3a;
      padding: 15px;
      margin: 10px 0;
      border-radius: 12px;
    }

    .bar {
      background: #333;
      height: 20px;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 10px;
    }

    .fill {
      height: 100%;
      background: #11A598;
      animation: grow 2s ease forwards;
    }

    @keyframes grow {
      from { width: 0; }
      to { width: 50%; }
    }

    form input, form textarea {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border: none;
      border-radius: 8px;
      font-family: 'Tajawal', sans-serif;
    }

    form button {
      padding: 10px 25px;
      background-color: #00ffe7;
      border: none;
      color: #0f0f2e;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    }

    form button:hover {
      background-color: #0cf;
    }

    footer {
      margin-top: 40px;
      padding: 20px;
      color: #777;
      font-size: 14px;
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px #00ffe7; }
      to { text-shadow: 0 0 20px #00ffe7, 0 0 30px #0cf; }
    }
    h3{
       margin-bottom: 19px; 
    }
  .popup-btn {
  position: fixed;
  bottom: 25px;
  left: 25px;
  background-color: #00ffe7;
  color: #0f0f2e;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  transition: 0.3s;
  box-shadow: 0 0 20px #00ffe7;
}
.popup-btn:hover {
  background-color: #0cf;
  box-shadow: 0 0 30px #00ffe7;
}

.modal-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #1c1c3a;
  padding: 30px 25px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  color: white;
  box-shadow: 0 0 25px rgba(0,255,231,0.2);
  position: relative;
  text-align: right;
}

.modal-content h2 {
  color: #00ffe7;
  margin-bottom: 15px;
}

.modal-content input,
.modal-content textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0 15px;
  border: none;
  border-radius: 8px;
  background: #0f0f2e;
  color: white;
}

.modal-content button[type="submit"] {
  background-color: #00ffe7;
  color: #0f0f2e;
  border: none;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.modal-content button[type="submit"]:hover {
  background-color: #0cf;
}

.close-btn {
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 22px;
  background: transparent;
  color: #aaa;
  border: none;
  cursor: pointer;
}
.close-btn:hover {
  color: #00ffe7;
}
</style>
</html>
