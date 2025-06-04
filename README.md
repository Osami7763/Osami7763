<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تهنئة عيد سعيد للعائلة الكريمة</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            font-family: 'Tajawal', Arial, sans-serif;
            background-color: #1a1a1a;
            color: #fff;
            text-align: center;
            padding: 20px;
            margin: 0;
        }
        
        h1 {
            color: #f8d56b;
            margin-bottom: 30px;
            font-size: 2.5rem;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .card {
            width: 280px;
            background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
        }
        
        .card h2 {
            color: #f8d56b;
            margin: 15px 0;
            font-size: 1.8rem;
            transition: all 0.3s;
        }
        
        .card p {
            line-height: 1.8;
            font-size: 1.1rem;
            color: #d1d1d1;
            transition: all 0.3s;
        }
        
        .card-icon {
            font-size: 60px;
            margin: 10px 0;
            transition: all 0.3s;
        }
        
        .message {
            display: none;
            background: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 10px;
            margin-top: 15px;
            animation: fadeIn 0.5s;
            font-size: 1.1rem;
            line-height: 1.8;
        }
        
        .active-card h2 {
            font-size: 2.2rem !important;
            color: #ffd700 !important;
        }
        
        .active-card p {
            font-size: 1.5rem !important;
            color: #fff !important;
        }
        
        .active-card .card-icon {
            transform: scale(1.2);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* تعديلات خاصة بأمل */
        .amal .card-icon { 
            color: #ff9e43;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .unemployed-tag {
            background: #ff9e43;
            color: white;
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            display: inline-block;
            margin-right: 10px;
        }
        
        /* ألوان مميزة لباقي الأفراد */
        .mom .card-icon { color: #ff6b8b; }
        .father .card-icon { color: #5c7cfa; }
        .mohammed .card-icon { color: #4dabf7; }
        .ahmed .card-icon { color: #9775fa; }
        .malak .card-icon { color: #f783ac; }
    </style>
</head>
<body>
    <h1>كل عام وأنتم بخير يا عائلتي الغالية! 💖</h1>
    
    <div class="cards-container">
        <!-- بطاقة الأم -->
        <div class="card mom" onclick="toggleCard(this)">
            <div class="card-icon">👩‍👧</div>
            <h2>أمي الحبيبة</h2>
            <p>قلب البيت النابض</p>
            <div class="message">
                كل عام وأنتِ بألف خير يا أغلى أم، نورتي حياتنا بحبك وحنانك، أسأل الله أن يمد في عمرك ويحفظك لنا.
            </div>
        </div>
        
        <!-- بطاقة الأب -->
        <div class="card father" onclick="toggleCard(this)">
            <div class="card-icon">👨‍👧</div>
            <h2>أبي الغالي</h2>
            <p>سند العائلة وقوتها</p>
            <div class="message">
                كل عام وأنت بصحة وعافية يا قدوتنا، الله يحفظك ويمدك بالصحة والعمر المديد، شكراً على كل تضحياتك من أجلنا.
            </div>
        </div>
        
        <!-- بطاقة محمد المهندس -->
        <div class="card mohammed" onclick="toggleCard(this)">
            <div class="card-icon"><i class="fas fa-laptop-code"></i></div>
            <h2>محمد المهندس</h2>
            <p>مبروك التخرج!</p>
            <div class="message">
                مبروك يا مهندسنا العزيز، نفتخر بإنجازك ونسأل الله أن يوفقك في حياتك العملية، أنت مثال للتفوق والتميز.
            </div>
        </div>
        
        <!-- بطاقة أمل المعدلة -->
        <div class="card amal" onclick="toggleCard(this)">
            <div class="card-icon"><i class="fas fa-coffee"></i></div>
            <h2>أمل <span class="unemployed-tag">عاطلة</span></h2>
            <p>في إجازة استرخاء!</p>
            <div class="message">
                <p>🎯 خطط المستقبل:</p>
                <ul style="text-align: right; padding-right: 20px;">
                    <li>شهر عسل مع النت 🌐</li>
                    <li>دورات تطوير ذاتي 🎨</li>
                    <li>استكشاف فرص جديدة 🔍</li>
                </ul>
                <p>كل عام وأنتِ بخير يا أمل، الفرص الجاية أحلى إن شاء الله!</p>
            </div>
        </div>
        
        <!-- بطاقة أحمد -->
        <div class="card ahmed" onclick="toggleCard(this)">
            <div class="card-icon"><i class="fas fa-hospital-user"></i></div>
            <h2>أحمد</h2>
            <p>طالب الطب المتفوق</p>
            <div class="message">
                كل عام وأنت بخير يا دكتورنا، نرى فيك المستقبل المشرق للطب، استمر في تميزك واجتهادك.
            </div>
        </div>
        
        <!-- بطاقة ملاك -->
        <div class="card malak" onclick="toggleCard(this)">
            <div class="card-icon"><i class="fas fa-star"></i></div>
            <h2>ملاك</h2>
            <p>نجمة العائلة المضيئة</p>
            <div class="message">
                كل عام وأنتِ بخير يا ملاك، نورك يضيء بيتنا، نتمنى لك عاماً مليئاً بالنجاح والسعادة.
            </div>
        </div>
    </div>

    <script>
        function toggleCard(card) {
            // إخفاء جميع الرسائل الأخرى
            document.querySelectorAll('.card').forEach(c => {
                if(c !== card) {
                    c.querySelector('.message').style.display = 'none';
                    c.classList.remove('active-card');
                }
            });
            
            // تبديل الحالة للبطاقة المحددة
            const message = card.querySelector('.message');
            const isActive = card.classList.contains('active-card');
            
            if(isActive) {
                message.style.display = 'none';
                card.classList.remove('active-card');
            } else {
                message.style.display = 'block';
                card.classList.add('active-card');
            }
        }
    </script>
</body>
</html>
