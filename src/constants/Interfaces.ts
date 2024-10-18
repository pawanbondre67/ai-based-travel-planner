export interface UserSelection {
    destination: string;
    traveler: string;
    budget: string;
    noOfdays: string;
  }
  
  export interface HotelOption {
    hotelName: string;
    rating: number;
    hotelAddress: string;
    geoCoordinates: string;
    description: string;
    price: string;
    hotelImageURL: string;
  }
  
  export interface ItineraryPlan {
    ticketPricing: string;
    timeToTravel: string;
    placeName: string;
    placeDetails: string;
    bestTimeToVisit: string;
    geoCoordinates: string;
    placeImageURL: string;
  }
  
  export interface Itinerary {
    [day: string]: {
      plan: ItineraryPlan[];
    };
  }
  
  export interface TripData {
    id: string;
    userId: string;
    userEmail: string;
    userSelection: UserSelection;
    tripData: {
      hotelOptions: HotelOption[];
      itinerary: Itinerary;
    };
  }
  
  export interface TripDataProps {
    tripData: TripData[];
  }


  export interface PlaceCardItemProps {

    plan: ItineraryPlan;
  
  }

  export interface HotelCardItemProps {
    hotel: HotelOption;
  }


  export interface User {
    user: User;
    email: string;
    displayName: string;
    apiKey : string;
    photoURL: string;

  }