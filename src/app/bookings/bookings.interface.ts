export interface TBus {
  id: string;
  name: string;
  busNo: string;
  seats: TSeat[];
}

export interface TSeat {
  id: string;
  number: string;
  isBooked: boolean;
}
