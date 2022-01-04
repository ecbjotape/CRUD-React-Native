export interface LoginAction {
  type: string;
  payload: {
    login: string;
    senha: string;
    token: string;
  }
}