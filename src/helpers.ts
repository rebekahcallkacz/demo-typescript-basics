import { TUser

 } from "./types";

export function formatName(user: TUser): string {
  return `${user.nickname ?? ""} ${user.lastName ?? ""}`;
}
