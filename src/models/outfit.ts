import { Product } from '@/models/product'

export type OutfitKind = 'shirt' | 'dress' | 'pants'
export type OutfitModel = 'long' | 'short' | 'cropped' 

export interface Outfit extends Product {
  image: string,
  size: string,
  kind: OutfitKind,
  model: OutfitModel[],
}