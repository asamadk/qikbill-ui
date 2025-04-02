import type { Business } from "./Business";
import type { Role } from "./Role";

export type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    otp: string;
    otp_expires_at: string; // ISO timestamp format
    status: string;
    role: Role;
    role_id: string;
    business: Business;
    business_id: string;
  };