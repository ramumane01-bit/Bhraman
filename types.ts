export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number; // INR
  image: string;
  rating: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface BookingDetails {
  destination: string;
  startDate: string;
  days: number;
  travelers: number;
  tripType: string;
  phoneNumber?: string;
}

export interface GeneratedItinerary {
  title: string;
  overview: string;
  dailyPlan: {
    day: number;
    title: string;
    activities: string[];
  }[];
  hotelSuggestions: {
    name: string;
    type: string;
    description: string;
  }[];
  inclusions: string[];
}