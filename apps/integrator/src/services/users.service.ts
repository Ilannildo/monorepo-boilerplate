import { HttpResponse } from "@/common/types/http-response";
import { axiosApi } from "./api";
import { IUserResponse } from "@/common/schemas/users/user-response.schema";
import { ICreateUserRequest } from "@/common/schemas/users/create-user-request.schema";
import { IUpdateUserRequest } from "@/common/schemas/users/update-user-request.schema";
import { IGetUserRequest } from "@/common/schemas/users/get-user-request.schema";
import { IRecipientResponse } from "@/common/schemas/recipients/recipient-response.schema";

/**
 * This TypeScript function makes an asynchronous request to fetch user data from the "/users/me"
 * endpoint using axiosApi.
 * @returns The `me` function is returning the data object from the response of the API call to
 * "/auth/me".
 */
export async function me(): Promise<IUserResponse> {
  const response = await axiosApi.get<HttpResponse<IUserResponse>>("/users/me");
  return response.data.data;
}

export async function createUser(data: ICreateUserRequest) {
  const response = await axiosApi.post<HttpResponse<IUserResponse>>(
    "/users",
    data
  );

  return response.data.data;
}

export async function updateUser(data: IUpdateUserRequest) {
  const response = await axiosApi.put<HttpResponse<IUserResponse>>(
    `/users/${data.user_id}`,
    data.data
  );

  return response.data.data;
}

export async function getUserRecipient(params: IGetUserRequest) {
  const response = await axiosApi.get<HttpResponse<IRecipientResponse>>(
    `/users/${params.user_id}/recipient`
  );

  return response.data.data;
}