import {
  HttpResponse,
  ISignInRequest,
  ISignInResponse,
} from "@solarapp/shared";
import { axiosApi } from "./api";

export async function signIn(
  data: ISignInRequest
): Promise<ISignInResponse | undefined> {
  const response = await axiosApi.post<HttpResponse<ISignInResponse>>(
    "/auth/sign-in",
    data
  );
  return response.data.data;
}
