// this can be a number or a string
export type TAge = string | number;

export type TCity = {
  city: string;
  state: string;
  zip: number;
  population?: number;
};

export type TUser = {
  id: number;
  age?: TAge;
  nickname?: string;
  firstName?: string;
  lastName?: string;
  hobbies?: Array<string>;
  address?: TCity;
};