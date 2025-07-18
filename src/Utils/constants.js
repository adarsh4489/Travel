import beach from "../assets/beach gateway.jpg"
import dolomite from "../assets/mountains.jpg";
import azore from "../assets/azores-2.jpg"
import { FaMountainSun ,FaUmbrellaBeach } from "react-icons/fa6";
import { MdKitesurfing } from "react-icons/md";
import { IoBoat,IoRocket  } from "react-icons/io5";
import { GiMountainClimbing } from "react-icons/gi";



export const categoryData = [
  { id: "1", icon: FaUmbrellaBeach , title: "Beach GateWay" },
  {
    id: "2",
    icon: GiMountainClimbing,
    title: "Adventure Time",
  
  },
  {
    id: "3",
    icon: MdKitesurfing,
    title: "Exotic Trips",
  
  },
  { id: "4", icon: IoBoat, title: "Cruise" },
  { id: "5", icon: IoRocket , title: "Last Minute" },
  { id: "6", icon: FaMountainSun , title: "Mountains"},
];

export const offers = [
  {
    id: 1,
    type: "Mountains",
    place: "Dolomites",
    image:dolomite,
    bgcolor:"green-900",
    price: 400,
  },
  {
    id: 2,
    type: "Beaches",
    place: "Connary Islands",
    image:beach,
    bgcolor:"orange-500",
    price: 600,
  },
  {
    id: 3,
    type: "Relax",
    place: "Azores",
    image:azore,
    bgcolor:"yellow-600",
    price: 800,
  },
];

export const tripData = [
  {
    id: 1,
    image: "https://www.travelweek.ca/wp-content/uploads/2020/07/NARAT-promotes-secluded-Maldives-Escape-FITs.jpg",
    placeName: "Maldives Escape",
    location: "Malé, Maldives",
    date: "10 August 2025 - 15 August 2025",
    startDate: "10 August 2025",
    endDate: "15 August 2025",
    price: "1200",
    colour: "orange-500",
    category: ["beach", "romantic", "luxury", "family"],
    description: "A luxurious getaway in the heart of the Maldives with crystal-clear waters and overwater villas.",
    nearestDestinations: ["Maafushi Island", "Hulhumalé Beach", "Baa Atoll"],
    galleryImages: [
      "https://images.unsplash.com/photo-1583202075027-ec06a1a507c7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565031519702-8159fe631ba5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598387844652-242f59f1b5d5?w=400&h=300&fit=crop"
    ],
    facilities: ["Hotel Stay", "Flights", "Breakfast", "Snorkeling Trip"],
    packageDetails: "Enjoy a 5-night stay in a private villa, with guided snorkeling tours and exclusive island activities.",
    averageRating: 4.8
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
    placeName: "Paris Getaway",
    location: "Paris, France",
    date: "18 September 2025 - 23 September 2025",
    startDate: "18 September 2025",
    endDate: "23 September 2025",
    price: "1500",
    colour: "green-900",
    category: ["romantic", "family", "culture"],
    description: "Discover the magic of Paris with visits to the Eiffel Tower, Louvre Museum, and charming streets of Montmartre.",
    nearestDestinations: ["Versailles", "Disneyland Paris", "Giverny"],
    galleryImages: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2cc1?w=400&h=300&fit=crop"
    ],
    facilities: ["Hotel Stay", "City Tours", "Breakfast", "River Cruise"],
    packageDetails: "Stay in a charming Parisian hotel with guided city tours and a romantic cruise on the Seine River.",
    averageRating: 4.7
  },
  {
    id: 3,
    image: "https://d1hirb55zrpywb.cloudfront.net/macs-adventure-tours/routes/WSGUSA/routeimagegallery/8-rsz-01102019165043055.jpg",
    placeName: "Swiss Alps Adventure",
    location: "Zermatt, Switzerland",
    date: "5 October 2025 - 10 October 2025",
    startDate: "5 October 2025",
    endDate: "10 October 2025",
    price: "1800",
    colour: "yellow-600",
    category: ["mountains", "adventure", "trekking", "nature"],
    description: "Experience the breathtaking Swiss Alps with scenic train rides, skiing, and mountain hikes.",
    nearestDestinations: ["Interlaken", "Lucerne", "Jungfraujoch"],
    galleryImages: [
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1602164883963-bfbc6835d99d?w=400&h=300&fit=crop"
    ],
    facilities: ["Hotel Stay", "Ski Equipment", "Cable Car Rides", "Mountain Trekking"],
    packageDetails: "Enjoy a 5-night stay in the Swiss Alps, including skiing, hiking, and scenic train rides.",
    averageRating: 4.9
  },
  {
    id: 4,
    image: "https://s1.it.atcdn.net/wp-content/uploads/2013/03/GettyImages-653953140.jpg",
    placeName: "Bali Bliss",
    location: "Bali, Indonesia",
    date: "20 November 2025 - 25 November 2025",
    startDate: "20 November 2025",
    endDate: "25 November 2025",
    price: "1100",
    colour: "orange-500",
    category: ["beach", "family", "spiritual", "romantic"],
    description: "Explore the tropical paradise of Bali with serene beaches, ancient temples, and vibrant nightlife.",
    nearestDestinations: ["Ubud", "Nusa Penida", "Gili Islands"],
    galleryImages: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513342791667-6ebf326f9e87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
    ],
    facilities: ["Hotel Stay", "Surfing Lessons", "Temple Tours", "Spa Packages"],
    packageDetails: "Stay in a luxury Bali resort with daily yoga, cultural tours, and surfing lessons.",
    averageRating: 4.6
  },
  {
    id: 5,
    image: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
    placeName: "New York Explorer",
    location: "New York, USA",
    date: "12 December 2025 - 17 December 2025",
    startDate: "12 December 2025",
    endDate: "17 December 2025",
    price: "1600",
    colour: "green-900",
    category: ["urban", "family", "luxury", "culture"],
    description: "Experience the bustling streets of New York, visit Times Square, Central Park, and Broadway.",
    nearestDestinations: ["Washington D.C.", "Niagara Falls", "Philadelphia"],
    galleryImages: [
      "https://images.unsplash.com/photo-1576941089066-352cda3def9d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578664116544-2744b3c830d3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520174714001-7e53581b584f?w=400&h=300&fit=crop"
    ],
    facilities: ["Hotel Stay", "City Pass", "Broadway Show", "Airport Transfers"],
    packageDetails: "5-night stay in Manhattan with access to top attractions and Broadway entertainment.",
    averageRating: 4.8
  }
];


export const filterBoxData=[
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
]




export const bookingAccordianData=[
  {
    id:1,
    question:"Why has the price for the trip changed?",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:2,
    question:"Booking an individual room",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:3,
    question:"Booking an extras",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:4,
    question:"Trip cancelation and refund",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  }
]
export const paymentAccordianData=[
  {
    id:1,
    question:"Can I pay by debit card?",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:2,
    question:"Why do i need to make full payment?",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:3,
    question:"Discount and Vouchers",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },

]
export const covidAccordianData=[
  {
    id:1,
    question:"Are the vaccination requirement for the trips?",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:2,
    question:"Do i haveto wear a mask while travelling?",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },
  {
    id:3,
    question:"Am I eligible for refund if i feel unwell?",
    answer:"We regret to inform you that you've missed out this time. Our special offers are available for a limited duration, and to secure great deals, it's essantial to act promptly. Enusre you've subscribed to our email newsletter to stay informed about upcoming sales and promotions.",
  },

]

export const testimonials = [
  {
    name: "John Doe",
    designation: "Traveler",
    rating: 5,
    message: "Absolutely amazing experience! The trip was well-organized, and the guides were super helpful. Can't wait to book my next tour!"
  },
  {
    name: "Sarah Smith",
    designation: "Adventure Enthusiast",
    rating: 4.8,
    message: "Loved every bit of the journey! The accommodations were fantastic, and the itinerary was perfectly planned. Highly recommended!"
  },
  {
    name: "Michael Brown",
    designation: "Solo Explorer",
    rating: 5,
    message: "One of the best travel experiences I've had! The team took care of everything, making my trip stress-free and enjoyable."
  },
  {
    name: "Emily Johnson",
    designation: "Travel Blogger",
    rating: 4.7,
    message: "Such a wonderful trip! The sightseeing spots were breathtaking, and the entire journey was smooth. Great service!"
  },
  {
    name: "David Wilson",
    designation: "Honeymoon Traveler",
    rating: 4.9,
    message: "A dream honeymoon trip! Everything was beautifully planned, from stays to activities. We had an unforgettable experience!"
  },
  {
    name: "Sophia Martinez",
    designation: "Family Traveler",
    rating: 5,
    message: "Our family trip was incredible! The kids had a fantastic time, and the entire experience was hassle-free. Thank you for the wonderful memories!"
  },
  {
    name: "James Anderson",
    designation: "Backpacker",
    rating: 4.6,
    message: "Budget-friendly yet amazing! The tour had the perfect balance of adventure and relaxation. Will definitely book again!"
  },
  {
    name: "Olivia Taylor",
    designation: "Luxury Traveler",
    rating: 5,
    message: "A premium travel experience! Everything was top-notch, from the resorts to the private tours. Worth every penny!"
  }
];
