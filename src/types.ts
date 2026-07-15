export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  tags: string[];
  prepTime: string;
  isPopular?: boolean;
  image?: string;
}

export interface OrderItem {
  menuItemId: string;
  quantity: number;
}

export interface ContactInfo {
  proprietor: string;
  phones: string[];
  location: {
    stallName: string;
    landmark: string;
    stationDetail: string;
    platform: string;
    city: string;
  };
}
