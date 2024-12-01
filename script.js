document.getElementById("view-series").addEventListener("click", function() {
  displayAdvice(
    "รอการอัพเดทเพิ่มเติมนะจั้บ"

  );
});



document.getElementById("view-places").addEventListener("click", function() {
  displayAdvice(
     "รอการอัพเดทเพิ่มเติมนะจั้บ"
  );
});


document.getElementById("view-buffet").addEventListener("click", function() {
  displayAdvice(
     "รอการอัพเดทเพิ่มเติมนะจั้บ"
  );
});

// ฟังก์ชันสุ่มเมนูอาหาร
const foodMenu = [
  "ข้าวผัดกุ้ง", "ข้าวมันไก่", "ข้าวผัดหมู", "ข้าวหน้าเป็ด", "ข้าวกระเพราหมูสับ",
  "ข้าวไข่เจียว", "ข้าวต้มหมู", "ข้าวผัดคะน้าหมูกรอบ", "ข้าวหมูแดง", "ข้าวขาหมู",
  "ข้าวหน้าไก่เทอริยากิ", "ข้าวไก่ทอดกรอบ", "ข้าวต้มปลา", "ข้าวห่อใบบัว", "ข้าวมันส้มตำ",
  "ข้าวข้าวเหนียวหมูปิ้ง", "ข้าวผัดกะเพรา", "ข้าวผัดเผ็ด", "ข้าวหมูย่าง", "ข้าวแหนม"
];

function randomFood() {
  const randomIndex = Math.floor(Math.random() * foodMenu.length);
  return foodMenu[randomIndex];
}

// ฟังก์ชันสุ่มจากข้อความที่กรอก
document.getElementById("random-food-btn").addEventListener("click", function() {
  const food = randomFood();
  document.getElementById("random-food-result").innerHTML = "เมนูอาหารที่สุ่ม: " + food;
});

// ฟังก์ชันเลือกของจากข้อความที่กรอก
document.getElementById("choose-food-btn").addEventListener("click", function() {
  const option1 = document.getElementById("food-option-1").value;
  const option2 = document.getElementById("food-option-2").value;
  
  if (option1 && option2) {
    const options = [option1, option2];
    const chosenFood = options[Math.floor(Math.random() * options.length)];
    document.getElementById("chosen-food-result").innerHTML = "ผลลัพท์: " + chosenFood;
  } else {
    document.getElementById("chosen-food-result").innerHTML = "กรุณากรอกข้อความในทั้งสองช่อง!";
  }
});


document.getElementById("sendMessageButton").addEventListener("click", function() {
  const message = document.getElementById("oldExMessage").value.trim();

  if (message === "") {
    messageInput.value = "กรุณากรอกข้อความ"; // แสดงข้อความในช่องกรอก
    messageInput.style.color = "red"; // เปลี่ยนสีข้อความเป็นสีแดง (เพื่อเน้นความสำคัญ)
    return; // ไม่ให้ทำการส่งหากไม่มีข้อความ
  }

  // เคลียร์ข้อความในช่องกรอก
  document.getElementById("oldExMessage").value = "";

  // ข้อความกำลังใจสุ่ม
  const encouragementMessages = [
    "ขอให้คุณเข้มแข็งนะ ทุกอย่างจะดีขึ้น",
    "อย่าท้อแท้ คุณมีอนาคตที่สดใสรออยู่",
    "ทุกความเจ็บปวดจะผ่านไปได้ สู้ๆ นะ",
    "คุณสำคัญ อย่าลืมรักตัวเอง",
    "วันนี้คุณอาจจะรู้สึกไม่ดี แต่พรุ่งนี้จะดีกว่า",
    "อย่าลืมว่าคุณมีค่ามากกว่าความผิดหวัง",
    "ไม่ว่าตอนนี้จะยากแค่ไหน คุณจะสามารถผ่านมันไปได้"
  ];

  // สุ่มเลือกข้อความกำลังใจ
  const randomEncouragementMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];

  // แสดงข้อความสุ่มในป๊อบอัพ
  document.getElementById("popupMessage").querySelector("p").textContent = randomEncouragementMessage;

  // แสดงป๊อบอัพ
  document.getElementById("popupMessage").style.display = "flex";
});

// ปิดป๊อบอัพเมื่อคลิกปุ่มปิด
document.getElementById("closePopupButton").addEventListener("click", function() {
  document.getElementById("popupMessage").style.display = "none";
});



document.getElementById("load-horoscope").addEventListener("click", function() {
  loadHoroscope();
});

function loadHoroscope() {
  const loveHoroscopeMessages = [
   "วันนี้เป็นวันที่ดีในการเริ่มต้นอะไรใหม่ๆ ความรักที่รอคอยอยู่อาจจะยังไม่มาถึง แต่จงเชื่อมั่นในตัวเอง เพราะคุณกำลังสร้างเส้นทางของความรักที่ดีที่สุด",
  "คนโสดอย่าท้อ ความรักที่แท้จริงอาจจะมาถึงในช่วงเวลาที่ไม่คาดคิด ถ้าคุณเปิดใจและยอมรับสิ่งใหม่ๆ ชีวิตรักของคุณจะสวยงาม",
  "วันนี้คุณอาจจะพบกับความรักในรูปแบบที่ไม่คาดคิด อย่ารีบตัดสินใจทุกอย่าง ให้เวลากับตัวเองในการเรียนรู้และทำความเข้าใจคนใหม่ที่เข้ามาในชีวิต",
  "การรักตัวเองเป็นสิ่งสำคัญที่สุดในวันนี้ เมื่อคุณรักตัวเองอย่างเต็มที่ ความรักที่ดีจะเข้ามาหาคุณในที่สุด",
  "ในช่วงนี้คนโสดอาจจะยังไม่ได้เจอใครใหม่ แต่ไม่ต้องกังวลไป สิ่งที่ดีจะเกิดขึ้นเมื่อคุณพร้อมที่จะเปิดใจให้กับคนที่เหมาะสม",
  "ความรักในวันนี้จะมาจากการที่คุณได้พบเจอกับคนที่มีความสนใจในสิ่งเดียวกัน ลองเปิดใจและพูดคุยให้มากขึ้น ความสัมพันธ์ที่ดีอาจจะเริ่มต้นจากตรงนี้",
  "วันนี้อาจเป็นวันที่คุณรู้สึกเหงาบ้าง แต่ก็อย่าลืมว่า ความรักที่ดีที่สุดเริ่มต้นจากการรักตัวเองก่อน เมื่อคุณพร้อม คนใหม่จะเข้ามาในชีวิตคุณ",
  "สำหรับคนโสด การรักตัวเองเป็นกุญแจสำคัญ ความสัมพันธ์ที่ดีที่สุดจะเกิดขึ้นเมื่อคุณมีความสุขกับตัวเองและไม่พึ่งพาคนอื่นเพื่อเติมเต็มความสุขในใจ",
  "ความรักที่คุณรอคอยอาจจะมาถึงเร็วๆ นี้ คุณแค่ต้องเปิดใจและให้โอกาสตัวเองในการพบกับคนที่เหมาะสม",
  "วันนี้เป็นวันที่ดีในการทำความรู้จักกับคนใหม่ๆ ความรักจะเข้ามาหาคุณเมื่อถึงเวลาที่ถูกต้อง อย่าลืมว่าอดีตไม่สำคัญเท่ากับปัจจุบันและอนาคต",
  "วันนี้คุณอาจจะพบกับการเริ่มต้นใหม่ที่อาจเปลี่ยนแปลงชีวิตความรักของคุณ อย่ากลัวที่จะลองเปิดใจให้กับคนใหม่ๆ ที่คุณจะได้พบ",
  "คุณกำลังอยู่ในช่วงที่ต้องเรียนรู้เกี่ยวกับตัวเองก่อน ความรักจะมาหาคุณเมื่อคุณรักตัวเองมากพอแล้ว",
  "วันนี้อาจเป็นวันที่ดีในการเริ่มต้นความสัมพันธ์ใหม่ หรืออาจได้พบคนที่ทำให้คุณรู้สึกพิเศษ ลองเปิดใจและสนุกกับการใช้ชีวิต",
  "คนโสดกำลังจะได้พบกับคนที่เข้ากันได้ดี ความสัมพันธ์ในอนาคตอาจเริ่มต้นจากมิตรภาพ หรือการแบ่งปันความสนใจร่วมกัน",
  "วันนี้คุณจะพบคนที่มีลักษณะคล้ายคลึงกับคุณ แต่ก่อนที่ความรักจะเกิดขึ้น ต้องให้เวลาและการพูดคุยเพื่อเรียนรู้กันและกัน"
  ];
  

  const randomMessage = loveHoroscopeMessages[Math.floor(Math.random() * loveHoroscopeMessages.length)];
  
  document.getElementById("horoscope-result").innerHTML = `<p> ${randomMessage}</p>`;
}

function displayAdvice(message) {
  const adviceDetails = document.getElementById("advice-details");
  adviceDetails.innerHTML = `<p>${message}</p>`;
  adviceDetails.style.display = "block"; // แสดงผลข้อความ
}