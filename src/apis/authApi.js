/**
 * 카카오 로그인 API
 * @param {string} code 카카오에서 받은 로그인 코드
 * @returns 토큰 정보가 담긴 response
 */
const getLogin = async (code) => {
  const res = await fetch(import.meta.env.VITE_APP_API_URL + '/api/oauth?code=' + code);

  if (!res.ok) {
    const message = (await res.text()).statusMsg;
    throw new Error(message);
  }

  return res.json();
}

const patchRefresh = async (refreshToken) => {
  return ;
}

export { getLogin, patchRefresh };