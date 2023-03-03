import { Product } from '@/models/product'

export interface Service extends Product {
  averageTime: string,
}