

export const SelectTravelList = [
    {
        id: 1,
        title: 'Just me',
        desc : 'I am travelling solo',
        icon : '✈️',
        people: '1 person'
    },
    {
        id: 2,
        title: 'With my partner',
        desc : 'I am travelling with my partner',
        icon : '👫',
        people: '2 people'
    },

    {
        id : 3,
        title: 'With my family',
        desc : 'I am travelling with my family',
        icon : '🏡',
        people: "3 people"
    },
    {
        id:4 ,
        title: 'With my friends',
        desc : 'I am travelling with my friends',
        icon : '🤝',
        people :' 4 to 10 people'
    }
]

export const SelectBudgetOptions  = [

    {
        id: 1,
        title: 'Cheap',
        desc : 'I am looking for a budget friendly trip',
        icon : '💵',
        budget: 'Cheap'
    },
    {
        id: 2,
        title: 'Standard',
        desc : 'I am looking for a standard trip',
        icon : '💰',
        budget: 'Standard'
    },

    {
        id : 3,
        title: 'Luxury',
        desc : 'I am looking for a luxury trip',
        icon : '💸',
        budget: 'Luxury'
    }
]


export const  AI_prompt = 'Generate Travel Plan for Location: {destination}, for {totalDays} Days for {traveler} with a {budget} budget,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format.'




export interface Place {
    id: number;
    name: string;
  }
  export const places: Place[] = [
    { id: 1, name: "Tokyo, Japan" },
    { id: 2, name: "Barcelona, Spain" },
    { id: 3, name: "Rishikesh, India" },
    { id: 4, name: "Agra, India" },
    { id: 5, name: "London, United Kingdom" },
    { id: 6, name: "Dublin, Ireland" },
    { id: 7, name: "Udaipur, India" },
    { id: 8, name: "New York, USA" },
    { id: 9, name: "Rameswaram, India" },
    { id: 10, name: "Srinagar, India" },
    { id: 11, name: "Rome, Italy" },
    { id: 12, name: "Moscow, Russia" },
    { id: 13, name: "Goa, India" },
    { id: 14, name: "Agra, India" },
    { id: 15, name: "Vienna, Austria" },
    { id: 16, name: "Munnar, India" },
    { id: 17, name: "Alleppey, India" },
    { id: 18, name: "Mumbai, India" },
    { id: 19, name: "Paris, France" },
    { id: 20, name: "Sydney, Australia" },
    { id: 21, name: "Venice, Italy" },
    { id: 22, name: "Gangtok, India" },
    { id: 23, name: "Bangkok, Thailand" },
    { id: 24, name: "Kanyakumari, India" },
    { id: 25, name: "Lisbon, Portugal" },
    { id: 26, name: "Berlin, Germany" },
    { id: 27, name: "Jaisalmer, India" },
    { id: 28, name: "Moscow, Russia" },
    { id: 29, name: "Varanasi, India" },
    { id: 30, name: "Cairo, Egypt" },
    { id: 31, name: "Coorg, India" },
    { id: 32, name: "Jakarta, Indonesia" },
    { id: 33, name: "Chennai, India" },
    { id: 34, name: "Khajuraho, India" },
    { id: 35, name: "San Francisco, USA" },
    { id: 36, name: "Haridwar, India" },
    { id: 37, name: "Krakow, Poland" },
    { id: 38, name: "Ranikhet, India" },
    { id: 39, name: "Singapore, Singapore" },
    { id: 40, name: "Budapest, Hungary" },
    { id: 41, name: "Darjeeling, India" },
    { id: 42, name: "Copenhagen, Denmark" },
    { id: 43, name: "Jodhpur, India" },
    { id: 44, name: "Hampi, India" },
    { id: 45, name: "Los Angeles, USA" },
    { id: 46, name: "Zagreb, Croatia" },
    { id: 47, name: "Kuala Lumpur, Malaysia" },
    { id: 48, name: "Seattle, USA" },
    { id: 49, name: "Amsterdam, Netherlands" },
    { id: 50, name: "Ooty, India" },
    { id: 51, name: "Buenos Aires, Argentina" },
    { id: 52, name: "Athens, Greece" },
    { id: 53, name: "Diu, India" },
    { id: 54, name: "Chandigarh, India" },
    { id: 55, name: "Alibaug, India" },
    { id: 56, name: "Mumbai, India" },
    { id: 57, name: "Sofia, Bulgaria" },
    { id: 58, name: "Spiti Valley, India" },
    { id: 59, name: "Rio de Janeiro, Brazil" },
    { id: 60, name: "Pondicherry, India" },
    { id: 61, name: "Tallinn, Estonia" },
    { id: 62, name: "Nashik, India" },
    { id: 63, name: "Petra, Jordan" },
    { id: 64, name: "Baku, Azerbaijan" },
    { id: 65, name: "Montreal, Canada" },
    { id: 66, name: "Genoa, Italy" },
    { id: 67, name: "Puri, India" },
    { id: 68, name: "Thiruvananthapuram, India" },
    { id: 69, name: "Helsinki, Finland" },
    { id: 70, name: "Edinburgh, United Kingdom" },
    { id: 71, name: "Stockholm, Sweden" },
    { id: 72, name: "Varkala, India" },
    { id: 73, name: "Mumbai, India" },
    { id: 74, name: "Istanbul, Turkey" },
    { id: 75, name: "Moscow, Russia" },
    { id: 76, name: "Nairobi, Kenya" },
    { id: 77, name: "Manali, India" },
    { id: 78, name: "Pune, India" },
    { id: 79, name: "Oslo, Norway" },
    { id: 80, name: "Düsseldorf, Germany" },
    { id: 81, name: "Chennai, India" },
    { id: 82, name: "Delhi, India" },
    { id: 83, name: "Mumbai, India" },
    { id: 84, name: "Quito, Ecuador" },
    { id: 85, name: "Brussels, Belgium" },
    { id: 86, name: "Ljubljana, Slovenia" },
    { id: 87, name: "Nairobi, Kenya" },
    { id: 88, name: "Tbilisi, Georgia" },
    { id: 89, name: "Dubai, UAE" },
    { id: 90, name: "Hanoi, Vietnam" },
    { id: 91, name: "Oslo, Norway" },
    { id: 92, name: "Auckland, New Zealand" },
    { id: 93, name: "Calgary, Canada" },
    { id: 94, name: "Santiago, Chile" },
    { id: 95, name: "Quito, Ecuador" },
    { id: 96, name: "Yerevan, Armenia" },
    { id: 97, name: "Bucharest, Romania" },
    { id: 98, name: "Cartagena, Colombia" },
    { id: 99, name: "Antwerp, Belgium" },
    { id: 100, name: "Vancouver, Canada" }
  ];
  