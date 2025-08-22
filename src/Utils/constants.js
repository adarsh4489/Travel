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
  // Beach Getaway — 6
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1126114956/photo/panoramic-view-of-palolem-beach-in-south-goa.jpg?s=612x612&w=0&k=20&c=oE9WEZaRXvIOhKbQGn6Uo_W5ukNzAseZOGF0JGm_j4o=",
    placeName: "Goa Coastal Escape",
    location: "Goa, India",
    date: "2025-12-10 - 2025-12-15",
    startDate: "2025-12-10",
    endDate: "2025-12-15",
    price: "₹25,000",
    colour: "bg-yellow-200",
    category: ["beach-getaway"],
    tags: ["Popular", "Friends","Romantic","Beaches","India","Most Booked"],
    description: "Relax on sun-kissed beaches of North and South Goa, with nightlife and serenity.",
    nearestDestinations: ["Panaji", "Vagator", "Palolem"],
    galleryImages: [
      "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=",
      "https://media.istockphoto.com/id/503760697/photo/landscape-goa.jpg?s=612x612&w=0&k=20&c=MY7cuDM5KW1fk1FyRuyf7nGrfP1dWOVh9VzXgWg2EJg=",
      "https://media.istockphoto.com/id/518814095/photo/idyllic-beach.jpg?s=612x612&w=0&k=20&c=NDhlKeWzoaWdLz5-VBfSVspnzEzzwIH8W5kcEnRfnZI="
    ],
    facilities: ["Hotel Stay", "Breakfast", "Water Sports"],
    packageDetails: "Guided tours, water sports, nightlife, beachside dining.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 2,
    image: "https://www.shutterstock.com/image-photo/perfect-maldives-paradise-scene-tropical-600nw-2481436177.jpg",
    placeName: "Maldives Luxury Retreat",
    location: "Maldives",
    date: "2026-01-05 - 2026-01-10",
    startDate: "2026-01-05",
    endDate: "2026-01-10",
    price: "$1200",
    colour: "bg-blue-100",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["Luxury", "Romantic","Beaches","Family","International","Limited Offer"],
    description: "Overwater villas and pristine lagoons—ultimate privacy and romance.",
    nearestDestinations: ["Male Atoll", "Ari Atoll", "Baa Atoll"],
    galleryImages: [
      "https://img.freepik.com/premium-vector/beautiful-collection-landscapes-sea-beach-wallpapers_1045923-4747.jpg?semt=ais_hybrid&w=740",
      "https://www.shutterstock.com/shutterstock/videos/3784657523/thumb/1.jpg?ip=x480",
      "https://img.freepik.com/free-photo/nature-landscape-with-starry-clear-sky_23-2151683193.jpg?semt=ais_hybrid&w=740"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Snorkeling", "Spa"],
    packageDetails: "Sea plane transfers, snorkeling, spa, candlelight dinner on beach.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=",
    placeName: "Bali Romantic Shore",
    location: "Bali, Indonesia",
    date: "2025-11-20 - 2025-11-25",
    startDate: "2025-11-20",
    endDate: "2025-11-25",
    price: "$800",
    colour: "bg-pink-100",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["Romantic", "Popular","International","Luxury"],
    description: "Tropical beach retreat with temple visits and rice terrace walks.",
    nearestDestinations: ["Ubud", "Uluwatu", "Seminyak"],
    galleryImages: [
      "https://media.istockphoto.com/id/1485106198/photo/diamond-beach-is-one-of-the-most-visited-beaches-in-nusa-penida-indonesia.jpg?s=612x612&w=0&k=20&c=6Zo4FsY2Q0tGtAuLAbvUFi9oOYoogb_mTfYVIqliJIg=",
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://img.freepik.com/free-photo/young-woman-standing-temple-gates-lempuyang-luhur-temple-bali-indonesia-vintage-tone_335224-369.jpg"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Temple visits, romantic dinner, rice terrace trek, spa.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 4,
    image: "https://source.unsplash.com/600x400?palolem-beach",
    placeName: "Palolem Peaceful Beach",
    location: "Goa, India",
    date: "2025-10-05 - 2025-10-09",
    startDate: "2025-10-05",
    endDate: "2025-10-09",
    price: "₹18,000",
    colour: "bg-green-100",
    category: ["beach-getaway", "hidden-gems"],
    tags: ["Hidden Gem", "Budget"],
    description: "Palm-fringed beach perfect for yoga and downtime.",
    nearestDestinations: ["Canacona", "Agonda", "Cola Beach"],
    galleryImages: [
      "https://source.unsplash.com/600x400?palolem-beach",
      "https://source.unsplash.com/600x400?goa-palm",
      "https://source.unsplash.com/600x400?goa-yoga"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Yoga Session"],
    packageDetails: "Yoga classes, beach walks, seafood dinners.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 5,
    image: "https://www.shutterstock.com/image-photo/view-varkala-beach-cliff-kerala-260nw-294262202.jpg",
    placeName: "Varkala Cliffside Beach",
    location: "Kerala, India",
    date: "2025-09-15 - 2025-09-19",
    startDate: "2025-09-15",
    endDate: "2025-09-19",
    price: "₹22,000",
    colour: "bg-red-100",
    category: ["beach-getaway", "hidden-gems"],
    tags: ["Scenic", "Popular"],
    description: "Cliff-side beach with dramatic views and peaceful vibes.",
    nearestDestinations: ["Kollam", "Valiyaparamba", "Alappuzha"],
    galleryImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwpgxs2L-M92ba5qZT4GGyde1C4LlBqb7WEB4tNdBU5q23jn7oUSzBnjvmzblSFsBtYQ&usqp=CAU",
      "https://media.istockphoto.com/id/2065177274/photo/view-of-varkala-coast-kerala-india.jpg?s=612x612&w=0&k=20&c=wxbXijU96qvGtSxIUYfiogp1epPvhq8t0DCpZoKPNY4=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzYM0oDj8G7rQd1ztyCNhez5qysGIJLmBAoj2L-35ys5Q-0OjHhMuPY_E7ABO8kjvBvI&usqp=CAU"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Cliff walks, Ayurvedic spa, seafood dinners.",
    averageRating: 4.4,
    region: "India"
  },
  {
    id: 6,
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-%20water-jet-skiing-bangaram-Island-lakshadweep-state-hero?qlt=82&ts=1726667570716",
    placeName: "Lakshadweep Coral Retreat",
    location: "Lakshadweep, India",
    date: "2025-12-01 - 2025-12-05",
    startDate: "2025-12-01",
    endDate: "2025-12-05",
    price: "₹50,000",
    colour: "bg-teal-100",
    category: ["beach-getaway", "exotic-trips"],
    tags: ["Nature", "Early Bird"],
    description: "Pristine coral reefs and turquoise lagoons—peaceful diving spot.",
    nearestDestinations: ["Agatti", "Bangaram", "Minicoy"],
    galleryImages: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-%20water-jet-skiing-bangaram-Island-lakshadweep-state-hero?qlt=82&ts=1726667570716",
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-%20water-jet-skiing-bangaram-Island-lakshadweep-state-hero?qlt=82&ts=1726667570716",
      "https://media.istockphoto.com/id/1224349638/photo/coconut-fringed-beach.jpg?s=612x612&w=0&k=20&c=26FO8pa5zcKQdqjhitHZMAgCmF_B-wDD6MDV93v5j6o="
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour", "Snorkeling"],
    packageDetails: "Boat trips, snorkeling, beach stays, local cuisine.",
    averageRating: 4.7,
    region: "India"
  },

  // Adventure Trips — 6
  {
    id: 7,
    image: "https://www.shutterstock.com/image-photo/pristine-view-kedarnath-mountain-peak-260nw-2615571965.jpg",
    placeName: "Kedarnath Trek Adventure",
    location: "Uttarakhand, India",
    date: "2026-05-01 - 2026-05-07",
    startDate: "2026-05-01",
    endDate: "2026-05-07",
    price: "₹30,000",
    colour: "bg-gray-200",
    category: ["adventure-trips", "cultural-trails"],
    tags: ["Pilgrimage", "Popular"],
    description: "Trek to sacred Kedarnath in the Himalayas.",
    nearestDestinations: ["Gaurikund", "Sonprayag", "Rudraprayag"],
    galleryImages: [
      "https://www.shutterstock.com/image-photo/pristine-view-kedarnath-mountain-peak-260nw-2615571965.jpg",
      "https://www.shutterstock.com/image-photo/kedarnath-uttarakhand-india-23102020-himalayan-260nw-1927801253.jpg",
      "https://www.shutterstock.com/image-photo/kedarnath-uttarakhand-india-october16th-2021-260nw-2329685069.jpg"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guided Tour"],
    packageDetails: "17 km trek, guide, camp, meals, temple darshan.",
    averageRating: 4.8,
    region: "India"
  },
  {
    id: 8,
    image: "https://media.istockphoto.com/id/1134669000/photo/young-people-enjoyinh-whitewater-river-rafting-in-river-ganges-rishikesh-india.jpg?s=612x612&w=0&k=20&c=5ARzZ5rt9ROM_XFXUkHqSpqxqwGRRm25Rtpbj9fHzjo=",
    placeName: "Rishikesh River Rush",
    location: "Rishikesh, India",
    date: "2025-08-10 - 2025-08-14",
    startDate: "2025-08-10",
    endDate: "2025-08-14",
    price: "₹12,000",
    colour: "bg-blue-200",
    category: ["adventure-trips", "cultural-trails"],
    tags: ["Adventure", "Youth"],
    description: "Rafting, bungee, zipline, and yoga in Rishikesh.",
    nearestDestinations: ["Lakshman Jhula", "Ram Jhula", "Neelkanth Temple"],
    galleryImages: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/laxman%20jhula-rishikesh-uttrakhand-hero?qlt=82&ts=1726646312953",
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-triveni-ghat-rishikesh-uttarakhand-2-city-hero?qlt=82&ts=1726646286991",
      "https://www.shutterstock.com/shutterstock/videos/3559329119/thumb/1.jpg?ip=x480"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Rafting Grades I–IV, Asia’s longest zipline, bungee, yoga.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 9,
    image: "https://media.istockphoto.com/id/1135087819/photo/young-skier-skiing-at-zermatt-ski-resort-switzerland.jpg?s=612x612&w=0&k=20&c=621xnjzv0CBPMhyZBd9XJeUY1d7c14t1hoD4tn8p4Qk=",
    placeName: "Swiss Alps Skiing",
    location: "Switzerland",
    date: "2026-02-01 - 2026-02-07",
    startDate: "2026-02-01",
    endDate: "2026-02-07",
    price: "$2000",
    colour: "bg-white",
    category: ["adventure-trips", "exotic-trips"],
    tags: ["Winter", "Luxury"],
    description: "Skiing amid Swiss Alpine scenery.",
    nearestDestinations: ["Zermatt", "Interlaken", "Jungfrau"],
    galleryImages: [
      "https://www.shutterstock.com/image-photo/amazing-beautiful-view-gornergrat-zermatt-260nw-1487365274.jpg",
      "https://www.shutterstock.com/image-photo/french-alps-winter-famous-ski-260nw-2551856921.jpg",
      "https://www.shutterstock.com/image-photo/aerial-view-beautiful-snowcovered-alps-600nw-2603051461.jpg"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Ski Pass", "Guided Tour"],
    packageDetails: "Ski passes, gear rental, chalet stay, mountain train.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 10,
    image: "https://plus.unsplash.com/premium_photo-1697729944636-0b630fe30ad6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlcmVzdCUyMGJhc2UlMjBjYW1wfGVufDB8fDB8fHww",
    placeName: "Everest Base Camp Trek",
    location: "Nepal",
    date: "2026-04-01 - 2026-04-15",
    startDate: "2026-04-01",
    endDate: "2026-04-15",
    price: "$1500",
    colour: "bg-gray-300",
    category: ["adventure-trips", "mountains"],
    tags: ["Challenging", "Solo"],
    description: "Trek to the base of Everest through Sherpa villages.",
    nearestDestinations: ["Namche Bazaar", "Tengboche", "Lukla"],
    galleryImages: [
      "https://plus.unsplash.com/premium_photo-1697729944636-0b630fe30ad6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlcmVzdCUyMGJhc2UlMjBjYW1wfGVufDB8fDB8fHww",
      "https://www.shutterstock.com/image-photo/trekkers-posing-everest-base-camp-260nw-2463964131.jpg",
      "https://www.shutterstock.com/image-photo/trekkers-posing-everest-base-camp-260nw-2463964131.jpg"
    ],
    facilities: ["Camp Stay", "Breakfast", "Porter", "Guide"],
    packageDetails: "Permits, guide, porter, meals, tea-house stays.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 11,
    image: "https://www.shutterstock.com/image-photo/scene-sinhagad-fort-near-pune-260nw-2461714577.jpg",
    placeName: "Sinhagad Fort Trek",
    location: "Maharashtra, India",
    date: "2025-10-20 - 2025-10-22",
    startDate: "2025-10-20",
    endDate: "2025-10-22",
    price: "₹6,000",
    colour: "bg-red-200",
    category: ["adventure-trips", "hidden-gems"],
    tags: ["Budget", "History"],
    description: "Short trek to historic Sinhagad Fort with Western Ghats views.",
    nearestDestinations: ["Pune", "Lion's Point", "Tikona Fort"],
    galleryImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EN_9RhSOjAbucbnSH_6_XXTdUi-PnCFSag&s",
      "https://www.shutterstock.com/image-photo/sinhagad-fort-pune-260nw-788932003.jpg",
      "https://www.shutterstock.com/image-photo/beautiful-view-sinhagad-fort-260nw-2520068497.jpg"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guide"],
    packageDetails: "Drive from Pune, guided trek, meals included.",
    averageRating: 4.3,
    region: "India"
  },
  {
    id: 12,
    image: "https://source.unsplash.com/600x400?bali-biking",
    placeName: "Bali Volcano Bike Tour",
    location: "Bali, Indonesia",
    date: "2026-03-10 - 2026-03-12",
    startDate: "2026-03-10",
    endDate: "2026-03-12",
    price: "$500",
    colour: "bg-orange-100",
    category: ["adventure-trips", "exotic-trips"],
    tags: ["Adventure", "Group"],
    description: "Mountain biking near Mount Batur at sunrise.",
    nearestDestinations: ["Ubud", "Mount Batur", "Tegalalang"],
    galleryImages: [
      "https://source.unsplash.com/600x400?bali-biking",
      "https://source.unsplash.com/600x400?tegalalang-terrace",
      "https://source.unsplash.com/600x400?mount-batur"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guide", "Bike"],
    packageDetails: "Bike rental, sunrise ride, tour guide, hotel stay.",
    averageRating: 4.7,
    region: "Out of India"
  },

  // Cultural Trails — 6
  {
    id: 13,
    image: "https://source.unsplash.com/600x400?ayodhya-temple",
    placeName: "Ayodhya Ram Mandir Pilgrimage",
    location: "Ayodhya, India",
    date: "2025-11-01 - 2025-11-03",
    startDate: "2025-11-01",
    endDate: "2025-11-03",
    price: "₹8,000",
    colour: "bg-gold-100",
    category: ["cultural-trails", "hidden-gems"],
    tags: ["Pilgrimage", "Budget"],
    description: "Visit the newly inaugurated Ram Mandir and sacred river sites.",
    nearestDestinations: ["Sarayu River", "Hanumangarhi", "Nagarjuna Sagar"],
    galleryImages: [
      "https://img.freepik.com/free-photo/crowded-scene-indian-city_23-2151765561.jpg?semt=ais_hybrid&w=740&q=80",
      "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823141.jpg?semt=ais_hybrid&w=740",
      "https://source.unsplash.com/600x400?ayodhya-heritage"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Darshan, walking tour, riverside aarti, meals included.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 14,
    image: "https://source.unsplash.com/600x400?varanasi-ghat",
    placeName: "Varanasi Spiritual Trail",
    location: "Varanasi, India",
    date: "2025-12-20 - 2025-12-23",
    startDate: "2025-12-20",
    endDate: "2025-12-23",
    price: "₹12,000",
    colour: "bg-saffron-100",
    category: ["cultural-trails", "hidden-gems"],
    tags: ["Heritage", "Popular"],
    description: "Walk along ghats, attend aarti, explore temples and alleys.",
    nearestDestinations: ["Dashashwamedh Ghat", "Sarnath", "Assi Ghat"],
    galleryImages: [
      "https://source.unsplash.com/600x400?varanasi-aarti",
      "https://source.unsplash.com/600x400?varanasi-ghats",
      "https://source.unsplash.com/600x400?sarnath-temple"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Aarti ceremony, boat ride, temple tour, meals.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 15,
    image: "https://source.unsplash.com/600x400?rome-ancient",
    placeName: "Rome Ancient Wonders",
    location: "Rome, Italy",
    date: "2026-06-10 - 2026-06-15",
    startDate: "2026-06-10",
    endDate: "2026-06-15",
    price: "$1500",
    colour: "bg-beige-100",
    category: ["cultural-trails", "exotic-trips"],
    tags: ["History", "Luxury"],
    description: "Colosseum, Vatican, and ancient ruins in Rome.",
    nearestDestinations: ["Colosseum", "Vatican", "Pantheon"],
    galleryImages: [
      "https://source.unsplash.com/600x400?rome-colosseum",
      "https://source.unsplash.com/600x400?vatican-city",
      "https://source.unsplash.com/600x400?rome-ruins"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Walking tours, museum entry, local cuisine.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 16,
    image: "https://source.unsplash.com/600x400?kyoto-temple",
    placeName: "Kyoto Cultural Heritage",
    location: "Kyoto, Japan",
    date: "2026-04-20 - 2026-04-25",
    startDate: "2026-04-20",
    endDate: "2026-04-25",
    price: "$1300",
    colour: "bg-green-200",
    category: ["cultural-trails", "exotic-trips"],
    tags: ["Heritage", "Peace"],
    description: "Temples, tea ceremonies, and geisha districts in Kyoto.",
    nearestDestinations: ["Fushimi Inari", "Gion", "Kinkaku-ji"],
    galleryImages: [
      "https://source.unsplash.com/600x400?kyoto-temple",
      "https://source.unsplash.com/600x400?kyoto-geisha",
      "https://source.unsplash.com/600x400?kyoto-architecture"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Temple visits, tea ceremony, walking tour, meals.",
    averageRating: 4.9,
    region: "Out of India"
  },
  {
    id: 17,
    image: "https://source.unsplash.com/600x400?delhi-heritage",
    placeName: "Delhi Heritage Walk",
    location: "Delhi, India",
    date: "2025-09-12 - 2025-09-14",
    startDate: "2025-09-12",
    endDate: "2025-09-14",
    price: "₹7,000",
    colour: "bg-amber-100",
    category: ["cultural-trails"],
    tags: ["Budget", "City"],
    description: "Heritage walk through Red Fort, Humayun's Tomb, street food.",
    nearestDestinations: ["Red Fort", "Jama Masjid", "Chandni Chowk"],
    galleryImages: [
      "https://source.unsplash.com/600x400?delhi-fort",
      "https://source.unsplash.com/600x400?delhi-market",
      "https://source.unsplash.com/600x400?delhi-streetfood"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Heritage sites, monument entries, local food tasting.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 18,
    image: "https://source.unsplash.com/600x400?istanbul-mosque",
    placeName: "Istanbul Cultural Mosaic",
    location: "Istanbul, Turkey",
    date: "2026-05-15 - 2026-05-20",
    startDate: "2026-05-15",
    endDate: "2026-05-20",
    price: "$1100",
    colour: "bg-purple-100",
    category: ["cultural-trails", "exotic-trips"],
    tags: ["History", "Popular"],
    description: "Hagia Sophia, Blue Mosque, and bazaars melding East and West.",
    nearestDestinations: ["Hagia Sophia", "Grand Bazaar", "Spice Market"],
    galleryImages: [
      "https://source.unsplash.com/600x400?istanbul-mosque",
      "https://source.unsplash.com/600x400?istanbul-bazaar",
      "https://source.unsplash.com/600x400?istanbul-heritage"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Monument entries, guided tours, local cuisine.",
    averageRating: 4.7,
    region: "Out of India"
  },

  // Exotic Trips — 6
  {
    id: 19,
    image: "https://source.unsplash.com/600x400?komodo-dragon",
    placeName: "Labuan Bajo & Komodo",
    location: "Indonesia",
    date: "2026-07-01 - 2026-07-07",
    startDate: "2026-07-01",
    endDate: "2026-07-07",
    price: "$900",
    colour: "bg-cyan-100",
    category: ["exotic-trips", "adventure-trips"],
    tags: ["Unique", "Popular"],
    description: "Komodo dragons and less-crowded Indonesian landscapes.",
    nearestDestinations: ["Komodo National Park", "Rinca Island", "Padar Island"],
    galleryImages: [
      "https://source.unsplash.com/600x400?komodo-dragon",
      "https://source.unsplash.com/600x400?labuan-bajo",
      "https://source.unsplash.com/600x400?indonesia-island"
    ],
    facilities: ["Boat Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Boat cruise, Komodo trek, snorkeling.",
    averageRating: 4.7,
    region: "Out of India"
  },
  {
    id: 20,
    image: "https://source.unsplash.com/600x400?andaman-scuba",
    placeName: "Andaman Scuba & Reef",
    location: "Andaman & Nicobar, India",
    date: "2025-11-10 - 2025-11-15",
    startDate: "2025-11-10",
    endDate: "2025-11-15",
    price: "₹45,000",
    colour: "bg-blue-300",
    category: ["exotic-trips", "adventure-trips", "beach-getaway"],
    tags: ["Scuba", "Early Bird"],
    description: "Coral reefs and rich marine life in clear Andaman waters.",
    nearestDestinations: ["Havelock Island", "Neil Island", "Ross Island"],
    galleryImages: [
      "https://source.unsplash.com/600x400?andaman-scuba",
      "https://source.unsplash.com/600x400?andaman-reef",
      "https://source.unsplash.com/600x400?andaman-marine"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Scuba Diving", "Boat Trips"],
    packageDetails: "Scuba sessions, snorkeling, island hopping, meals.",
    averageRating: 4.8,
    region: "India"
  },
  {
    id: 21,
    image: "https://source.unsplash.com/600x400?mauritius-beach",
    placeName: "Mauritius Island Escape",
    location: "Mauritius",
    date: "2026-02-20 - 2026-02-25",
    startDate: "2026-02-20",
    endDate: "2026-02-25",
    price: "$1100",
    colour: "bg-lightblue-100",
    category: ["exotic-trips", "beach-getaway"],
    tags: ["Romantic", "Luxury"],
    description: "Beaches, waterfalls, and serene tropical vibes.",
    nearestDestinations: ["Port Louis", "Chamarel", "Le Morne"],
    galleryImages: [
      "https://source.unsplash.com/600x400?mauritius-beach",
      "https://source.unsplash.com/600x400?mauritius-waterfall",
      "https://source.unsplash.com/600x400?mauritius-island"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Island tours, waterfalls, beach dinners, cultural visits.",
    averageRating: 4.7,
    region: "Out of India"
  },
  {
    id: 22,
    image: "https://source.unsplash.com/600x400?thailand-island",
    placeName: "Thailand Island Hopping",
    location: "Thailand",
    date: "2026-03-05 - 2026-03-10",
    startDate: "2026-03-05",
    endDate: "2026-03-10",
    price: "$700",
    colour: "bg-green-300",
    category: ["exotic-trips", "beach-getaway", "adventure-trips"],
    tags: ["Offer", "Group"],
    description: "Crisp seas, snorkeling, and tropical island hopping.",
    nearestDestinations: ["Phuket", "Phi Phi Islands", "Krabi"],
    galleryImages: [
      "https://source.unsplash.com/600x400?thailand-island",
      "https://source.unsplash.com/600x400?phiphi-beach",
      "https://source.unsplash.com/600x400?krabi-sea"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Boat Tours", "Snorkeling"],
    packageDetails: "Boat hop, snorkeling, beach stays, island meals.",
    averageRating: 4.6,
    region: "Out of India"
  },
  {
    id: 23,
    image: "https://source.unsplash.com/600x400?seychelles-beach",
    placeName: "Seychelles Paradise",
    location: "Seychelles",
    date: "2026-04-01 - 2026-04-06",
    startDate: "2026-04-01",
    endDate: "2026-04-06",
    price: "$1300",
    colour: "bg-pink-200",
    category: ["exotic-trips", "beach-getaway"],
    tags: ["New", "Scenic"],
    description: "White-sand beaches, tropical forests, reef-protected lagoons.",
    nearestDestinations: ["Mahe", "Praslin", "La Digue"],
    galleryImages: [
      "https://source.unsplash.com/600x400?seychelles-beach",
      "https://source.unsplash.com/600x400?seychelles-island",
      "https://source.unsplash.com/600x400?seychelles-lagoon"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Island tours, beach dinners, nature walks, spa.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 24,
    image: "https://source.unsplash.com/600x400?dubai-desert",
    placeName: "Dubai City & Desert",
    location: "Dubai, UAE",
    date: "2026-01-10 - 2026-01-15",
    startDate: "2026-01-10",
    endDate: "2026-01-15",
    price: "$900",
    colour: "bg-yellow-300",
    category: ["exotic-trips", "cultural-trails"],
    tags: ["City", "Popular"],
    description: "Skyline views, desert safari, and Arabian culture.",
    nearestDestinations: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
    galleryImages: [
      "https://source.unsplash.com/600x400?dubai-city",
      "https://source.unsplash.com/600x400?dubai-desert",
      "https://source.unsplash.com/600x400?burj-khalifa"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour", "Safari"],
    packageDetails: "City tour, desert safari, dune dinner, mall visit.",
    averageRating: 4.5,
    region: "Out of India"
  },

  // Hidden Gems — 6
  {
    id: 25,
    image: "https://source.unsplash.com/600x400?butterfly-beach-goa",
    placeName: "Butterfly Beach Goa",
    location: "Goa, India",
    date: "2025-10-10 - 2025-10-12",
    startDate: "2025-10-10",
    endDate: "2025-10-12",
    price: "₹12,000",
    colour: "bg-rose-100",
    category: ["hidden-gems", "beach-getaway"],
    tags: ["Secluded", "New"],
    description: "Secluded beach only accessible via boat or trek.",
    nearestDestinations: ["Palolem", "Agonda", "Cola Beach"],
    galleryImages: [
      "https://source.unsplash.com/600x400?butterfly-beach",
      "https://source.unsplash.com/600x400?secluded-goa",
      "https://source.unsplash.com/600x400?goa-hidden"
    ],
    facilities: ["Camp Stay", "Breakfast", "Boat Transfer"],
    packageDetails: "Boat, camping, beach time, meals.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 26,
    image: "https://source.unsplash.com/600x400?gokarna-om-beach",
    placeName: "Gokarna Om Beach Retreat",
    location: "Karnataka, India",
    date: "2025-11-05 - 2025-11-08",
    startDate: "2025-11-05",
    endDate: "2025-11-08",
    price: "₹14,000",
    colour: "bg-orange-200",
    category: ["hidden-gems", "beach-getaway"],
    tags: ["Spiritual", "Budget"],
    description: "Cliff-side treks and peaceful spiritual beach.",
    nearestDestinations: ["Gokarna Temple", "Half Moon Beach", "Paradise Beach"],
    galleryImages: [
      "https://source.unsplash.com/600x400?gokarna-beach",
      "https://source.unsplash.com/600x400?om-beach-cliff",
      "https://source.unsplash.com/600x400?karnataka-coast"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Walk"],
    packageDetails: "Trek, beach time, local food, stay.",
    averageRating: 4.5,
    region: "India"
  },
  {
    id: 27,
    image: "https://source.unsplash.com/600x400?spiti-valley",
    placeName: "Spiti Valley Offbeat",
    location: "Spiti Valley, India",
    date: "2026-06-01 - 2026-06-07",
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    price: "₹35,000",
    colour: "bg-blue-400",
    category: ["hidden-gems", "mountains", "adventure-trips"],
    tags: ["Offbeat", "Adventure"],
    description: "High-altitude valley, sparse population, stark beauty.",
    nearestDestinations: ["Kaza", "Key Monastery", "Chandratal Lake"],
    galleryImages: [
      "https://source.unsplash.com/600x400?spiti-valley",
      "https://source.unsplash.com/600x400?spiti-monastery",
      "https://source.unsplash.com/600x400?spiti-landscape"
    ],
    facilities: ["Camp Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Road trip, campsite, monastery visits, meals.",
    averageRating: 4.6,
    region: "India"
  },
  {
    id: 28,
    image: "https://source.unsplash.com/600x400?bhutan-landscape",
    placeName: "Bhutan Offbeat Himalayan",
    location: "Bhutan",
    date: "2026-03-15 - 2026-03-20",
    startDate: "2026-03-15",
    endDate: "2026-03-20",
    price: "$800",
    colour: "bg-green-400",
    category: ["hidden-gems", "cultural-trails"],
    tags: ["Serene", "New"],
    description: "Peaceful Himalayan kingdom with monasteries and pristine nature.",
    nearestDestinations: ["Paro", "Thimphu", "Tiger's Nest"],
    galleryImages: [
      "https://source.unsplash.com/600x400?bhutan-monastery",
      "https://source.unsplash.com/600x400?bhutan-landscape",
      "https://source.unsplash.com/600x400?bhutan-trek"
    ],
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],
    packageDetails: "Temple visits, mountain walks, cultural tours.",
    averageRating: 4.8,
    region: "Out of India"
  },
  {
    id: 29,
    image: "https://source.unsplash.com/600x400?little-andaman",
    placeName: "Little Andaman Explorer",
    location: "Andaman & Nicobar, India",
    date: "2026-02-10 - 2026-02-14",
    startDate: "2026-02-10",
    endDate: "2026-02-14",
    price: "₹40,000",
    colour: "bg-purple-200",  
    category: ["hidden-gems", "adventure-trips", "exotic-trips"],
    tags: ["Undiscovered", "Family"],
    description: "Remote island with waterfalls, jungles, untouched beaches.",  
    nearestDestinations: ["Havelock", "Neil Island", "Ross Island"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?little-andaman",  
      "https://source.unsplash.com/600x400?andaman-waterfall",  
      "https://source.unsplash.com/600x400?andaman-jungle"  
    ],  
    facilities: ["Camp Stay", "Breakfast", "Boat Transfer", "Guided Tour"],  
    packageDetails: "Boat ride, waterfall trek, jungle walk, beach time.",  
    averageRating: 4.7,  
    region: "India"  
  },  
  {  
    id: 30,  
    image: "https://source.unsplash.com/600x400?kaziranga-elephant",  
    placeName: "Kaziranga Wilderness Lodge",  
    location: "Assam, India",  
    date: "2026-01-05 - 2026-01-09",  
    startDate: "2026-01-05",  
    endDate: "2026-01-09",  
    price: "₹28,000",  
    colour: "bg-lime-100",  
    category: ["hidden-gems", "cultural-trails"],  
    tags: ["Wildlife", "Popular"],  
    description: "Stay near Kaziranga NP with wildlife safaris and lodge comfort.",  
    nearestDestinations: ["Kaziranga NP", "Rhinoceros Sanctuary", "Assam Tea Gardens"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?kaziranga-elephant",  
      "https://source.unsplash.com/600x400?kaziranga-lodge",  
      "https://source.unsplash.com/600x400?assam-tea"  
    ],  
    facilities: ["Lodge Stay", "Breakfast", "Safari", "Guide"],  
    packageDetails: "Lodge stay, wildlife safaris, tea garden tour, meals.",  
    averageRating: 4.6,  
    region: "India"  
  },  

  // Mountains — 6  
  {  
    id: 31,  
    image: "https://source.unsplash.com/600x400?swiss-alps",  
    placeName: "Swiss Alpine Serenity",  
    location: "Switzerland",  
    date: "2026-07-10 - 2026-07-15",  
    startDate: "2026-07-10",  
    endDate: "2026-07-15",  
    price: "$1800",  
    colour: "bg-white",  
    category: ["mountains", "exotic-trips"],  
    tags: ["Scenic", "Luxury"],  
    description: "Alpine lakes, villages and cable cars in the Swiss Alps.",  
    nearestDestinations: ["Matterhorn", "Lauterbrunnen", "Zermatt"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?swiss-alps",  
      "https://source.unsplash.com/600x400?switzerland-lake",  
      "https://source.unsplash.com/600x400?swiss-cablecar"  
    ],  
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],  
    packageDetails: "Cable car rides, village tours, lake cruise, meals.",  
    averageRating: 4.9,  
    region: "Out of India"  
  },  
  {  
    id: 32,  
    image: "https://source.unsplash.com/600x400?himachal-manali",  
    placeName: "Himachal Hillstation Circuit",  
    location: "Himachal Pradesh, India",  
    date: "2026-05-20 - 2026-05-27",  
    startDate: "2026-05-20",  
    endDate: "2026-05-27",  
    price: "₹28,000",  
    colour: "bg-blue-100",  
    category: ["mountains", "hidden-gems"],  
    tags: ["Scenic", "Family"],  
    description: "Explore Manali, Kasol, Kullu with tranquil valleys.",  
    nearestDestinations: ["Manali", "Kasol", "Kullu"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?himachal-manali",  
      "https://source.unsplash.com/600x400?kasol-valley",  
      "https://source.unsplash.com/600x400?kullu-landscape"  
    ],  
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],  
    packageDetails: "Hillstation stays, village walks, tours.",  
    averageRating: 4.7,  
    region: "India"  
  },  
  {  
    id: 33,  
    image: "https://source.unsplash.com/600x400?iceland-glacier",  
    placeName: "Iceland Glacier Hike",  
    location: "Iceland",  
    date: "2026-03-25 - 2026-03-30",  
    startDate: "2026-03-25",  
    endDate: "2026-03-30",  
    price: "$2000",  
    colour: "bg-gray-400",  
    category: ["mountains", "exotic-trips"],  
    tags: ["Unique", "Adventure"],  
    description: "Glacial hikes, Northern Lights, Icelandic wilderness.",  
    nearestDestinations: ["Vatnajökull Glacier", "Reykjavik", "Golden Circle"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?iceland-glacier",  
      "https://source.unsplash.com/600x400?iceland-northernlights",  
      "https://source.unsplash.com/600x400?iceland-wilderness"  
    ],  
    facilities: ["Camp Stay", "Breakfast", "Guide"],  
    packageDetails: "Glacier hikes, aurora watching, Golden Circle tour.",  
    averageRating: 4.8,  
    region: "Out of India"  
  },  
  {  
    id: 34,  
    image: "https://source.unsplash.com/600x400?annapurna-trek",  
    placeName: "Annapurna Base Camp Trek",  
    location: "Nepal",  
    date: "2026-04-10 - 2026-04-20",  
    startDate: "2026-04-10",  
    endDate: "2026-04-20",  
    price: "$1400",  
    colour: "bg-brown-200",  
    category: ["mountains", "adventure-trips"],  
    tags: ["Trek", "Challenging"],  
    description: "Classic trek to Annapurna Base Camp with Himalayan views.",  
    nearestDestinations: ["Pokhara", "Ghorepani", "Poon Hill"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?annapurna-trek",  
      "https://source.unsplash.com/600x400?nepal-teahouse",  
      "https://source.unsplash.com/600x400?himalaya-view"  
    ],  
    facilities: ["Camp Stay", "Breakfast", "Guide", "Porter"],  
    packageDetails: "Permits, meals, lodging, guide, porter.",  
    averageRating: 4.8,  
    region: "Out of India"  
  },  
  {  
    id: 35,  
    image: "https://source.unsplash.com/600x400?kashmir-houseboat",  
    placeName: "Kashmir Valley Retreat",  
    location: "Kashmir, India",  
    date: "2025-09-25 - 2025-10-02",  
    startDate: "2025-09-25",  
    endDate: "2025-10-02",  
    price: "₹35,000",  
    colour: "bg-cyan-200",  
    category: ["mountains", "cultural-trails"],  
    tags: ["Scenic", "Romantic"],  
    description: "Houseboats, shikara rides, and mountain views in Kashmir Valley.",  
    nearestDestinations: ["Srinagar", "Gulmarg", "Pahalgam"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?kashmir-dal-lake",  
      "https://source.unsplash.com/600x400?houseboat-kashmir",  
      "https://source.unsplash.com/600x400?gulmarg-mountains"  
    ],  
    facilities: ["Houseboat Stay", "Breakfast", "Shikara Ride", "Guided Tour"],  
    packageDetails: "Houseboat stay, shikara ride, valley tours, meals.",  
    averageRating: 4.7,  
    region: "India"  
  },  
  {  
    id: 36,  
    image: "https://source.unsplash.com/600x400?patagonia-trek",  
    placeName: "Patagonia Wilderness Trek",  
    location: "Patagonia, Chile",  
    date: "2026-03-01 - 2026-03-10",  
    startDate: "2026-03-01",  
    endDate: "2026-03-10",  
    price: "$2500",  
    colour: "bg-teal-200",  
    category: ["mountains", "exotic-trips", "adventure-trips"],  
    tags: ["Challenging", "Rare"],  
    description: "Remote treks, glaciers, and untamed landscapes in Patagonia.",  
    nearestDestinations: ["Torres del Paine", "El Chaltén", "Perito Moreno"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?patagonia-mountains",  
      "https://source.unsplash.com/600x400?glacier-chile",  
      "https://source.unsplash.com/600x400?patagonia-trail"  
    ],  
    facilities: ["Camp Stay", "Breakfast", "Guide"],  
    packageDetails: "Multi-day trek, camps, guide, meals.",  
    averageRating: 4.9,  
    region: "Out of India"  
  },  

  // Extras to reach 40 — 4 more spread across categories  
  {  
    id: 37,  
    image: "https://source.unsplash.com/600x400?sri-lanka-beach",  
    placeName: "Sri Lanka Tropical Coast",  
    location: "Sri Lanka",  
    date: "2026-02-05 - 2026-02-10",  
    startDate: "2026-02-05",  
    endDate: "2026-02-10",  
    price: "$600",  
    colour: "bg-yellow-400",  
    category: ["beach-getaway", "exotic-trips"],  
    tags: ["Budget", "New"],  
    description: "Surf spots and golden beaches on Sri Lanka’s south coast.",  
    nearestDestinations: ["Bentota", "Mirissa", "Galle"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?sri-lanka-beach",  
      "https://source.unsplash.com/600x400?mirissa-waves",  
      "https://source.unsplash.com/600x400?galle-fort"  
    ],  
    facilities: ["Hotel Stay", "Breakfast", "Surfing", "Guided Tour"],  
    packageDetails: "Surf lessons, beach stays, cultural day trip.",  
    averageRating: 4.6,  
    region: "Out of India"  
  },  
  {  
    id: 38,  
    image: "https://source.unsplash.com/600x400?rajasthan-fort",  
    placeName: "Rajasthan Cultural Trail",  
    location: "Rajasthan, India",  
    date: "2025-11-10 - 2025-11-17",  
    startDate: "2025-11-10",  
    endDate: "2025-11-17",  
    price: "₹25,000",  
    colour: "bg-orange-300",  
    category: ["cultural-trails", "hidden-gems"],  
    tags: ["Heritage", "Family"],  
    description: "Forts and palaces of Jaipur, Jodhpur, and Udaipur.",  
    nearestDestinations: ["Jaipur", "Jodhpur", "Udaipur"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?jaipur-fort",  
      "https://source.unsplash.com/600x400?jodhpur-palace",  
      "https://source.unsplash.com/600x400?udaipur-lake"  
    ],  
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],  
    packageDetails: "Palace visits, heritage walks, meals.",  
    averageRating: 4.7,  
    region: "India"  
  },  
  {  
    id: 39,  
    image: "https://source.unsplash.com/600x400?lake-tahoe-ski",  
    placeName: "Lake Tahoe Ski & Stay",  
    location: "USA",  
    date: "2026-01-20 - 2026-01-25",  
    startDate: "2026-01-20",  
    endDate: "2026-01-25",  
    price: "$1400",  
    colour: "bg-blue-500",  
    category: ["mountains", "adventure-trips", "exotic-trips"],  
    tags: ["Ski", "Popular"],  
    description: "Snow slopes and lake views at Lake Tahoe for skiing and chill time.",  
    nearestDestinations: ["Heavenly Stat", "Squaw Valley", "Sand Harbor"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?lake-tahoe-ski",  
      "https://source.unsplash.com/600x400?tahoe-lake",  
      "https://source.unsplash.com/600x400?tahoe-slopes"  
    ],  
    facilities: ["Hotel Stay", "Breakfast", "Ski Pass", "Guided Tour"],  
    packageDetails: "Ski day pass, gondola ride, lakeside stay, meals.",  
    averageRating: 4.8,  
    region: "Out of India"  
  },  
  {  
    id: 40,  
    image: "https://source.unsplash.com/600x400?nepal-monastery",  
    placeName: "Nepal Monastery Trail",  
    location: "Nepal",  
    date: "2026-05-05 - 2026-05-09",  
    startDate: "2026-05-05",  
    endDate: "2026-05-09",  
    price: "$700",  
    colour: "bg-purple-400",  
    category: ["cultural-trails", "hidden-gems"],  
    tags: ["Spiritual", "New"],  
    description: "Monasteries near Kathmandu—a peaceful Himalayan cultural experience.",  
    nearestDestinations: ["Boudhanath", "Swayambhunath", "Patan"],  
    galleryImages: [  
      "https://source.unsplash.com/600x400?boudhanath-stupa",  
      "https://source.unsplash.com/600x400?swayambhunath-monkeytemple",  
      "https://source.unsplash.com/600x400?nepal-heritage"  
    ],  
    facilities: ["Hotel Stay", "Breakfast", "Guided Tour"],  
    packageDetails: "Temple visits, heritage walk, meals.",  
    averageRating: 4.6,  
    region: "Out of India"  
  }  
];



export const filterBoxData = [
  {
    id: "category",
    label: "Trip Type",
    multiple: true,
    options: [
      "Romantic",
      "Family",
      "Adventure",
      "Solo",
      "Group",
      "Luxury",
      "Budget",
    ],
  },
  {
    id: "destination",
    label: "Destination Style",
    multiple: true,
    options: [
      "Mountains",
      "Beaches",
      "Cities",
      "Forests",
      "Desert",
      "Cruise",
      "Snow",
    ],
  },
  {
    id: "location",
    label: "Location",
    multiple: true,
    options: [
      "India",
      "International",
    ],
  },
  {
    id: "duration",
    label: "Duration",
    multiple: true,
    options: [
      "Weekend (2-3 Days)",
      "Short (4-6 Days)",
      "Week-long (7+ Days)",
    ],
  },
  {
    id: "tags",
    label: "Special Tags",
    multiple: true,
    options: [
      "Most Booked",
      "Popular",
      "New",
      "Limited Offer",
      "Early Bird",
    ],
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

// Utils/constants.js

export const blogData = [
  {
    id: 1,
    title: "10 Breathtaking Waterfalls You Must Visit",
    description: "Explore some of the most stunning waterfalls that will leave you in awe...",
    content: "Here goes the full blog content with detailed descriptions, stories, and travel tips...",
    slug: "breathtaking-waterfalls",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWxalYFfzdvD0ZHHeHgSLbISo_vuZZNdbjlMaZzwTJtISisMnq6SJs-mFBatcrg-KABY&usqp=CAU",
    image2: "https://media.istockphoto.com/id/831012130/photo/waterfall-in-krka-national-park.jpg?s=612x612&w=0&k=20&c=AY8E3i706Sbq39k2f4-6zJ1oyDy4mH_7Uvv0h6CdDC8=",
    author: "Aarav Mehta",
    date: "2025-08-01",
    tag: "featured",
  },
  {
    id: 2,
    title: "How to Pack Light for a 2-Week Trip",
    description: "Master minimalist packing for long trips with these smart travel hacks...",
    content: "This is the full blog content covering packing techniques, examples, and tools...",
    slug: "pack-light-travel-tips",
    image1: "https://media.istockphoto.com/id/1311253634/photo/packing-suitcase-for-travel-vacation-in-new-normal-top-view.jpg?s=612x612&w=0&k=20&c=Cfh8R5fL8Qo467DesZuHOOOHroDZAsR6VfvTellV4p8=",
    image2: "https://media.istockphoto.com/id/1311253634/photo/packing-suitcase-for-travel-vacation-in-new-normal-top-view.jpg?s=612x612&w=0&k=20&c=Cfh8R5fL8Qo467DesZuHOOOHroDZAsR6VfvTellV4p8=",
    author: "Isha Kapoor",
    date: "2025-07-20",
    tag: "latest",
  },
  {
    id: 3,
    title: "Top 5 Hidden Gems in Southeast Asia",
    description: "These lesser-known destinations are a must-add to your travel bucket list...",
    content: "Explore off-the-beaten-path places in Thailand, Vietnam, and beyond...",
    slug: "hidden-gems-asia",
    image1: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80",
    image2: "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297145.jpg?semt=ais_hybrid&w=740&q=80",
    author: "Ravi Verma",
    date: "2025-07-05",
    tag: "popular",
  },
  {
    id: 4,
    title: "Why You Should Visit The Himalayas in Winter",
    description: "The Himalayas aren’t just for summer treks. Here’s why winter is magical...",
    content: "Explore snow-covered peaks, quiet trails, and off-season beauty. Winter Himalayas offer an unmatched peaceful vibe, breathtaking scenery, and unique experiences...",
    slug: "himalayas-in-winter",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWxalYFfzdvD0ZHHeHgSLbISo_vuZZNdbjlMaZzwTJtISisMnq6SJs-mFBatcrg-KABY&usqp=CAU",
    image2: "https://media.istockphoto.com/id/831012130/photo/waterfall-in-krka-national-park.jpg?s=612x612&w=0&k=20&c=AY8E3i706Sbq39k2f4-6zJ1oyDy4mH_7Uvv0h6CdDC8=",
    author: "Neha Joshi",
    date: "2025-08-10",
    tag: "popular",
  },
  {
    id: 5,
    title: "A Foodie's Guide to Street Food in India",
    description: "Chaat, dosa, momos, and more — here’s what you can’t miss in Indian streets...",
    content: "Indian street food is a journey in itself. From Delhi’s spicy chole bhature to Mumbai’s vada pav, we explore flavors, stalls, and safe eating tips for every traveler...",
    slug: "indian-street-food-guide",
    image1: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80",
    image2: "https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297145.jpg?semt=ais_hybrid&w=740&q=80",
    author: "Karan Singh",
    date: "2025-08-03",
    tag: "featured",
  },
  {
    id: 6,
    title: "Solo Travel: Tips for Your First Trip Alone",
    description: "Solo traveling can be life-changing — if done right. Here’s how to start...",
    content: "We discuss planning, safety, staying connected, and making the most of your solo adventure — from mindset to money and beyond...",
    slug: "solo-travel-first-time",
    image1: "https://media.istockphoto.com/id/1311253634/photo/packing-suitcase-for-travel-vacation-in-new-normal-top-view.jpg?s=612x612&w=0&k=20&c=Cfh8R5fL8Qo467DesZuHOOOHroDZAsR6VfvTellV4p8=",
    image2: "https://media.istockphoto.com/id/1311253634/photo/packing-suitcase-for-travel-vacation-in-new-normal-top-view.jpg?s=612x612&w=0&k=20&c=Cfh8R5fL8Qo467DesZuHOOOHroDZAsR6VfvTellV4p8=",
    author: "Simran Ahuja",
    date: "2025-07-30",
    tag: "latest",
  },
  {
    id: 7,
    title: "Best Beaches to Visit in Goa",
    description: "Sun, sand, and serenity — discover Goa’s most beautiful beaches...",
    content: "From Baga to Palolem, here’s your ultimate guide to enjoying Goa...",
    slug: "best-beaches-goa",
    image1: "https://img.freepik.com/free-photo/beach-sea_74190-6502.jpg?w=740&q=80",
    image2: "https://img.freepik.com/free-photo/tropical-beach-sea_74190-1252.jpg?w=740&q=80",
    author: "Priya Nair",
    date: "2025-08-05",
    tag: "popular",
  },
  {
    id: 8,
    title: "Ultimate Europe Backpacking Guide",
    description: "Backpack through Europe with this step-by-step guide for first-timers...",
    content: "Covers routes, budget tips, and must-visit cities for backpackers...",
    slug: "europe-backpacking-guide",
    image1: "https://img.freepik.com/free-photo/young-tourists-city_23-2148155265.jpg?w=740&q=80",
    image2: "https://img.freepik.com/free-photo/backpacker-mountain_23-2147645635.jpg?w=740&q=80",
    author: "Arjun Sharma",
    date: "2025-08-15",
    tag: "featured",
  },
];




