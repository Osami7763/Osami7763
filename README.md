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
</html>
