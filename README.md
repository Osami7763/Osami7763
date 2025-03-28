<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تهنئة العيد 🎉</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-color: #f8f9fa;
            color: #333;
            margin: 0;
            padding: 0;
        }

        .header {
            background-color: #ffcc00;
            padding: 20px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 30px;
        }

        .header a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
            margin-top: 10px;
            display: block;
        }

        .container {
            margin-top: 20px;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }

        .card {
            background-color: #ffcc00;
            padding: 20px;
            border-radius: 10px;
            width: 200px;
            height: 220px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .card:hover {
            background-color: #ff9900;
        }

        .message-box {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            max-width: 80%;
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            color: #333;
        }

        .message-box button {
            margin-top: 20px;
            padding: 10px 15px;
            border: none;
            background-color: #d9534f;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            font-size: 18px;
        }

        .message-box button:hover {
            background-color: #c9302c;
        }

        iframe {
            display: block;
            margin: 0 auto;
            margin-top: 20px;
            width: 100%;
            max-width: 600px;
            height: 350px;
        }

        .gift-link {
            background-color: #ffcc00;
            padding: 10px;
            margin-top: 20px;
            border-radius: 5px;
            font-size: 20px;
            text-decoration: none;
            color: white;
            display: block;
            width: fit-content;
            margin: auto;
        }

        .gift-link:hover {
            background-color: #ff9900;
        }
    </style>
</head>
<body>

    <!-- رأس الصفحة مع أغنية العيد -->
    <div class="header">
        <h1>🎊 عيدكم مبارك 🎉</h1>
        <a href="https://youtu.be/rZW9ap6bN7U?si=wBzRha6asd1675jl" target="_blank">استماع إلى أغنية العيد</a>
        <iframe src="https://www.youtube.com/embed/rZW9ap6bN7U?autoplay=1" frameborder="0" allow="autoplay"></iframe>
    </div>

    <div class="container">
        <p>اضغط على بطاقة أي فرد لرؤية رسالة العيد!</p>
        <div class="cards">
            <div class="card" onclick="showMessage('أبي')">أبي</div>
            <div class="card" onclick="showMessage('أمي')">أمي</div>
            <div class="card" onclick="showMessage('محمد')">محمد</div>
            <div class="card" onclick="showMessage('أمل')">أمل</div>
            <div class="card" onclick="showMessage('أحمد')">أحمد</div>
            <div class="card" onclick="showMessage('ملاك')">ملاك</div>
            <div class="card" onclick="showMessage('خالد')">خالد</div>
        </div>
    </div>

    <!-- رسالة التهنئة -->
    <div id="messageBox" class="message-box">
        <p id="messageText"></p>
        <div id="giftContainer"></div>
        <button onclick="closeMessage()">إغلاق</button>
    </div>

    <script>
        function showMessage(person) {
            let message = "";
            let giftLink = "";

            if (person === "محمد") {
                message = `🎉 عيدك مبارك يا محمد! 🎉<br> 
                كل عام وأنت بخير وسعادة، أتمنى لك حياة مليئة بالفرح والنجاح، 
                وأن تحقق جميع أحلامك. أنت شخص رائع ومميز، وأيامك دائماً تكون مليئة بالبهجة! 🌟`;
                giftLink = '<a href="https://youtube.com/shorts/hfjNuYkT1Kw?si=pVkkjxNk0_82r10R" class="gift-link" target="_blank">🎁 هديتك هنا! 🎁</a>';
            } else if (person === "أبي") {
                message = `عيدك مبارك يا أبي العزيز! 💙<br> 
                أتمنى لك دوام الصحة والعافية، أنت قدوتي وأفضل إنسان في حياتي، 
                بارك الله فيك ورزقك السعادة والرضا. عيدك سعيد وكل عام وأنت بخير!`;
            } else if (person === "أمي") {
                message = `أمي الحبيبة، عيدك سعيد يا أغلى إنسانة في حياتي! 💖<br> 
                أتمنى أن تكون أيامك مليئة بالفرح، وأن يديم الله عليكِ الصحة والعافية، 
                شكراً لكل شيء تقدمينه لنا، أنتِ النور الذي ينير حياتنا!`;
            } else if (person === "أمل") {
                message = `عيد سعيد يا أمل! 🌸<br> 
                أتمنى لك حياة مليئة بالنجاحات واللحظات الجميلة، 
                وأتمنى أن يكون عيدك مليئًا بالسعادة والفرح والسرور! 🎊`;
            } else if (person === "أحمد") {
                message = `كل عام وأنت بخير يا أحمد! 🎉<br> 
                عيدك مبارك، وأتمنى أن تحقق كل أهدافك وأحلامك، 
                وتعيش أيامًا جميلة مليئة بالسعادة!`;
            } else if (person === "ملاك") {
                message = `عيد سعيد يا ملاك! 😍<br> 
                أتمنى لك عيداً مليئًا بالحب والفرح، وأن يحقق الله لك كل أمنياتك!`;
            } else if (person === "خالد") {
                message = `عيدك مبارك يا خالد! 🎊<br> 
                أتمنى لك أيامًا جميلة مليئة بالضحك والفرح والسعادة!`;
            }

            document.getElementById("messageText").innerHTML = message;
            document.getElementById("giftContainer").innerHTML = giftLink;
            document.getElementById("messageBox").style.display = "block";
        }

        function closeMessage() {
            document.getElementById("messageBox").style.display = "none";
        }
    </script>

</body>
</html>
