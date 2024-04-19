export interface Items {
    id: number
    name: string
    cost: number
    fling_power: number
    fling_effect: FlingEffect
    attributes: Attribute[]
    category: Category
    effect_entries: EffectEntry[]
    flavor_text_entries: FlavorTextEntry[]
    game_indices: Index[]
    names: Name[]
    sprites: Sprites
    held_by_pokemon: HeldByPokemon[]
    baby_trigger_for: BabyTriggerFor
  }
  
  export interface FlingEffect {
    name: string
    url: string
  }
  
  export interface Attribute {
    name: string
    url: string
  }
  
  export interface Category {
    name: string
    url: string
  }
  
  export interface EffectEntry {
    effect: string
    short_effect: string
    language: Language
  }
  
  export interface Language {
    name: string
    url: string
  }
  
  export interface FlavorTextEntry {
    text: string
    version_group: VersionGroup
    language: Language2
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface Language2 {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    generation: Generation
  }
  
  export interface Generation {
    name: string
    url: string
  }
  
  export interface Name {
    name: string
    language: Language3
  }
  
  export interface Language3 {
    name: string
    url: string
  }
  
  export interface Sprites {
    default: string
  }
  
  export interface HeldByPokemon {
    pokemon: Pokemon
    version_details: VersionDetail[]
  }
  
  export interface Pokemon {
    name: string
    url: string
  }
  
  export interface VersionDetail {
    rarity: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface BabyTriggerFor {
    url: string
  }
  