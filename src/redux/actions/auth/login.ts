export default function loginAction(
  login: string,
  senha: string,
  token: string,
) {
  return {
    type: 'auth/login',
    payload: {
      login,
      senha,
      token,
    }
  }
}