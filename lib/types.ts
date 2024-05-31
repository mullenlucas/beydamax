export interface Users {
  id: number;
  name: string;
  password: string;
  email: string;
  createdAt: Date;
  role: 'admin' | 'renter';
}

export interface Tools {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  createdAt: Date;
  rentedBy: number | null;
  user?: Users;
}