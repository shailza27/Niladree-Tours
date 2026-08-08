/* ============================================================
   TOUR DATA
   Tour NAMES below are real (from client). Duration, price,
   itinerary day-by-day, and inclusions/exclusions are still
   DUMMY placeholders — replace with real details.
   category: "spiritual" | "international" | "student"
   ============================================================ */

const TOURS = [
  {
    id: "south-india-yatra",
    category: "spiritual",
    name: "South India Yatra",
    region: "Tamil Nadu & Karnataka, India",
    duration: "9 Days / 8 Nights",
    groupSize: "Groups of 15–25",
    price: "₹32,000 per person",
    teaser: "A temple circuit across South India's major shrines, with fixed group departures.",
    itinerary: [
      { day: 1, title: "Arrival", text: "Pick-up and welcome briefing." },
      { day: 2, title: "Temple Darshan", text: "Guided visit to major temple complex." },
      { day: 3, title: "Temple Darshan", text: "Continued temple circuit." },
      { day: 4, title: "Travel Day", text: "Drive to next destination." },
      { day: 5, title: "Temple Darshan", text: "Local darshan and rituals." },
      { day: 6, title: "Temple Darshan", text: "Continued circuit." },
      { day: 7, title: "Sightseeing", text: "Regional heritage sites." },
      { day: 8, title: "Free Day / Shopping", text: "Local market visit." },
      { day: 9, title: "Departure", text: "Drop to station/airport." }
    ],
    includes: ["AC coach transport", "Hotel stays (twin sharing)", "Daily breakfast & dinner", "Local guide & permits", "Tour coordinator"],
    excludes: ["Airfare/train fare", "Lunches", "Temple donations", "Personal expenses"]
  },
  {
    id: "kerala-tours",
    category: "spiritual",
    name: "Kerala Tours",
    region: "Kerala, India",
    duration: "7 Days / 6 Nights",
    groupSize: "Groups of 15–25",
    price: "₹28,000 per person",
    teaser: "Kerala's temple towns and backwaters, combined into one group circuit.",
    itinerary: [
      { day: 1, title: "Arrival", text: "Pick-up and welcome briefing." },
      { day: 2, title: "Temple Visit", text: "Local temple darshan." },
      { day: 3, title: "Backwaters", text: "Houseboat/backwater experience." },
      { day: 4, title: "Hill Station", text: "Scenic drive and sightseeing." },
      { day: 5, title: "Temple Visit", text: "Continued circuit." },
      { day: 6, title: "Beach / Leisure", text: "Free time at leisure." },
      { day: 7, title: "Departure", text: "Drop to station/airport." }
    ],
    includes: ["Hotel & houseboat stays", "Daily breakfast & dinner", "AC transport", "Local guide", "Tour coordinator"],
    excludes: ["Airfare/train fare", "Lunches", "Personal expenses"]
  },
  {
    id: "narmada-parikrama",
    category: "spiritual",
    name: "Narmada Parikrama",
    region: "Madhya Pradesh & Gujarat, India",
    duration: "10 Days / 9 Nights",
    groupSize: "Groups of 15–30",
    price: "₹30,000 per person",
    teaser: "A guided circuit along the sacred Narmada river's key ghats and temple towns.",
    itinerary: [
      { day: 1, title: "Arrival", text: "Pick-up and welcome briefing." },
      { day: 2, title: "Ghat Darshan", text: "Riverside temple visits." },
      { day: 3, title: "Ghat Darshan", text: "Continued circuit." },
      { day: 4, title: "Travel Day", text: "Drive to next stop along the river." },
      { day: 5, title: "Ghat Darshan", text: "Local rituals and darshan." },
      { day: 6, title: "Ghat Darshan", text: "Continued circuit." },
      { day: 7, title: "Travel Day", text: "Drive to next stop." },
      { day: 8, title: "Ghat Darshan", text: "Final major temple stop." },
      { day: 9, title: "Free Day", text: "Rest / local exploration." },
      { day: 10, title: "Departure", text: "Drop to station/airport." }
    ],
    includes: ["AC coach transport", "Hotel stays", "Daily breakfast & dinner", "Local guide & permits", "Tour coordinator"],
    excludes: ["Airfare/train fare", "Lunches", "Personal expenses"]
  },
  {
    id: "jagannath-puri-gangasagar",
    category: "spiritual",
    name: "Jagannath Puri Gangasagar",
    region: "Odisha & West Bengal, India",
    duration: "6 Days / 5 Nights",
    groupSize: "Groups of 20–35",
    price: "₹19,500 per person",
    teaser: "Puri's Jagannath Temple combined with the Gangasagar pilgrimage circuit.",
    itinerary: [
      { day: 1, title: "Arrival in Puri", text: "Check-in, evening at Puri beach." },
      { day: 2, title: "Jagannath Temple Darshan", text: "Morning darshan, local sightseeing." },
      { day: 3, title: "Konark Excursion", text: "Full-day trip to Konark Sun Temple." },
      { day: 4, title: "Travel to Gangasagar", text: "Drive/transfer toward Gangasagar." },
      { day: 5, title: "Gangasagar Darshan", text: "Sacred bathing ritual and temple visit." },
      { day: 6, title: "Departure", text: "Drop to station/airport." }
    ],
    includes: ["Hotel stays", "Breakfast & dinner", "AC vehicle", "Temple guide", "Tour coordinator"],
    excludes: ["Airfare/train fare", "Lunches", "Temple donations", "Personal expenses"]
  },
  {
    id: "nepal-tours",
    category: "international",
    name: "Nepal Tours",
    region: "Kathmandu · Pokhara · Lumbini",
    duration: "8 Days / 7 Nights",
    groupSize: "Groups of 15–25",
    price: "₹56,000 per person",
    teaser: "Pashupatinath, Lumbini and the Annapurna foothills on one fixed-departure circuit.",
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
    id: "chardham-yatra-uttarakhand",
    category: "spiritual",
    name: "Chardham Yatra (Uttarakhand)",
    region: "Uttarakhand, India",
    duration: "11 Days / 10 Nights",
    groupSize: "Groups of 15–25",
    price: "₹42,000 per person",
    teaser: "The classic pilgrimage circuit to Yamunotri, Gangotri, Kedarnath and Badrinath, with fixed departures through the yatra season.",
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
    id: "delhi-heritage-history",
    category: "student",
    name: "Delhi Heritage & History Trail",
    region: "New Delhi, India",
    duration: "4 Days / 3 Nights",
    groupSize: "School/college groups, 30–60 students",
    price: "₹7,200 per student",
    teaser: "A curriculum-linked heritage trip — placeholder, pending real student tour details.",
    itinerary: [
      { day: 1, title: "Arrival & Red Fort", text: "Orientation session, Red Fort guided walk." },
      { day: 2, title: "Qutub Minar & Humayun's Tomb", text: "Heritage walk with worksheet activity." },
      { day: 3, title: "National Museum & Parliament (exterior)", text: "Curated museum session with docent." },
      { day: 4, title: "Departure", text: "Feedback session, drop to station." }
    ],
    includes: ["Hostel/hotel stay", "All meals", "AC bus transport", "Teacher-briefed guide", "Entry tickets", "First-aid attendant"],
    excludes: ["Travel to Delhi", "Personal expenses"]
  }
];

const CATEGORY_LABELS = {
  spiritual: "Spiritual",
  international: "International",
  student: "Student Educational"
};
