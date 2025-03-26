import { ISignInResponse } from "@solarapp/shared";

declare module "next-auth" {
  interface Session {
    user: ISignInResponse;
  }
}
