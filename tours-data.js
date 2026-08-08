/* ============================================================
   DUMMY TOUR DATA — replace with real tours.
   category: "spiritual" | "international" | "student"
   ============================================================ */

const TOURS = [
  {
    id: "char-dham-yatra",
    category: "spiritual",
    name: "Char Dham Yatra",
    region: "Uttarakhand, India",
    duration: "11 Days / 10 Nights",
    groupSize: "Groups of 15–25",
    price: "₹42,000 per person",
    teaser: "A guided pilgrimage circuit to Yamunotri, Gangotri, Kedarnath and Badrinath, with fixed departures through the yatra season.",
    itinerary: [
      { day: 1, title: "Arrival in Haridwar", text: "Pick-up, welcome briefing, evening Ganga Aarti at Har Ki Pauri." },
      { day: 2, title: "Haridwar to Barkot", text: "Drive via Mussoorie viewpoint. Overnight in Barkot." },
      { day: 3, title: "Yamunotri Darshan", text: "Trek/pony to Yamunotri temple, return to Barkot." },
      { day: 4, title: "Barkot to Uttarkashi", text: "Scenic drive along the Yamuna valley." },
      { day: 5, title: "Uttarkashi to Gangotri", text: "Darshan at Gangotri temple, return to Uttarkashi." },
      { day: 6, title: "Uttarkashi to Guptkashi", text: "Long scenic drive, overnight halt." },
      { day: 7, title: "Guptkashi to Kedarnath", text: "Trek/helicopter option to Kedarnath, evening darshan." },
      { day: 8, title: "Kedarnath to Guptkashi", text: "Descend and drive back." },
      { day: 9, title: "Guptkashi to Badrinath", text: "Drive via Joshimath, evening darshan at Badrinath." },
      { day: 10, title: "Badrinath to Rudraprayag", text: "Visit Mana village en route." },
      { day: 11, title: "Departure", text: "Drive to Haridwar/Dehradun for onward travel." }
    ],
    includes: ["AC coach transport", "Hotel stays (twin sharing)", "Daily breakfast & dinner", "Local guide & permits", "First-aid & oxygen support", "24x7 tour coordinator"],
    excludes: ["Airfare/train to Haridwar", "Lunches", "Pony/helicopter charges", "Personal expenses"]
  },
  {
    id: "jagannath-puri-darshan",
    category: "spiritual",
    name: "Jagannath Puri Darshan",
    region: "Odisha, India",
    duration: "5 Days / 4 Nights",
    groupSize: "Groups of 20–35",
    price: "₹18,500 per person",
    teaser: "Puri, Konark and the Nilachala temple towns, timed around temple rituals with a local pandit-guided darshan.",
    itinerary: [
      { day: 1, title: "Arrival in Puri", text: "Check-in, evening at Puri beach." },
      { day: 2, title: "Jagannath Temple Darshan", text: "Morning darshan, afternoon at Gundicha Temple." },
      { day: 3, title: "Konark Sun Temple", text: "Full-day trip to Konark and Chandrabhaga beach." },
      { day: 4, title: "Bhubaneswar Temple Circuit", text: "Lingaraj Temple, Udayagiri-Khandagiri caves." },
      { day: 5, title: "Departure", text: "Check-out and drop to station/airport." }
    ],
    includes: ["Hotel stays", "Breakfast & dinner", "AC vehicle for sightseeing", "Temple guide", "Tour coordinator"],
    excludes: ["Airfare/train fare", "Lunches", "Temple donations", "Personal expenses"]
  },
  {
    id: "varanasi-ayodhya",
    category: "spiritual",
    name: "Varanasi & Ayodhya Pilgrimage",
    region: "Uttar Pradesh, India",
    duration: "6 Days / 5 Nights",
    groupSize: "Groups of 15–30",
    price: "₹21,000 per person",
    teaser: "Ganga Aarti at Dashashwamedh Ghat, Kashi Vishwanath darshan, and the Ram Mandir circuit in Ayodhya.",
    itinerary: [
      { day: 1, title: "Arrival in Varanasi", text: "Check-in, evening Ganga Aarti." },
      { day: 2, title: "Kashi Vishwanath Darshan", text: "Early morning temple visit, boat ride at sunrise." },
      { day: 3, title: "Sarnath Excursion", text: "Buddhist heritage sites, museum visit." },
      { day: 4, title: "Varanasi to Ayodhya", text: "Drive to Ayodhya, evening at Saryu Ghat." },
      { day: 5, title: "Ram Mandir Darshan", text: "Full-day temple circuit including Hanuman Garhi." },
      { day: 6, title: "Departure", text: "Drop to station/airport." }
    ],
    includes: ["Hotel stays", "Breakfast & dinner", "AC transport", "Guide & boat ride", "Tour coordinator"],
    excludes: ["Airfare/train fare", "Lunches", "Personal expenses"]
  },
  {
    id: "bhutan-himalayan-trail",
    category: "international",
    name: "Bhutan Himalayan Trail",
    region: "Paro · Thimphu · Punakha",
    duration: "7 Days / 6 Nights",
    groupSize: "Groups of 10–18",
    price: "₹78,000 per person",
    teaser: "Tiger's Nest monastery, Punakha Dzong and the Thimphu valley — a slower-paced circuit through the kingdom.",
    itinerary: [
      { day: 1, title: "Arrival in Paro", text: "Transfer to Thimphu, evening at leisure." },
      { day: 2, title: "Thimphu Sightseeing", text: "Buddha Dordenma, National Memorial Chorten." },
      { day: 3, title: "Thimphu to Punakha", text: "Dochula Pass, Punakha Dzong." },
      { day: 4, title: "Punakha to Paro", text: "Scenic drive back, local market visit." },
      { day: 5, title: "Tiger's Nest Hike", text: "Trek to Paro Taktsang monastery." },
      { day: 6, title: "Paro Valley", text: "Rinpung Dzong, farmhouse lunch experience." },
      { day: 7, title: "Departure", text: "Transfer to Paro airport." }
    ],
    includes: ["Visa/permit processing", "Hotel stays", "All meals", "SDF fees", "Licensed local guide", "AC vehicle"],
    excludes: ["International airfare", "Travel insurance", "Personal expenses"]
  },
  {
    id: "nepal-sacred-circuit",
    category: "international",
    name: "Nepal Sacred Circuit",
    region: "Kathmandu · Pokhara · Lumbini",
    duration: "8 Days / 7 Nights",
    groupSize: "Groups of 15–25",
    price: "₹56,000 per person",
    teaser: "Pashupatinath, Lumbini and the Annapurna foothills, combining pilgrimage stops with a scenic lake-town break.",
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", text: "Pashupatinath evening Aarti." },
      { day: 2, title: "Kathmandu Valley", text: "Swayambhunath, Boudhanath, Durbar Square." },
      { day: 3, title: "Kathmandu to Pokhara", text: "Scenic drive, evening at Phewa Lake." },
      { day: 4, title: "Pokhara Sightseeing", text: "Sarangkot sunrise viewpoint, Davis Falls." },
      { day: 5, title: "Pokhara to Lumbini", text: "Drive to Buddha's birthplace." },
      { day: 6, title: "Lumbini Monastic Zone", text: "Maya Devi Temple, monastery walk." },
      { day: 7, title: "Return to Kathmandu", text: "Free evening for shopping." },
      { day: 8, title: "Departure", text: "Transfer to airport." }
    ],
    includes: ["Hotel stays", "Breakfast & dinner", "Ground transport", "Local guide", "Tour coordinator"],
    excludes: ["International airfare", "Visa fees", "Personal expenses"]
  },
  {
    id: "delhi-heritage-history",
    category: "student",
    name: "Delhi Heritage & History Trail",
    region: "New Delhi, India",
    duration: "4 Days / 3 Nights",
    groupSize: "School/college groups, 30–60 students",
    price: "₹7,200 per student",
    teaser: "A curriculum-linked heritage trip covering Mughal and colonial-era Delhi, with a briefing pack for teachers.",
    itinerary: [
      { day: 1, title: "Arrival & Red Fort", text: "Orientation session, Red Fort guided walk." },
      { day: 2, title: "Qutub Minar & Humayun's Tomb", text: "Heritage walk with worksheet activity." },
      { day: 3, title: "National Museum & Parliament (exterior)", text: "Curated museum session with docent." },
      { day: 4, title: "Departure", text: "Feedback session, drop to station." }
    ],
    includes: ["Hostel/hotel stay", "All meals", "AC bus transport", "Teacher-briefed guide", "Entry tickets", "First-aid attendant"],
    excludes: ["Travel to Delhi", "Personal expenses"]
  },
  {
    id: "science-city-educational",
    category: "student",
    name: "Science City Educational Trip",
    region: "Kolkata, India",
    duration: "3 Days / 2 Nights",
    groupSize: "School groups, 25–50 students",
    price: "₹5,400 per student",
    teaser: "Hands-on sessions at Science City plus a planetarium show, designed around a school science curriculum.",
    itinerary: [
      { day: 1, title: "Arrival & Science City", text: "Space Odyssey, Dynamotion Hall sessions." },
      { day: 2, title: "Planetarium & Maritime Centre", text: "Guided show and marine exhibits." },
      { day: 3, title: "Departure", text: "Wrap-up quiz, drop to station." }
    ],
    includes: ["Hotel stay", "All meals", "Bus transport", "Entry tickets", "Teacher coordinator"],
    excludes: ["Travel to Kolkata", "Personal expenses"]
  },
  {
    id: "northeast-cultural-exchange",
    category: "student",
    name: "Northeast India Cultural Exchange",
    region: "Meghalaya & Assam",
    duration: "6 Days / 5 Nights",
    groupSize: "College groups, 20–40 students",
    price: "₹14,800 per student",
    teaser: "Living-root bridges, Kaziranga safari and a homestay component built for a cultural studies field trip.",
    itinerary: [
      { day: 1, title: "Arrival in Guwahati", text: "Transfer to Shillong." },
      { day: 2, title: "Shillong & Cherrapunji", text: "Waterfalls, local craft workshop." },
      { day: 3, title: "Living Root Bridges Trek", text: "Guided trek to Double Decker bridge." },
      { day: 4, title: "Homestay in Mawlynnong", text: "Village immersion, cultural exchange session." },
      { day: 5, title: "Kaziranga National Park", text: "Jeep safari, rhino conservation talk." },
      { day: 6, title: "Departure", text: "Transfer to Guwahati airport." }
    ],
    includes: ["Stays incl. homestay", "All meals", "Ground transport", "Safari permits", "Faculty coordinator support"],
    excludes: ["Travel to Guwahati", "Personal expenses"]
  }
];

const CATEGORY_LABELS = {
  spiritual: "Spiritual",
  international: "International",
  student: "Student Educational"
};
