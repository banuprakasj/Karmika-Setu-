const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newTranslations = {
  en: {
    orgSetup: "Organization Setup",
    contractorSetup: "Contractor Setup",
    setupDesc: "Professional details to help verify your identity on Karmik Setu.",
    orgNameLabel: "Organization Name",
    businessNameLabel: "Business / Company",
    orgTypeLabel: "Organization Type",
    contactPersonLabel: "Contact Person",
    officeAddress: "Office Address",
    completeSetup: "Complete Setup",
    cancelLogout: "Cancel & Logout",
    completeProfile: "Complete your profile",
    profileDesc: "Provide your Aadhaar and PAN details to verify your identity and get your Karmik Setu ID.",
    panCard: "PAN Card",
    currentAddress: "Current Address",
    completeRegistration: "Complete Registration",
    kycNotice: "Organization accounts are subjected to KYC verification before accessing worker data.",
    aadhaarWarning: "* Aadhaar is mandatory to verify your digital identity securely."
  },
  hi: {
    orgSetup: "संस्था सेटअप",
    contractorSetup: "ठेकेदार सेटअप",
    setupDesc: "कार्मिक सेतु पर आपकी पहचान सत्यापित करने के लिए व्यावसायिक विवरण।",
    orgNameLabel: "संस्था का नाम",
    businessNameLabel: "व्यवसाय / कंपनी",
    orgTypeLabel: "संस्था का प्रकार",
    contactPersonLabel: "संपर्क व्यक्ति",
    officeAddress: "कार्यालय का पता",
    completeSetup: "सेटअप पूरा करें",
    cancelLogout: "रद्द करें और लॉगआउट करें",
    completeProfile: "अपनी प्रोफ़ाइल पूरी करें",
    profileDesc: "अपनी पहचान सत्यापित करने और अपनी कार्मिक सेतु आईडी प्राप्त करने के लिए अपने आधार और पैन विवरण प्रदान करें।",
    panCard: "पैन कार्ड",
    currentAddress: "वर्तमान पता",
    completeRegistration: "पंजीकरण पूरा करें",
    kycNotice: "श्रमिक डेटा तक पहुंचने से पहले संगठन खातों का केवाईसी सत्यापन किया जाता है।",
    aadhaarWarning: "* आपकी डिजिटल पहचान को सुरक्षित रूप से सत्यापित करने के लिए आधार अनिवार्य है।"
  },
  kn: {
    orgSetup: "ಸಂಸ್ಥೆ ಸೆಟಪ್",
    contractorSetup: "ಗುತ್ತಿಗೆದಾರ ಸೆಟಪ್",
    setupDesc: "ಕಾರ್ಮಿಕ್ ಸೇತುವಿನಲ್ಲಿ ನಿಮ್ಮ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಲು ವೃತ್ತಿಪರ ವಿವರಗಳು.",
    orgNameLabel: "ಸಂಸ್ಥೆಯ ಹೆಸರು",
    businessNameLabel: "ವ್ಯಾಪಾರ / ಕಂಪನಿ",
    orgTypeLabel: "ಸಂಸ್ಥೆಯ ಪ್ರಕಾರ",
    contactPersonLabel: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ",
    officeAddress: "ಕಚೇರಿ ವಿಳಾಸ",
    completeSetup: "ಸೆಟಪ್ ಪೂರ್ಣಗೊಳಿಸಿ",
    cancelLogout: "ರದ್ದುಮಾಡಿ ಮತ್ತು ಲಾಗೌಟ್ ಮಾಡಿ",
    completeProfile: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸಿ",
    profileDesc: "ನಿಮ್ಮ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಲು ಮತ್ತು ನಿಮ್ಮ ಕಾರ್ಮಿಕ್ ಸೇತು ಐಡಿಯನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಆಧಾರ್ ಮತ್ತು ಪ್ಯಾನ್ ವಿವರಗಳನ್ನು ಒದಗಿಸಿ.",
    panCard: "ಪ್ಯಾನ್ ಕಾರ್ಡ್",
    currentAddress: "ಪ್ರಸ್ತುತ ವಿಳಾಸ",
    completeRegistration: "ನೋಂದಣಿ ಪೂರ್ಣಗೊಳಿಸಿ",
    kycNotice: "ಕಾರ್ಯಕರ್ತರ ಡೇಟಾವನ್ನು ಪ್ರವೇಶಿಸುವ ಮೊದಲು ಸಂಸ್ಥೆಯ ಖಾತೆಗಳನ್ನು KYC ಪರಿಶೀಲನೆಗೆ ಒಳಪಡಿಸಲಾಗುತ್ತದೆ.",
    aadhaarWarning: "* ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಗುರುತನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪರಿಶೀಲಿಸಲು ಆಧಾರ್ ಕಡ್ಡಾಯವಾಗಿದೆ."
  },
  ta: {
    orgSetup: "நிறுவன அமைப்பு",
    contractorSetup: "ஒப்பந்தக்காரர் அமைப்பு",
    setupDesc: "கார்மிக் சேதுவில் உங்கள் அடையாளத்தை சரிபார்க்க தொழில்முறை விவரங்கள்.",
    orgNameLabel: "நிறுவனத்தின் பெயர்",
    businessNameLabel: "வணிகம் / நிறுவனம்",
    orgTypeLabel: "நிறுவனத்தின் வகை",
    contactPersonLabel: "தொடர்பு கொள்ள வேண்டிய நபர்",
    officeAddress: "அலுவலக முகவரி",
    completeSetup: "அமைப்பை முடிக்கவும்",
    cancelLogout: "ரத்துசெய் & வெளியேறு",
    completeProfile: "உங்கள் சுயவிவரத்தை முடிக்கவும்",
    profileDesc: "உங்கள் அடையாளத்தை சரிபார்க்க மற்றும் உங்கள் கார்மிக் சேது ஐடியைப் பெற உங்கள் ஆதார் மற்றும் பான் விவரங்களை வழங்கவும்.",
    panCard: "பான் கார்டு",
    currentAddress: "தற்போதைய முகவரி",
    completeRegistration: "பதிவை முடிக்கவும்",
    kycNotice: "தொழிலாளர் தரவை அணுகுவதற்கு முன்பு நிறுவன கணக்குகள் KYC சரிபார்ப்புக்கு உட்படுத்தப்படுகின்றன.",
    aadhaarWarning: "* உங்கள் டிஜிட்டல் அடையாளத்தை பாதுகாப்பாக சரிபார்க்க ஆதார் கட்டாயம்."
  },
  te: {
    orgSetup: "సంస్థ సెటప్",
    contractorSetup: "కాంట్రాక్టర్ సెటప్",
    setupDesc: "కార్మిక్ సేతులో మీ గుర్తింపును ధృవీకరించడానికి వృత్తిపరమైన వివరాలు.",
    orgNameLabel: "సంస్థ పేరు",
    businessNameLabel: "వ్యాపారం / కంపెనీ",
    orgTypeLabel: "సంస్థ రకం",
    contactPersonLabel: "సంప్రదించవలసిన వ్యక్తి",
    officeAddress: "కార్యాలయ చిరునామా",
    completeSetup: "సెటప్ పూర్తి చేయండి",
    cancelLogout: "రద్దు చేయండి & లాగౌట్ చేయండి",
    completeProfile: "మీ ప్రొఫైల్‌ను పూర్తి చేయండి",
    profileDesc: "మీ గుర్తింపును ధృవీకరించడానికి మరియు మీ కార్మిక్ సేతు ఐడీని పొందడానికి మీ ఆధార్ మరియు పాన్ వివరాలను అందించండి.",
    panCard: "పాన్ కార్డ్",
    currentAddress: "ప్రస్తుత చిరునామా",
    completeRegistration: "నమోదు పూర్తి చేయండి",
    kycNotice: "కార్మికుల డేటాను యాక్సెస్ చేయడానికి ముందు సంస్థ ఖాతాలు KYC ధృవీకరణకు లోబడి ఉంటాయి.",
    aadhaarWarning: "* మీ డిజిటల్ గుర్తింపును సురక్షితంగా ధృవీకరించడానికి ఆధార్ తప్పనిసరి."
  },
  mr: {
    orgSetup: "संस्था सेटअप",
    contractorSetup: "कंत्राटदार सेटअप",
    setupDesc: "कार्मिक सेतूवर तुमची ओळख सत्यापित करण्यासाठी व्यावसायिक तपशील.",
    orgNameLabel: "संस्थेचे नाव",
    businessNameLabel: "व्यवसाय / कंपनी",
    orgTypeLabel: "संस्थेचा प्रकार",
    contactPersonLabel: "संपर्क व्यक्ती",
    officeAddress: "कार्यालयाचा पत्ता",
    completeSetup: "सेटअप पूर्ण करा",
    cancelLogout: "रद्द करा आणि लॉगआउट करा",
    completeProfile: "तुमची प्रोफाइल पूर्ण करा",
    profileDesc: "तुमची ओळख सत्यापित करण्यासाठी आणि तुमचा कार्मिक सेतू आयडी मिळवण्यासाठी तुमचे आधार आणि पॅन तपशील द्या.",
    panCard: "पॅन कार्ड",
    currentAddress: "सध्याचा पत्ता",
    completeRegistration: "नोंदणी पूर्ण करा",
    kycNotice: "कामगार डेटामध्ये प्रवेश करण्यापूर्वी संस्था खात्यांची KYC पडताळणी केली जाते.",
    aadhaarWarning: "* तुमची डिजिटल ओळख सुरक्षितपणे सत्यापित करण्यासाठी आधार अनिवार्य आहे."
  }
};

for (const [lang, translations] of Object.entries(newTranslations)) {
  const langRegex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?)(^\\s*\\},?)`, 'm');
  const match = content.match(langRegex);
  
  if (match) {
    let newEntries = '';
    for (const [k, v] of Object.entries(translations)) {
      newEntries += `    ${k}: "${v}",\n`;
    }
    const replacement = `${match[1]}${newEntries}${match[2]}`;
    content = content.replace(match[0], replacement);
  }
}

fs.writeFileSync(filePath, content);
console.log('Translations updated successfully!');
