export type OrderStatus = 'Pending' | 'In Progress' | 'Completed';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  totalAmount: number;
  status: OrderStatus;
  items: OrderItem[];
}