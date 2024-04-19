export interface berries {
    id: number
    name: string
    growth_time: number
    max_harvest: number
    natural_gift_power: number
    size: number
    smoothness: number
    soil_dryness: number
    firmness: Firmness
    flavors: Flavor[]
    item: Item
    natural_gift_type: NaturalGiftType
  }
  
  export interface Firmness {
    name: string
    url: string
  }
  
  export interface Flavor {
    potency: number
    flavor: Flavor2
  }
  
  export interface Flavor2 {
    name: string
    url: string
  }
  
  export interface Item {
    name: string
    url: string
  }
  
  export interface NaturalGiftType {
    name: string
    url: string
  }