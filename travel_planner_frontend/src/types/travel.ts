export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  image?: string;
  description?: string;
}

export interface ItineraryItem {
  id: string;
  tripId: string;
  day: number;
  time: string;
  activity: string;
  description?: string;
  location?: string;
  type: 'flight' | 'hotel' | 'activity' | 'food' | 'transport';
}
