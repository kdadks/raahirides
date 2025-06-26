export const popularDestinations = [
  {
    title: "Varanasi",
    description: "The spiritual capital of India, known for its ancient temples and sacred Ganges River.",
    attractions: ["Kashi Vishwanath Temple", "Ganga Aarti", "Sankat Mochan Temple", "Assi Ghat", "Dashashwamedh Ghat"]
  },
  {
    title: "Sarnath",
    description: "A sacred Buddhist pilgrimage site where Buddha gave his first sermon.",
    attractions: ["Dhamek Stupa", "Ashoka Pillar", "Buddhist Temples", "Sarnath Museum", "Thai Temple"]
  },
  {
    title: "Bodh Gaya",
    description: "The place where Buddha attained enlightenment, a major Buddhist pilgrimage site.",
    attractions: ["Mahabodhi Temple", "Great Buddha Statue", "Thai Monastery", "Meditation Park"]
  },
  {
    title: "Ayodhya",
    description: "The birthplace of Lord Ram and a center of spiritual significance.",
    attractions: ["Ram Mandir", "Hanuman Garhi", "Kanak Bhawan", "Sita ki Rasoi"]
  },
  {
    title: "Lucknow",
    description: "The city of Nawabs, known for its culture, cuisine, and architecture.",
    attractions: ["Bara Imambara", "Rumi Darwaza", "Residency", "Chota Imambara"]
  },
  {
    title: "Gorakhpur",
    description: "Home to the famous Gorakhnath Temple and rich cultural heritage.",
    attractions: ["Gorakhnath Temple", "Gita Vatika", "Railway Museum", "Ramgarh Tal"]
  },
  {
    title: "Prayagraj",
    description: "The holy confluence of three sacred rivers and historical landmarks.",
    attractions: ["Triveni Sangam", "Anand Bhavan", "Allahabad Fort", "Khusro Bagh"]
  },
  {
    title: "Kathmandu",
    description: "The mystical capital of Nepal, home to ancient temples, palaces, and vibrant culture.",
    attractions: ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath (Monkey Temple)", "Durbar Square", "Thamel Market"]
  }
];

export const packageTours = [
  {
    id: "moksha-yatra",
    title: "Moksha Yatra",
    duration: "5 Days / 4 Nights",
    price: "Price on Request",
    description: "A spiritual journey through the sacred cities of liberation and enlightenment",
    destinations: [
      {
        name: "Varanasi",
        attractions: [
          "Kashi Vishwanath Temple",
          "Ganga Aarti",
          "Sankat Mochan Temple",
          "Suraj Kund",
          "Bhairo Nath"
        ]
      },
      {
        name: "Sarnath",
        attractions: [
          "Dhamek Stupa",
          "Ashoka Pillar",
          "Buddhist Temples"
        ]
      },
      {
        name: "Gaya",
        attractions: [
          "Vishnupad Temple",
          "Falgu River",
          "Bodh Gaya"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi",
        activities: [
          "Arrival at Varanasi Airport/Railway Station",
          "Check-in at hotel and freshen up",
          "Visit Kashi Vishwanath Temple",
          "Evening Ganga Aarti at Dashashwamedh Ghat",
          "Overnight stay in Varanasi"
        ]
      },
      {
        day: 2,
        title: "Varanasi Exploration",
        activities: [
          "Early morning boat ride on River Ganges",
          "Visit Sankat Mochan Temple",
          "Explore Banaras Hindu University",
          "Visit Suraj Kund and Bhairo Nath Temple",
          "Evening at leisure",
          "Overnight stay in Varanasi"
        ]
      },
      {
        day: 3,
        title: "Sarnath Excursion",
        activities: [
          "Morning visit to Sarnath",
          "Explore Dhamek Stupa",
          "Visit Sarnath Museum and Ashoka Pillar",
          "Buddhist Temples tour",
          "Return to Varanasi",
          "Overnight stay in Varanasi"
        ]
      },
      {
        day: 4,
        title: "Journey to Gaya",
        activities: [
          "Check-out and travel to Gaya",
          "Visit Vishnupad Temple",
          "Explore Bodh Gaya - Mahabodhi Temple",
          "Meditation session at Bodhi Tree",
          "Overnight stay in Gaya"
        ]
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Morning puja at Vishnupad Temple",
          "Visit Falgu River for rituals",
          "Check-out from hotel",
          "Departure to onward destination"
        ]
      }
    ]
  },
  {
    id: "avadh-retreat",
    title: "Avadh Yatra",
    duration: "4 Days / 3 Nights",
    price: "Price on Request",
    description: "Explore the royal heritage and spiritual significance of Awadh region",
    destinations: [
      {
        name: "Ayodhya",
        attractions: [
          "Ram Mandir",
          "Sita ki Rasoi",
          "Hanuman Garhi"
        ]
      },
      {
        name: "Prayagraj",
        attractions: [
          "Triveni Sangam",
          "Anand Bhavan",
          "Allahabad Fort"
        ]
      },
      {
        name: "Lucknow",
        attractions: [
          "Bara Imambara",
          "Rumi Darwaza",
          "Chota Imambara"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ayodhya",
        activities: [
          "Arrival and check-in at hotel",
          "Visit the magnificent Ram Mandir",
          "Explore Hanuman Garhi Temple",
          "Visit Sita ki Rasoi",
          "Evening aarti participation",
          "Overnight stay in Ayodhya"
        ]
      },
      {
        day: 2,
        title: "Ayodhya to Prayagraj",
        activities: [
          "Morning darshan at Ram Janmabhoomi",
          "Travel to Prayagraj",
          "Visit Triveni Sangam for holy dip",
          "Explore Anand Bhavan",
          "Overnight stay in Prayagraj"
        ]
      },
      {
        day: 3,
        title: "Prayagraj to Lucknow",
        activities: [
          "Visit Allahabad Fort",
          "Travel to Lucknow",
          "Check-in and lunch",
          "Visit Bara Imambara and Bhool Bhulaiya",
          "See the iconic Rumi Darwaza",
          "Overnight stay in Lucknow"
        ]
      },
      {
        day: 4,
        title: "Lucknow Exploration & Departure",
        activities: [
          "Visit Chota Imambara",
          "Explore Residency ruins",
          "Shopping at Hazratganj",
          "Taste famous Lucknowi cuisine",
          "Departure to onward destination"
        ]
      }
    ]
  },
  {
    id: "divine-yatra",
    title: "Divine Yatra",
    duration: "6 Days / 5 Nights",
    price: "Price on Request",
    description: "A comprehensive spiritual journey through Eastern UP's most sacred sites",
    destinations: [
      {
        name: "Gorakhpur",
        attractions: [
          "Gorakhnath Temple",
          "Gita Vatika",
          "Railway Museum"
        ]
      },
      {
        name: "Ayodhya",
        attractions: [
          "Ram Mandir",
          "Sita ki Rasoi"
        ]
      },
      {
        name: "Varanasi",
        attractions: [
          "Kashi Vishwanath Temple",
          "Ganga Aarti",
          "Sankat Mochan Temple"
        ]
      },
      {
        name: "Prayagraj",
        attractions: [
          "Sangam",
          "Akshayavat",
          "Patalpuri Temple"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gorakhpur",
        activities: [
          "Arrival and check-in at hotel",
          "Visit Gorakhnath Temple",
          "Explore temple complex and ashram",
          "Evening meditation session",
          "Overnight stay in Gorakhpur"
        ]
      },
      {
        day: 2,
        title: "Gorakhpur Exploration",
        activities: [
          "Morning prayers at Gorakhnath Temple",
          "Visit Gita Vatika",
          "Explore Railway Museum",
          "Local sightseeing",
          "Overnight stay in Gorakhpur"
        ]
      },
      {
        day: 3,
        title: "Gorakhpur to Ayodhya",
        activities: [
          "Travel to Ayodhya",
          "Check-in and lunch",
          "Visit Ram Mandir",
          "Explore Sita ki Rasoi",
          "Evening aarti at Ram Mandir",
          "Overnight stay in Ayodhya"
        ]
      },
      {
        day: 4,
        title: "Ayodhya to Varanasi",
        activities: [
          "Morning darshan at Ram Janmabhoomi",
          "Travel to Varanasi",
          "Check-in at hotel",
          "Visit Kashi Vishwanath Temple",
          "Evening Ganga Aarti",
          "Overnight stay in Varanasi"
        ]
      },
      {
        day: 5,
        title: "Varanasi to Prayagraj",
        activities: [
          "Morning boat ride on Ganges",
          "Visit Sankat Mochan Temple",
          "Travel to Prayagraj",
          "Visit Triveni Sangam",
          "Overnight stay in Prayagraj"
        ]
      },
      {
        day: 6,
        title: "Prayagraj & Departure",
        activities: [
          "Visit Akshayavat",
          "Explore Patalpuri Temple",
          "Final prayers at Sangam",
          "Check-out and departure"
        ]
      }
    ]
  },
  {
    id: "shiva-shambhu",
    title: "Shiva Shambhu",
    duration: "7 Days / 6 Nights",
    price: "Price on Request",
    description: "An international spiritual journey connecting Lord Shiva's sacred abodes across India and Nepal",
    destinations: [
      {
        name: "Varanasi",
        attractions: [
          "Kashi Vishwanath Mandir",
          "Ganga Aarti",
          "Sankat Mochan Temple",
          "Dashashwamedh Ghat"
        ]
      },
      {
        name: "Gorakhpur",
        attractions: [
          "Gorakhpur Mandir",
          "Gorakhnath Temple",
          "Gita Vatika",
          "Railway Museum"
        ]
      },
      {
        name: "Kathmandu",
        attractions: [
          "Pashupatinath Mandir",
          "Boudhanath Stupa",
          "Swayambhunath Temple",
          "Durbar Square"
        ]
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi",
        activities: [
          "Arrival at Varanasi Airport/Railway Station",
          "Check-in at hotel and freshen up",
          "Visit Kashi Vishwanath Mandir",
          "Evening Ganga Aarti at Dashashwamedh Ghat",
          "Overnight stay in Varanasi"
        ]
      },
      {
        day: 2,
        title: "Varanasi Temple Tour",
        activities: [
          "Early morning boat ride on River Ganges",
          "Visit Sankat Mochan Temple",
          "Explore ancient ghats",
          "Visit local Shiva temples",
          "Evening meditation session",
          "Overnight stay in Varanasi"
        ]
      },
      {
        day: 3,
        title: "Varanasi to Gorakhpur",
        activities: [
          "Morning darshan at Kashi Vishwanath",
          "Travel to Gorakhpur",
          "Check-in at hotel",
          "Visit Gorakhnath Temple (Gorakhpur Mandir)",
          "Evening prayers and aarti",
          "Overnight stay in Gorakhpur"
        ]
      },
      {
        day: 4,
        title: "Gorakhpur Exploration",
        activities: [
          "Morning meditation at Gorakhnath Temple",
          "Explore temple complex and ashram",
          "Visit Gita Vatika",
          "Local sightseeing",
          "Preparation for Nepal journey",
          "Overnight stay in Gorakhpur"
        ]
      },
      {
        day: 5,
        title: "Journey to Kathmandu",
        activities: [
          "Morning blessings at Gorakhnath Temple",
          "Travel to Kathmandu via Sonauli border",
          "Check-in at hotel in Kathmandu",
          "Evening visit to Boudhanath Stupa",
          "Overnight stay in Kathmandu"
        ]
      },
      {
        day: 6,
        title: "Kathmandu Temple Tour",
        activities: [
          "Early morning visit to Pashupatinath Mandir",
          "Participate in morning aarti",
          "Explore Swayambhunath Temple (Monkey Temple)",
          "Visit Durbar Square",
          "Cultural exploration of Kathmandu",
          "Overnight stay in Kathmandu"
        ]
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Final darshan at Pashupatinath Mandir",
          "Shopping for souvenirs",
          "Check-out from hotel",
          "Departure to onward destination",
          "End of Shiva Shambhu journey"
        ]
      }
    ]
  }
];