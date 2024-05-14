import { UserRole } from "./UserRole";

export interface PageConfig {
  userRole: UserRole;
}

export interface NotFoundPageConfig {
  message?: string;
}