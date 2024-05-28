export interface HasName {
  name: string;
}

export interface HasId {
  id: string;
}

export type TypeDomain = HasId & HasName; // more simple
export interface InterfaceDomain extends HasId, HasName {} // do this if want to add more properties / methods
