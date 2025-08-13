import beach from "../assets/beach gateway.jpg";
import dolomite from "../assets/mountains.jpg";
import azore from "../assets/azores-2.jpg";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiMountainClimbing, GiPalmTree, GiMountainCave } from "react-icons/gi";
import { FaCompass } from "react-icons/fa";
import { RiAncientGateLine } from "react-icons/ri";

export const categoryData = [
  {
    id: "1",
    icon: FaUmbrellaBeach,
    title: "Beach Gateway",
    description: "Relax on sun-kissed shores and enjoy the sea breeze.",
  },
  {
    id: "2",
    icon: GiMountainClimbing,
    title: "Adventure Trips",
    description: "Thrilling treks, climbs, and adrenaline-packed experiences.",
  },
  {
    id: "3",
    icon: GiPalmTree,
    title: "Exotic Trips",
    description: "Discover luxurious and unique destinations around the world.",
  },
  {
    id: "4",
    icon: FaCompass,
    title: "Hidden Gems",
    description: "Explore offbeat, less-explored, and secret travel spots.",
  },
  {
    id: "5",
    icon: RiAncientGateLine,
    title: "Cultural Trails",
    description: "Dive into heritage, temples, and rich local traditions.",
  },
  {
    id: "6",
    icon: GiMountainCave,
    title: "Mountain Escapes",
    description: "Breathe in fresh air among peaceful hills and valleys.",
  },
];


export const offers = [
  {
    id: 1,
    type: "Mountains",
    place: "Dolomites",
    image: dolomite,
    bgcolor: "green-900",
    price: 400,
  },
  {
    id: 2,
    type: "Beaches",
    place: "Connary Islands",
    image: beach,
    bgcolor: "orange-500",
    price: 600,
  },
  {
    id: 3,
    type: "Relax",
    place: "Azores",
    image: azore,
    bgcolor: "yellow-600",
    price: 800,
  },
];

export const tripData = [
  // Beach Getaway — At least 6
  {
    id: 1,
    image: "https://source.unsplash.com/600x400/?Goa,beach",
    placeName: "Goa Coastal Escape",
    location: "Goa, India",
    date: "2025-12-10 - 2025-12-15",
    startDate: "2025-12-10",
    endDate: "2025-12-15",
    price: "₹25,000",
    colour: "bg-yellow-200",
    category: ["beach-getaway"],
    tags: ["bestseller", "popular"],
    description: "Relax on sun-kissed beaches of North and South Goa, with lively nightlife and serene getaways.",
    nearestDestinations: ["Panaji", "Vagator", "Palolem"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Goa,sea",
      "https://source.unsplash.com/600x400/?Goa,party",
      "https://source.unsplash.com/600x400/?Goa,market"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Water Sports"],
    packageDetails: "Includes guided tours, water sports, nightlife entry, and beachside dining.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 2,
    image: "https://source.unsplash.com/600x400/?Maldives,beach",
    placeName: "Maldives Luxury Retreat",
    location: "Maldives",
    date: "2026-01-05 - 2026-01-10",
    startDate: "2026-01-05",
    endDate: "2026-01-10",
    price: "$1200",
    colour: "bg-blue-100",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["luxury"],
    description: "Overwater villas and pristine lagoons in a tropical paradise of privacy and romance.",
    nearestDestinations: ["Male Atoll", "Ari Atoll", "Baa Atoll"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Maldives,overwater",
      "https://source.unsplash.com/600x400/?Maldives,lagoon",
      "https://source.unsplash.com/600x400/?Maldives,resort"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Snorkeling", "Spa"],
    packageDetails: "Includes sea plane transfers, snorkeling, spa, candlelight dinner on beach.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 3,
    image: "https://source.unsplash.com/600x400/?Bali,beach",
    placeName: "Bali Romantic Shore",
    location: "Bali, Indonesia",
    date: "2025-11-20 - 2025-11-25",
    startDate: "2025-11-20",
    endDate: "2025-11-25",
    price: "$800",
    colour: "bg-pink-100",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["romantic", "offer"],
    description: "Tropical beach retreat with cultural excursions to temples and rice terraces.",
    nearestDestinations: ["Ubud", "Uluwatu", "Seminyak"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Bali,sea",
      "https://source.unsplash.com/600x400/?Bali,temple",
      "https://source.unsplash.com/600x400/?Bali,romantic"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes temple visits, romantic dinner, rice terrace trek and spa.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 4,
    image: "https://source.unsplash.com/600x400/?Palolem,beach",
    placeName: "Palolem Peaceful Beach",
    location: "Goa, India",
    date: "2025-10-05 - 2025-10-09",
    startDate: "2025-10-05",
    endDate: "2025-10-09",
    price: "₹18,000",
    colour: "bg-green-100",
    category: ["beach-getaway", "hidden-gems"],
    tags: ["hidden-gem"],
    description: "Palm-fringed beach offering tranquility, yoga, and laid-back vibes.",
    nearestDestinations: ["Canacona", "Agonda", "Cola Beach"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Palolem,beach",
      "https://source.unsplash.com/600x400/?Goa,palm",
      "https://source.unsplash.com/600x400/?Goa,yoga"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Yoga Session"],
    packageDetails: "Includes yoga class, beach walks, seafood dinners and shacks.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 5,
    image: "https://source.unsplash.com/600x400/?Varkala,beach",
    placeName: "Varkala Cliffside Beach",
    location: "Kerala, India",
    date: "2025-09-15 - 2025-09-19",
    startDate: "2025-09-15",
    endDate: "2025-09-19",
    price: "₹22,000",
    colour: "bg-red-100",
    category: ["beach-getaway", "hidden-gems"],
    tags: [],
    description: "Scenic beach built on cliffs, dramatic views and serene Arabian Sea.",
    nearestDestinations: ["Kollam", "Valiyaparamba", "Alappuzha"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Varkala,cliff",
      "https://source.unsplash.com/600x400/?Kerala,beach",
      "https://source.unsplash.com/600x400/?Kerala,sea"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes cliff walking, Ayurvedic spa, seafood dinners.",
    averageRating: 4.4,
    region: "India"
  },
  {
    id: 6,
    image: "https://source.unsplash.com/600x400/?Lakshadweep,beach",
    placeName: "Lakshadweep Coral Retreat",
    location: "Lakshadweep, India",
    date: "2025-12-01 - 2025-12-05",
    startDate: "2025-12-01",
    endDate: "2025-12-05",
    price: "₹50,000",
    colour: "bg-teal-100",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["nature"],
    description: "Pristine coral reefs and turquoise lagoons, perfect for peace and diving.",
    nearestDestinations: ["Agatti", "Bangaram", "Minicoy"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Lakshadweep,lagoon",
      "https://source.unsplash.com/600x400/?Lakshadweep,coral",
      "https://source.unsplash.com/600x400/?Lakshadweep,sea"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour", "Snorkeling"],
    packageDetails: "Includes boat trips, snorkeling, beach stays and local cuisine.",
    averageRating: 4.7,
    region: "India"
  },
  // Adventure Trips — At least 6
  {
    id: 7,
    image: "https://source.unsplash.com/600x400/?Himalaya,trekking",
    placeName: "Kedarnath Trek Adventure",
    location: "Uttarakhand, India",
    date: "2026-05-01 - 2026-05-07",
    startDate: "2026-05-01",
    endDate: "2026-05-07",
    price: "₹30,000",
    colour: "bg-gray-200",
    category: ["adventure-trips", "cultural-trails"],
    tags: ["pilgrimage"],
    description: "Trek to sacred Kedarnath temple amidst majestic Himalayan landscapes.",
    nearestDestinations: ["Gaurikund", "Sonprayag", "Rudraprayag"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Kedarnath,trek",
      "https://source.unsplash.com/600x400/?Himalaya,temple",
      "https://source.unsplash.com/600x400/?Uttarakhand,landscape"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes 17 km trek, guide, camps, meals, temple darshan. Info: open Apr–Nov :contentReference[oaicite:1]{index=1}",
    averageRating: 4.8,
    region: "India"
  },
  {
    id: 8,
    image: "https://source.unsplash.com/600x400/?Rishikesh,rafting",
    placeName: "Rishikesh River Rush",
    location: "Rishikesh, India",
    date: "2025-08-10 - 2025-08-14",
    startDate: "2025-08-10",
    endDate: "2025-08-14",
    price: "₹12,000",
    colour: "bg-blue-200",
    category: ["adventure-trips", "cultural-trails"],
    tags: ["rafting"],
    description: "Experience river rafting, bungee jumps and yoga in the yoga capital of the world.",
    nearestDestinations: ["Lakshman Jhula", "Ram Jhula", "Neelkanth Temple"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Rishikesh,rafting",
      "https://source.unsplash.com/600x400/?Rishikesh,bungee",
      "https://source.unsplash.com/600x400/?Rishikesh,yoga"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Rafting Grades I–IV, Asia’s longest zipline, bungee, yoga retreats :contentReference[oaicite:2]{index=2}",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 9,
    image: "https://source.unsplash.com/600x400/?Swiss,alps,trek",
    placeName: "Swiss Alps Skiing",
    location: "Switzerland",
    date: "2026-02-01 - 2026-02-07",
    startDate: "2026-02-01",
    endDate: "2026-02-07",
    price: "$2000",
    colour: "bg-white",
    category: ["adventure-trips", "exotic-trips"],
    tags: ["skiing"],
    description: "Ski the snowy slopes of Switzerland with panoramic alpine views and cozy chalets.",
    nearestDestinations: ["Zermatt", "Interlaken", "Jungfrau"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Swiss,alps",
      "https://source.unsplash.com/600x400/?Switzerland,ski",
      "https://source.unsplash.com/600x400/?Chalet,Switzerland"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Ski Pass", "Guided Tour"],
    packageDetails: "Includes ski passes, gear rental, chalet stay, and mountain train.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 10,
    image: "https://source.unsplash.com/600x400/?Nepal,trek",
    placeName: "Everest Base Camp Trek",
    location: "Nepal",
    date: "2026-04-01 - 2026-04-15",
    startDate: "2026-04-01",
    endDate: "2026-04-15",
    price: "$1500",
    colour: "bg-gray-300",
    category: ["adventure-trips", "mountains"],
    tags: ["challenging"],
    description: "Epic trek to the foot of Everest through Sherpa villages and rugged Himalayan terrain.",
    nearestDestinations: ["Namche Bazaar", "Tengboche", "Lukla"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Everest,basecamp",
      "https://source.unsplash.com/600x400/?Himalayas,trek",
      "https://source.unsplash.com/600x400/?Nepal,landscape"
    ],
    facilities: ["Camp Stay", "Breakfast", "Porter", "Guide"],
    packageDetails: "Includes trek permits, guide, porters, meals, and lodging in tea houses.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 11,
    image: "https://source.unsplash.com/600x400/?Maharashtra,trekking",
    placeName: "Sinhagad Fort Trek",
    location: "Maharashtra, India",
    date: "2025-10-20 - 2025-10-22",
    startDate: "2025-10-20",
    endDate: "2025-10-22",
    price: "₹6,000",
    colour: "bg-red-200",
    category: ["adventure-trips", "hidden-gems"],
    tags: ["history"],
    description: "Short but steep trek to historic Sinhagad Fort with panorama of the Western Ghats.",
    nearestDestinations: ["Pune", "Lion's Point", "Tikona Fort"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Sinhagad,trek",
      "https://source.unsplash.com/600x400/?Western,Ghats",
      "https://source.unsplash.com/600x400/?Fort,India"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guide"],
    packageDetails: "Drive from Pune, guided trek, history tour, meals included.",
    averageRating: 4.3,
    region: "India"
  },
  {
    id: 12,
    image: "https://source.unsplash.com/600x400/?Bali,biking",
    placeName: "Bali Volcano Bike Tour",
    location: "Bali, Indonesia",
    date: "2026-03-10 - 2026-03-12",
    startDate: "2026-03-10",
    endDate: "2026-03-12",
    price: "$500",
    colour: "bg-orange-100",
    category: ["adventure-trips", "exotic-trips"],
    tags: ["biking"],
    description: "Mountain biking through villages and rice terraces at sunrise near Mount Batur.",
    nearestDestinations: ["Ubud", "Mount Batur", "Tegalalang"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Bali,biking",
      "https://source.unsplash.com/600x400/?Tegalalang,terrace",
      "https://source.unsplash.com/600x400/?Mount,Batur"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guide", "Bike"],
    packageDetails: "Includes bike rental, sunrise ride, tour guide, hotel stay.",
    averageRating: 4.7,
    region: "Out of India"
  },
  // Cultural Trails — At least 6
  {
    id: 13,
    image: "https://source.unsplash.com/600x400/?Ayodhya,temple",
    placeName: "Ayodhya Ram Mandir Pilgrimage",
    location: "Ayodhya, India",
    date: "2025-11-01 - 2025-11-03",
    startDate: "2025-11-01",
    endDate: "2025-11-03",
    price: "₹8,000",
    colour: "bg-gold-100",
    category: ["cultural-trails", "hidden-gems"],
    tags: ["pilgrimage"],
    description: "Visit the newly inaugurated Ram Mandir and sacred sites along river Sarayu.",
    nearestDestinations: ["Sarayu River", "Hanumangarhi", "Nagarjuna Sagar"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Ayodhya,temple",
      "https://source.unsplash.com/600x400/?Ayodhya,river",
      "https://source.unsplash.com/600x400/?Ayodhya,heritage"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes darshan, cultural walking tour, riverside aarti, and meals. Ayodhya has become top pilgrimage destination :contentReference[oaicite:3]{index=3}",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 14,
    image: "https://source.unsplash.com/600x400/?Varanasi,temple",
    placeName: "Varanasi Spiritual Trail",
    location: "Varanasi, India",
    date: "2025-12-20 - 2025-12-23",
    startDate: "2025-12-20",
    endDate: "2025-12-23",
    price: "₹12,000",
    colour: "bg-saffron-100",
    category: ["cultural-trails", "hidden-gems"],
    tags: ["heritage", "popular"],
    description: "Walk along Ghats, attend Ganga Aarti, and explore ancient temples and alleys.",
    nearestDestinations: ["Dashashwamedh Ghat", "Sarnath", "Assi Ghat"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Varanasi,aarti",
      "https://source.unsplash.com/600x400/?Varanasi,ghats",
      "https://source.unsplash.com/600x400/?Sarnath,temple"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes aarti ceremony, boat ride, temple tour, and meals.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 15,
    image: "https://source.unsplash.com/600x400/?Rome,ancient",
    placeName: "Rome Ancient Wonders",
    location: "Rome, Italy",
    date: "2026-06-10 - 2026-06-15",
    startDate: "2026-06-10",
    endDate: "2026-06-15",
    price: "$1500",
    colour: "bg-beige-100",
    category: ["cultural-trails", "exotic-trips"],
    tags: ["history"],
    description: "Explore Colosseum, Vatican, and timeless ruins in the cradle of Western civilization.",
    nearestDestinations: ["Colosseum", "Vatican", "Pantheon"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Rome,Colosseum",
      "https://source.unsplash.com/600x400/?Vatican,city",
      "https://source.unsplash.com/600x400/?Rome,ruins"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes guided walking tours, museum entry, and local cuisine.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 16,
    image: "https://source.unsplash.com/600x400/?Kyoto,temple",
    placeName: "Kyoto Cultural Heritage",
    location: "Kyoto, Japan",
    date: "2026-04-20 - 2026-04-25",
    startDate: "2026-04-20",
    endDate: "2026-04-25",
    price: "$1300",
    colour: "bg-green-200",
    category: ["cultural-trails", "exotic-trips"],
    tags: ["heritage"],
    description: "Visit ancient temples, tea ceremonies, and geisha districts in historic Kyoto.",
    nearestDestinations: ["Fushimi Inari", "Gion", "Kinkaku-ji"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Kyoto,temple",
      "https://source.unsplash.com/600x400/?Kyoto,geisha",
      "https://source.unsplash.com/600x400/?Kyoto,architecture"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes temple visits, tea ceremony, walking tour, and local meals.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 17,
    image: "https://source.unsplash.com/600x400/?Delhi,heritage",
    placeName: "Delhi Heritage Walk",
    location: "Delhi, India",
    date: "2025-09-12 - 2025-09-14",
    startDate: "2025-09-12",
    endDate: "2025-09-14",
    price: "₹7,000",
    colour: "bg-amber-100",
    category: ["cultural-trails"],
    tags: ["city"],
    description: "Explore Red Fort, Humayun's Tomb, Chandni Chowk and street food delights.",
    nearestDestinations: ["Red Fort", "Jama Masjid", "Chandni Chowk"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Delhi,Fort",
      "https://source.unsplash.com/600x400/?Delhi,market",
      "https://source.unsplash.com/600x400/?Delhi,streetfood"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes heritage walk, monument entry, and local food tasting.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 18,
    image: "https://source.unsplash.com/600x400/?Istanbul,heritage",
    placeName: "Istanbul Cultural Mosaic",
    location: "Istanbul, Turkey",
    date: "2026-05-15 - 2026-05-20",
    startDate: "2026-05-15",
    endDate: "2026-05-20",
    price: "$1100",
    colour: "bg-purple-100",
    category: ["cultural-trails", "exotic-trips"],
    tags: ["history"],
    description: "Discover Hagia Sophia, Blue Mosque, and vibrant bazaars melding East and West.",
    nearestDestinations: ["Hagia Sophia", "Grand Bazaar", "Spice Market"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Istanbul,mosque",
      "https://source.unsplash.com/600x400/?Istanbul,bazaar",
      "https://source.unsplash.com/600x400/?Istanbul,heritage"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes monument entries, guided tour, and local cuisine.",
    averageRating: 4.7,
    region: "Out of India"
  },
  // Exotic Trips — At least 6
  {
    id: 19,
    image: "https://source.unsplash.com/600x400/?Labuan,Bajo,Komodo",
    placeName: "Labuan Bajo & Komodo",
    location: "Indonesia",
    date: "2026-07-01 - 2026-07-07",
    startDate: "2026-07-01",
    endDate: "2026-07-07",
    price: "$900",
    colour: "bg-cyan-100",
    category: ["exotic-trips", "adventure-trips"],
    tags: ["unique"],
    description: "Explore Komodo dragons and stunning Indonesian landscapes—less touristy than Bali. :contentReference[oaicite:4]{index=4}",
    nearestDestinations: ["Komodo National Park", "Rinca Island", "Padar Island"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Komodo,dragon",
      "https://source.unsplash.com/600x400/?Labuan,Bajo",
      "https://source.unsplash.com/600x400/?Indonesia,island"
    ],
    facilities: ["Boat Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes boat cruise, trekking to see Komodo dragons, snorkeling.",
    averageRating: 4.7,
    region: "Out of India"
  },
  {
    id: 20,
    image: "https://source.unsplash.com/600x400/?Underwater,scuba",
    placeName: "Andaman Scuba & Reef",
    location: "Andaman & Nicobar, India",
    date: "2025-11-10 - 2025-11-15",
    startDate: "2025-11-10",
    endDate: "2025-11-15",
    price: "₹45,000",
    colour: "bg-blue-300",
    category: ["exotic-trips", "adventure-trips", "beach-getaway"],
    tags: ["scuba","popular"],
    description: "Explore coral reefs and marine life in the clear waters of Andaman. :contentReference[oaicite:5]{index=5}",
    nearestDestinations: ["Havelock Island", "Neil Island", "Ross Island"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Andaman,scuba",
      "https://source.unsplash.com/600x400/?Andaman,reef",
      "https://source.unsplash.com/600x400/?Andaman,marine"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Scuba Diving", "Boat Trips"],
    packageDetails: "Includes scuba sessions, snorkeling, island hop, and meals.",
    averageRating: 4.8,
    region: "India"
  },
  {
    id: 21,
    image: "https://source.unsplash.com/600x400/?Mauritius,beach",
    placeName: "Mauritius Island Escape",
    location: "Mauritius",
    date: "2026-02-20 - 2026-02-25",
    startDate: "2026-02-20",
    endDate: "2026-02-25",
    price: "$1100",
    colour: "bg-lightblue-100",
    category: ["exotic-trips", "beach-getaway"],
    tags: ["romantic"],
    description: "Picturesque island with beaches, waterfalls, and a tranquil tropical vibe.",
    nearestDestinations: ["Port Louis", "Chamarel", "Le Morne"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Mauritius,beach",
      "https://source.unsplash.com/600x400/?Mauritius,waterfall",
      "https://source.unsplash.com/600x400/?Mauritius,island"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes island tour, waterfalls, beach dinners, and cultural visits.",
    averageRating: 4.7,
    region: "Out of India"
  },
  {
    id: 22,
    image: "https://source.unsplash.com/600x400/?Thailand,beach",
    placeName: "Thailand Island Hopping",
    location: "Thailand",
    date: "2026-03-05 - 2026-03-10",
    startDate: "2026-03-05",
    endDate: "2026-03-10",
    price: "$700",
    colour: "bg-green-300",
    category: ["exotic-trips", "beach-getaway", "adventure-trips"],
    tags: ["offer","popular"],
    description: "Enjoy crystal-clear seas, snorkeling, and vibrant tropical islands.",
    nearestDestinations: ["Phuket", "Phi Phi Islands", "Krabi"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Thailand,island",
      "https://source.unsplash.com/600x400/?PhiPhi,beach",
      "https://source.unsplash.com/600x400/?Krabi,sea"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Boat Tours", "Snorkeling"],
    packageDetails: "Includes boat hop, snorkeling, beach stays, and island meals.",
    averageRating: 4.6,
    region: "Out of India"
  },
  {
    id: 23,
    image: "https://source.unsplash.com/600x400/?Seychelles,beach",
    placeName: "Seychelles Paradise",
    location: "Seychelles",
    date: "2026-04-01 - 2026-04-06",
    startDate: "2026-04-01",
    endDate: "2026-04-06",
    price: "$1300",
    colour: "bg-pink-200",
    category: ["exotic-trips", "beach-getaway"],
    tags: [],
    description: "White-sand beaches, lush tropical forests and reef-protected lagoons.",
    nearestDestinations: ["Mahe", "Praslin", "La Digue"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Seychelles,beach",
      "https://source.unsplash.com/600x400/?Seychelles,island",
      "https://source.unsplash.com/600x400/?Seychelles,lagoon"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes island tours, beach dinners, nature walks and spa.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 24,
    image: "https://source.unsplash.com/600x400/?Dubai,desert,city",
    placeName: "Dubai City & Desert",
    location: "Dubai, UAE",
    date: "2026-01-10 - 2026-01-15",
    startDate: "2026-01-10",
    endDate: "2026-01-15",
    price: "$900",
    colour: "bg-yellow-300",
    category: ["exotic-trips", "cultural-trails"],
    tags: ["city"],
    description: "Modern city meets desert dunes—skyline views, desert safari, and Arabian culture.",
    nearestDestinations: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Dubai,city",
      "https://source.unsplash.com/600x400/?Dubai,desert",
      "https://source.unsplash.com/600x400/?Burj,sky"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour", "Safari"],
    packageDetails: "Includes city tour, desert safari, dune dinner, and mall visit.",
    averageRating: 4.5,
    region: "Out of India"
  },
  // Hidden Gems — At least 6
  {
    id: 25,
    image: "https://source.unsplash.com/600x400/?Butterfly,Beach,Goa",
    placeName: "Butterfly Beach Goa",
    location: "Goa, India",
    date: "2025-10-10 - 2025-10-12",
    startDate: "2025-10-10",
    endDate: "2025-10-12",
    price: "₹12,000",
    colour: "bg-rose-100",
    category: ["hidden-gems", "beach-getaway"],
    tags: ["secluded"],
    description: "Accessible only by boat or trek, secluded beach with pristine sands. :contentReference[oaicite:6]{index=6}",
    nearestDestinations: ["Palolem", "Agonda", "Cola Beach"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Butterfly,Beach",
      "https://source.unsplash.com/600x400/?Secluded,Goa",
      "https://source.unsplash.com/600x400/?Goa,hidden"
    ],
    facilities: ["Camp Stay", "Breakfast", "Boat Transfer"],
    packageDetails: "Boat ride, camping, beach time, and meal package included.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 26,
    image: "https://source.unsplash.com/600x400/?Gokarna,OmBeach",
    placeName: "Gokarna Om Beach Retreat",
    location: "Karnataka, India",
    date: "2025-11-05 - 2025-11-08",
    startDate: "2025-11-05",
    endDate: "2025-11-08",
    price: "₹14,000",
    colour: "bg-orange-200",
    category: ["hidden-gems", "beach-getaway"],
    tags: ["spiritual"],
    description: "Cliff-side treks and peaceful beach with spiritual energy. :contentReference[oaicite:7]{index=7}",
    nearestDestinations: ["Gokarna Temple", "Half Moon Beach", "Paradise Beach"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Gokarna,beach",
      "https://source.unsplash.com/600x400/?OmBeach,cliff",
      "https://source.unsplash.com/600x400/?Karnataka,coast"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Walk"],
    packageDetails: "Includes trek, beach time, local food, and stay.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 27,
    image: "https://source.unsplash.com/600x400/?Hidden,Valley,India",
    placeName: "Spiti Valley Offbeat",
    location: "Spiti Valley, India",
    date: "2026-06-01 - 2026-06-07",
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    price: "₹35,000",
    colour: "bg-blue-400",
    category: ["hidden-gems", "mountains", "adventure-trips"],
    tags: ["offbeat"],
    description: "High-altitude valley with sparse population and stark natural beauty.",
    nearestDestinations: ["Kaza", "Key Monastery", "Chandratal Lake"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Spiti,Valley",
      "https://source.unsplash.com/600x400/?Spiti,monastery",
      "https://source.unsplash.com/600x400/?Spiti,landscape"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes road trip, campsite, monastery visits, and meals.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 28,
    image: "https://source.unsplash.com/600x400/?Bhutan,landscape",
    placeName: "Bhutan Offbeat Himalayan",
    location: "Bhutan",
    date: "2026-03-15 - 2026-03-20",
    startDate: "2026-03-15",
    endDate: "2026-03-20",
    price: "$800",
    colour: "bg-green-400",
    category: ["hidden-gems", "cultural-trails"],
    tags: ["serene"],
    description: "Peaceful Himalayan kingdom with monasteries and pristine nature.",
    nearestDestinations: ["Paro", "Thimphu", "Tiger's Nest"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Bhutan,monastery",
      "https://source.unsplash.com/600x400/?Bhutan,landscape",
      "https://source.unsplash.com/600x400/?Bhutan,trek"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes temple visits, mountain walks, and cultural tours.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 29,
    image: "https://source.unsplash.com/600x400/?Andaman,hidden,beach",
    placeName: "Little Andaman Explorer",
    location: "Andaman & Nicobar, India",
    date: "2026-02-10 - 2026-02-14",
    startDate: "2026-02-10",
    endDate: "2026-02-14",
    price: "₹40,000",
    colour: "bg-purple-200",
    category: ["hidden-gems", "adventure-trips", "exotic-trips"],
    tags: ["undiscovered"],
    description: "Remote island with waterfalls, jungles, and untouched beaches.",
    nearestDestinations: ["Havelock", "Neil Island", "Ross Island"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Little,Andaman",
      "https://source.unsplash.com/600x400/?Andaman,waterfall",
      "https://source.unsplash.com/600x400/?Andaman,jungle"
    ],
    facilities: ["Camp Stay", "Breakfast", "Boat Transfer", "Guided Tour"],
    packageDetails: "Includes boat ride, waterfall trek, jungle walk, and beach time.",
    averageRating: 4.7,
    region: "India"
  },
  {
    id: 30,
    image: "https://source.unsplash.com/600x400/?Kaziranga,landscape",
    placeName: "Kaziranga Wilderness Lodge",
    location: "Assam, India",
    date: "2026-01-05 - 2026-01-09",
    startDate: "2026-01-05",
    endDate: "2026-01-09",
    price: "₹28,000",
    colour: "bg-lime-100",
    category: ["hidden-gems", "cultural-trails"],
    tags: ["wildlife"],
    description: "Stay near Kaziranga National Park with wildlife safaris and lodge comfort.",
    nearestDestinations: ["Kaziranga NP", "Rhinoceros Sanctuary", "Assam Tea Gardens"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Kaziranga,elephant",
      "https://source.unsplash.com/600x400/?Kaziranga,lodge",
      "https://source.unsplash.com/600x400/?Assam,tea"
    ],
    facilities: ["Lodge Stay", "Breakfast", "Safari", "Guide"],
    packageDetails: "Includes lodge stay, wildlife safari, tea garden tour, and meals.",
    averageRating: 4.6,
    region: "India"
  },
  // Mountains — At least 6
  {
    id: 31,
    image: "https://source.unsplash.com/600x400/?Swiss,mountains",
    placeName: "Swiss Alpine Serenity",
    location: "Switzerland",
    date: "2026-07-10 - 2026-07-15",
    startDate: "2026-07-10",
    endDate: "2026-07-15",
    price: "$1800",
    colour: "bg-white",
    category: ["mountains", "exotic-trips"],
    tags: ["scenic","popular"],
    description: "High mountain lakes, alpine villages and cable car rides in Swiss Alps.",
    nearestDestinations: ["Matterhorn", "Lauterbrunnen", "Zermatt"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Swiss,alps",
      "https://source.unsplash.com/600x400/?Switzerland,lake",
      "https://source.unsplash.com/600x400/?Swiss,cablecar"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes cable car, village tours, lake cruise, and meals.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 32,
    image: "https://source.unsplash.com/600x400/?Himachal,mountains",
    placeName: "Himachal Hillstation Circuit",
    location: "Himachal Pradesh, India",
    date: "2026-05-20 - 2026-05-27",
    startDate: "2026-05-20",
    endDate: "2026-05-27",
    price: "₹28,000",
    colour: "bg-blue-100",
    category: ["mountains", "hidden-gems"],
    tags: ["scenic"],
    description: "Explore Manali, Kasol, and Kullu with mountain views and tranquil valleys. :contentReference[oaicite:8]{index=8}",
    nearestDestinations: ["Manali", "Kasol", "Kullu"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Himachal,Manali",
      "https://source.unsplash.com/600x400/?Kasol,valley",
      "https://source.unsplash.com/600x400/?Kullu,landscape"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes hillstation stay, valley walks, and village tours.",
    averageRating: 4.7,
    region: "India"
  },
  {
    id: 33,
    image: "https://source.unsplash.com/600x400/?Iceland,mountains",
    placeName: "Iceland Glacier Hike",
    location: "Iceland",
    date: "2026-03-25 - 2026-03-30",
    startDate: "2026-03-25",
    endDate: "2026-03-30",
    price: "$2000",
    colour: "bg-gray-400",
    category: ["mountains", "exotic-trips"],
    tags: ["unique"],
    description: "Glacial hikes,Northern lights, and Icelandic wilderness.",
    nearestDestinations: ["Vatnajökull Glacier", "Reykjavik", "Golden Circle"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Iceland,glacier",
      "https://source.unsplash.com/600x400/?Iceland,northernlights",
      "https://source.unsplash.com/600x400/?Iceland,wilderness"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guide"],
    packageDetails: "Includes glacier hike, aurora watch, golden circle tour.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 34,
    image: "https://source.unsplash.com/600x400/?Nepal,mountains",
    placeName: "Annapurna Base Camp Trek",
    location: "Nepal",
    date: "2026-04-10 - 2026-04-20",
    startDate: "2026-04-10",
    endDate: "2026-04-20",
    price: "$1400",
    colour: "bg-brown-200",
    category: ["mountains", "adventure-trips"],
    tags: ["trek"],
    description: "Classic trek to Annapurna base camp with tea-house stays and Himalayan vistas.",
    nearestDestinations: ["Pokhara", "Ghorepani", "Poon Hill"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Annapurna,trek",
      "https://source.unsplash.com/600x400/?Nepal,teaHouse",
      "https://source.unsplash.com/600x400/?Himalaya,view"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guide", "Porter"],
    packageDetails: "Includes permits, meals, tea-house lodging, and guide.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 35,
    image: "https://source.unsplash.com/600x400/?Kashmir,mountains",
    placeName: "Kashmir Valley Retreat",
    location: "Kashmir, India",
    date: "2025-09-25 - 2025-10-02",
    startDate: "2025-09-25",
    endDate: "2025-10-02",
    price: "₹35,000",
    colour: "bg-cyan-200",
    category: ["mountains", "cultural-trails"],
    tags: ["scenic,offer"],
    description: "Shikara rides on Dal Lake, houseboats, and mountain views in Kashmir Valley.",
    nearestDestinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Kashmir,dalLake",
      "https://source.unsplash.com/600x400/?Houseboat,Kashmir",
      "https://source.unsplash.com/600x400/?Gulmarg,mountains"
    ],
    facilities: ["Houseboat Stay", "Breakfast", "Shikara Ride", "Guided Tour"],
    packageDetails: "Includes houseboat, shikara, valley tours, and meals.",
    averageRating: 4.7,
    region: "India"
  },
  {
    id: 36,
    image: "https://source.unsplash.com/600x400/?Patagonia,mountains",
    placeName: "Patagonia Wilderness Trek",
    location: "Patagonia, Chile",
    date: "2026-03-01 - 2026-03-10",
    startDate: "2026-03-01",
    endDate: "2026-03-10",
    price: "$2500",
    colour: "bg-teal-200",
    category: ["mountains", "exotic-trips", "adventure-trips"],
    tags: ["challenging"],
    description: "Untamed landscapes, glacial views, and remote trekking in Patagonia.",
    nearestDestinations: ["Torres del Paine", "El Chaltén", "Perito Moreno"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Patagonia,mountains",
      "https://source.unsplash.com/600x400/?Glacier,Chile",
      "https://source.unsplash.com/600x400/?Patagonia,trail"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guide"],
    packageDetails: "Includes multi-day trek, camps, meals, and guide.",
    averageRating: 4.9,
    region: "Out of India"
  },
  // Extra to ensure 40 total (we're at 36) — spread extras across categories
  {
    id: 37,
    image: "https://source.unsplash.com/600x400/?SriLanka,beach",
    placeName: "Sri Lanka Tropical Coast",
    location: "Sri Lanka",
    date: "2026-02-05 - 2026-02-10",
    startDate: "2026-02-05",
    endDate: "2026-02-10",
    price: "$600",
    colour: "bg-yellow-400",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["popular"],
    description: "Golden beaches, surf spots, and rich culture in Sri Lanka’s south coast.",
    nearestDestinations: ["Bentota", "Mirissa", "Galle"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?SriLanka,beach",
      "https://source.unsplash.com/600x400/?Mirissa,waves",
      "https://source.unsplash.com/600x400/?Galle,fort"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Surfing", "Guided Tour"],
    packageDetails: "Includes surf lessons, beach stays, and cultural day trip.",
    averageRating: 4.6,
    region: "Out of India"
  },
  {
    id: 38,
    image: "https://source.unsplash.com/600x400/?Rajasthan,forts",
    placeName: "Rajasthan Cultural Trail",
    location: "Rajasthan, India",
    date: "2025-11-10 - 2025-11-17",
    startDate: "2025-11-10",
    endDate: "2025-11-17",
    price: "₹25,000",
    colour: "bg-orange-300",
    category: ["cultural-trails", "hidden-gems"],
    tags: ["heritage"],
    description: "Explore forts and palaces of Jaipur, Jodhpur, and Udaipur.",
    nearestDestinations: ["Jaipur", "Jodhpur", "Udaipur"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Jaipur,fort",
      "https://source.unsplash.com/600x400/?Jodhpur,palace",
      "https://source.unsplash.com/600x400/?Udaipur,lake"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes palace visits, heritage walk, and meals.",
    averageRating: 4.7,
    region: "India"
  },
  {
    id: 39,
    image: "https://source.unsplash.com/600x400/?Ski,Lake,Tahoe",
    placeName: "Lake Tahoe Ski & Stay",
    location: "USA",
    date: "2026-01-20 - 2026-01-25",
    startDate: "2026-01-20",
    endDate: "2026-01-25",
    price: "$1400",
    colour: "bg-blue-500",
    category: ["mountains", "adventure-trips", "exotic-trips"],
    tags: ["ski"],
    description: "Snowy slopes and pristine lake views at Lake Tahoe for skiing and relaxation.",
    nearestDestinations: ["Heavenly Stat", "Squaw Valley", "Sand Harbor"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?LakeTahoe,ski",
      "https://source.unsplash.com/600x400/?Tahoe,lake",
      "https://source.unsplash.com/600x400/?Tahoe,slopes"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Ski Pass", "Guided Tour"],
    packageDetails: "Includes ski day pass, gondola ride, lakeside stay, and meals.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 40,
    image: "https://source.unsplash.com/600x400/?Nepal,monastery",
    placeName: "Nepal Monastery Trail",
    location: "Nepal",
    date: "2026-05-05 - 2026-05-09",
    startDate: "2026-05-05",
    endDate: "2026-05-09",
    price: "$700",
    colour: "bg-purple-400",
    category: ["cultural-trails", "hidden-gems"],
    tags: ["spiritual"],
    description: "Visit monasteries near Kathmandu and get a peaceful Himalayan cultural experience.",
    nearestDestinations: ["Boudhanath", "Swayambhunath", "Patan"],
    galleryImages: [
      "https://source.unsplash.com/600x400/?Boudhanath,stupa",
      "https://source.unsplash.com/600x400/?Swayambhunath,monkeyTempl",
      "https://source.unsplash.com/600x400/?Nepal,heritage"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Includes temple visits, heritage walk, and meals.",
    averageRating: 4.6,
    region: "Out of India"
  }
];


export const filterBoxData = [
  {
    id: "category",
    label: "Category",
    multiple: true, // allow multiple selection
    options: ["Romantic", "Family Trip", "Adventure", "Solo"],
  },
  {
    id: "destinationType",
    label: "Destination Type",
    multiple: true,
    options: ["Beaches", "Mountains", "Cruise", "City"],
  },
  {
    id: "sortBy",
    label: "Sort By",
    multiple: false, // single selection
    options: ["Price", "Discount", "Rating"],
  },
  {
    id: "tripDuration",
    label: "Trip Duration",
    multiple: true,
    options: ["2 Days", "3 Days", "4 Days", "5+ Days"],
  },
];

export const bookingAccordianData = [
  {
    id: 1,
    question: "Why has the price for the trip changed?",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 2,
    question: "Booking an individual room",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 3,
    question: "Booking an extras",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 4,
    question: "Trip cancelation and refund",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
];
export const paymentAccordianData = [
  {
    id: 1,
    question: "Can I pay by debit card?",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 2,
    question: "Why do i need to make full payment?",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 3,
    question: "Discount and Vouchers",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
];
export const covidAccordianData = [
  {
    id: 1,
    question: "Are the vaccination requirement for the trips?",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 2,
    question: "Do i haveto wear a mask while travelling?",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id: 3,
    question: "Am I eligible for refund if i feel unwell?",
    answer:
      "We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    designation: "Traveler",
    rating: 5,
    message:
      "Absolutely amazing experience! The trip was well-organized, and the guides were super helpful. Can't wait to book my next tour!",
  },
  {
    name: "Sarah Smith",
    designation: "Adventure Enthusiast",
    rating: 4.8,
    message:
      "Loved every bit of the journey! The accommodations were fantastic, and the itinerary was perfectly planned. Highly recommended!",
  },
  {
    name: "Michael Brown",
    designation: "Solo Explorer",
    rating: 5,
    message:
      "One of the best travel experiences I've had! The team took care of everything, making my trip stress-free and enjoyable.",
  },
  {
    name: "Emily Johnson",
    designation: "Travel Blogger",
    rating: 4.7,
    message:
      "Such a wonderful trip! The sightseeing spots were breathtaking, and the entire journey was smooth. Great service!",
  },
  {
    name: "David Wilson",
    designation: "Honeymoon Traveler",
    rating: 4.9,
    message:
      "A dream honeymoon trip! Everything was beautifully planned, from stays to activities. We had an unforgettable experience!",
  },
  {
    name: "Sophia Martinez",
    designation: "Family Traveler",
    rating: 5,
    message:
      "Our family trip was incredible! The kids had a fantastic time, and the entire experience was hassle-free. Thank you for the wonderful memories!",
  },
  {
    name: "James Anderson",
    designation: "Backpacker",
    rating: 4.6,
    message:
      "Budget-friendly yet amazing! The tour had the perfect balance of adventure and relaxation. Will definitely book again!",
  },
  {
    name: "Olivia Taylor",
    designation: "Luxury Traveler",
    rating: 5,
    message:
      "A premium travel experience! Everything was top-notch, from the resorts to the private tours. Worth every penny!",
  },
];
