import { TAge, TCity, TUser } from "./types"

// This is a type literal - TS will deduce this is a string
export const name = "Rebekah";
// With these you really don't have to include the type, but you can if you want to
export const rebekahAge: TAge = 32;
export const brianAge: TAge = "33";

// If you don't add parseInt, this will throw a type error 
export const isBrianOlder: boolean = parseInt(brianAge) > rebekahAge;

export const DURHAM: TCity = { city: "Durham", state: "NC", zip: 27704 };

export const USERS: Array<TUser> = [
  {
    id: 1,
    age: rebekahAge,
    nickname: "Beka",
    firstName: "Rebekah",
    lastName: "CK",
    hobbies: ["art", "fashion", "baseball", "thrifting"],
    address: DURHAM,
  },
  {
    id: 2,
    nickname: "Brian",
    firstName: "Brian",
    lastName: "Kaczmarczyk",
    hobbies: ["baseball", "hockey", "video games"],
    address: DURHAM,
  },
];
