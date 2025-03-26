export interface HttpResponse<T> {
  code: number;
  data: T;
  path: string
  success: boolean
  timestamp: Date
}