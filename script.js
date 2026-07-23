// ---- Wallpaper Collection (Unsplash) ----
const wallpapers = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=80",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80",
];

// ---- Quotes Collection ----
const quotes = [
  { text: "सपने वो नहीं जो हम सोते हुए देखते हैं, सपने वो हैं जो हमें सोने नहीं देते।", author: "डॉ. एपीजे अब्दुल कलाम" },
  { text: "मंज़िल उन्हीं को मिलती है जिनके सपनों में जान होती है, पंखों से कुछ नहीं होता, हौसलों से उड़ान होती है।", author: "अज्ञात" },
  { text: "संघर्ष जितना कठिन होगा, जीत उतनी ही शानदार होगी।", author: "अज्ञात" },
  { text: "जीतकर दिखाओ उनको जो तुम्हारी हार का इंतजार कर रहे हैं।", author: "अज्ञात" },
  { text: "जीतने वाले अलग काम नहीं करते, वे काम को अलग तरीके से करते हैं।", author: "अज्ञात" },
  { text: "थोड़ा डूबूँगा मगर मैं फिर तैर आऊँगा, ऐ ज़िंदगी तू देख मैं फिर जीत जाऊँगा।", author: "अज्ञात" },
  { text: "जो मज़ा अपने दम पर सफल बनने में है, वो करोड़ों की ख़ानदानी दौलत में भी नहीं।", author: "अज्ञात" },
  { text: "सफलता एक दिन में नहीं मिलती, लेकिन ठान लो तो एक दिन जरूर मिलती है।", author: "अज्ञात" },
  { text: "लग चुकी है तलब जीत की, अब खुद को आग में झोंक देंगे, ठोकरें कहती हैं मारा जाएगा, हौसले कहते हैं देख लेंगे।", author: "अज्ञात" },
  { text: "अपनी ज़िंदगी के 5 साल अपने सपनों को दे दो, आपकी कामयाबी आने वाले 50 सालों तक आपका नाम लेती रहेगी।", author: "अज्ञात" },
  { text: "मैं सही निर्णय लेने में विश्वास नहीं करता, मैं निर्णय लेता हूँ और फिर उन्हें सही साबित कर देता हूँ।", author: "रतन टाटा" },
  { text: "नज़र को बदलो तो नज़रिए बदल जाते हैं, सोच को बदलो तो सितारे बदल जाते हैं।", author: "अज्ञात" },
  { text: "अगर आप सोचते हैं कि आप कर सकते हैं, तो आप कर सकते हैं!", author: "अज्ञात" },
  { text: "जब तक आप खुद पर विश्वास नहीं करते, तब तक भगवान भी आपकी मदद नहीं कर सकता।", author: "स्वामी विवेकानंद" },
  { text: "दूसरों से अपनी तुलना मत करो, सूर्य और चंद्रमा अपने-अपने समय पर चमकते हैं।", author: "अज्ञात" },
  { text: "आपकी कीमत लोगों की राय से नहीं, आपके मूल्यों और कर्मों से तय होती है।", author: "अज्ञात" },
  { text: "खुद पर भरोसा रखो, क्योंकि यही सफलता की पहली सीढ़ी है।", author: "अज्ञात" },
  { text: "अंधेरा जितना गहरा होगा, सुबह उतनी ही नजदीक होगी।", author: "अज्ञात" },
  { text: "शांत मन सबसे बड़ी शक्ति है, जिसे खुद पर नियंत्रण है उसे दुनिया नियंत्रित नहीं कर सकती।", author: "अज्ञात" },
  { text: "आपकी सोच ही आपकी सीमा तय करती है, बड़ा सोचो और बड़ा पाओ।", author: "अज्ञात" },
  { text: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य की प्राप्ति न हो जाए।", author: "स्वामी विवेकानंद" },
  { text: "कठिनाइयाँ जीवन में रोकने नहीं, बल्कि आपकी छिपी हुई ताकत को जगाने आती हैं।", author: "अज्ञात" },
  { text: "हार मत मानो, अक्सर चाबी की आखिरी गुच्छी ही ताला खोल देती है।", author: "अज्ञात" },
  { text: "अगर आप असफल होते हैं तो निराश मत होइए, असफल होना यह दर्शाता है कि आपने प्रयास किया।", author: "अज्ञात" },
  { text: "समय और धैर्य वो दो शक्तिशाली योद्धा हैं जो हर जंग जिता देते हैं।", author: "अज्ञात" },
  { text: "जिसने संघर्ष को अपना साथी बना लिया, उसने ही इस दुनिया में खुद को काबिल बना लिया।", author: "अज्ञात" },
  { text: "असफलता सिर्फ यह साबित करती है कि सफलता का प्रयास पूरे मन से नहीं हुआ।", author: "अज्ञात" },
  { text: "गिरना भी अच्छा है, औकात का पता चलता है, बढ़ते हैं जब हाथ उठाने को तो अपनों का पता चलता है।", author: "अज्ञात" },
  { text: "बहाने आपको सिर्फ सांत्वना दे सकते हैं, सफलता नहीं।", author: "अज्ञात" },
  { text: "तू चलना शुरू तो कर, रास्ते अपने आप बनते चले जाएंगे।", author: "अज्ञात" },
  { text: "इतना काम करो कि काम भी आपका काम देखकर थक जाए।", author: "अज्ञात" },
  { text: "सफलता की सबसे खास बात यह है कि वो मेहनत करने वालों पर फिदा हो जाती है।", author: "अज्ञात" },
  { text: "सपने तभी पूरे होते हैं जब बहाने खत्म होते हैं।", author: "अज्ञात" },
  { text: "हर बड़ी सफलता छोटे-छोटे अनुशासनों का परिणाम होती है।", author: "अज्ञात" },
  { text: "किस्मत की लकीरें भी तभी बदलती हैं जब हाथों में मेहनत का पसीना होता है।", author: "अज्ञात" },
  { text: "सिर्फ खड़े होकर पानी देखने से आप नदी पार नहीं कर सकते।", author: "रवींद्रनाथ टैगोर" },
  { text: "आज का संघर्ष ही कल की सामर्थ्य बनता है।", author: "अज्ञात" },
  { text: "अवसर की प्रतीक्षा में मत बैठो, आज का अवसर ही सर्वोत्तम है।", author: "अज्ञात" },
  { text: "धीमी गति से आगे बढ़ना रुकने से कहीं बेहतर है।", author: "अज्ञात" },
  { text: "जितना कठिन आपका अभ्यास होगा, उतना ही आसान आपका मैदान होगा।", author: "अज्ञात" },
  { text: "यदि आप उड़ नहीं सकते तो भागो, भाग नहीं सकते तो चलो, पर लगातार आगे बढ़ते रहो।", author: "मार्टिन लूथर किंग जूनियर" },
  { text: "भविष्य उनका है जो सीखना कभी नहीं छोड़ते।", author: "अज्ञात" },
  { text: "अपनी गलतियों से सीखो, दूसरों की गलतियों से भी सीखो क्योंकि खुद पर प्रयोग करने के लिए जिंदगी छोटी है।", author: "अज्ञात" },
  { text: "अगर आप सूर्य की तरह चमकना चाहते हैं, तो पहले सूर्य की तरह जलना सीखो।", author: "डॉ. एपीजे अब्दुल कलाम" },
  { text: "जिंदगी एक खेल है, अगर इसे खिलाड़ी की तरह खेलोगे तो जीतोगे, दर्शक बनोगे तो ताली बजाओगे।", author: "अज्ञात" },
  { text: "ज्ञान में किया गया निवेश सबसे बेहतर ब्याज देता है।", author: "बेंजामिन फ्रेंक्लिन" },
  { text: "महान कार्य करने का एक ही तरीका है, आप जो करते हैं उससे प्यार करें।", author: "स्टीव जॉब्स" },
  { text: "जब इरादा पक्का हो तो रास्ते अपने आप निकल आते हैं।", author: "अज्ञात" },
  { text: "आए हो निभाने को जब किरदार ज़मीन पर, कुछ ऐसा कर चलो कि जमाना मिसाल दे।", author: "अज्ञात" },
  { text: "वक्त से लड़कर जो नसीब बदल दे, इंसान वही जो अपनी तकदीर बदल दे!", author: "अज्ञात" }
];

// ---- DOM Elements ----
const bg = document.getElementById("bg");
const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const greetingEl = document.getElementById("greeting");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const focusInput = document.getElementById("focusInput");
const focusBtn = document.getElementById("focusBtn");
const focusDisplay = document.getElementById("focusDisplay");

// ---- Get random item from array ----
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---- Set Wallpaper ----
function setWallpaper() {
  const img = getRandom(wallpapers);
  bg.style.backgroundImage = `url(${img})`;
}

// ---- Set Quote ----
function setQuote() {
  const q = getRandom(quotes);
  quoteEl.textContent = `“${q.text}”`;
  authorEl.textContent = `— ${q.author}`;
}

// ---- Update Time & Greeting ----
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  // Greeting based on time
  const h = now.getHours();
  let greeting = "Good Night";
  if (h >= 5 && h < 12) greeting = "Good Morning 🌅";
  else if (h >= 12 && h < 17) greeting = "Good Afternoon ☀️";
  else if (h >= 17 && h < 21) greeting = "Good Evening 🌇";
  greetingEl.textContent = greeting;

  // Date
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateEl.textContent = now.toLocaleDateString("en-US", options);
}

// ---- Focus Feature (saved in localStorage) ----
function loadFocus() {
  const saved = localStorage.getItem("momentumFocus");
  if (saved) {
    focusDisplay.textContent = `🎯 ${saved}`;
    focusInput.style.display = "none";
    focusBtn.style.display = "none";
  }
}

function setFocus() {
  const val = focusInput.value.trim();
  if (val) {
    localStorage.setItem("momentumFocus", val);
    focusDisplay.textContent = `🎯 ${val}`;
    focusInput.style.display = "none";
    focusBtn.style.display = "none";
  }
}

function resetFocus() {
  // Double-click on focusDisplay to reset
  focusDisplay.addEventListener("dblclick", () => {
    localStorage.removeItem("momentumFocus");
    focusDisplay.textContent = "";
    focusInput.style.display = "inline-block";
    focusBtn.style.display = "inline-block";
    focusInput.value = "";
  });
}

// ---- Init ----
function init() {
  setWallpaper();
  setQuote();
  updateTime();
  loadFocus();
  resetFocus();

  // Update time every second
  setInterval(updateTime, 1000);

  // Change wallpaper every 30 seconds (optional)
  setInterval(setWallpaper, 30000);

  // Change quote every 20 seconds
  setInterval(setQuote, 20000);

  // Focus button
  focusBtn.addEventListener("click", setFocus);
  focusInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") setFocus();
  });
}

// Start
init();