export interface LoginType {
  username: string;
  password: string;
}

export interface SignupType {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}