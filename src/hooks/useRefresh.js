import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { patchRefresh } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

function useRefresh() {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();
  const accessTime = 2 * 60 * 60 * 1000;
  const refreshTime = 7 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    if (!cookies.accessToken && cookies.refreshToken) {
      patchRefresh(cookies.refreshToken)
      .then((res) => {
        setCookie('accessToken', res.data.accessToken, { expires: new Date(Date.now() + accessTime), path: '/' })
        setCookie('refreshToken', res.data.refreshToken, { expires: new Date(Date.now() + refreshTime), path: '/' })
      })
      .catch((error) => {
        alert(error.message);
        removeCookie('accessToken');
        removeCookie('refreshToken');
      })
    } else if (!cookies.accessToken && !cookies.refreshToken) {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  }, [cookies]);
}