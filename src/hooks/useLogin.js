import { useCookies } from "react-cookie";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getLogin } from "../apis/authApi";
import { useEffect } from "react";

function useLogin() {
  const [searchParams] = useSearchParams();
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);
  const accessTime = 2 * 60 * 60 * 1000;
  const refreshTime = 7 * 24 * 60 * 60 * 1000;
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    getLogin(code)
    .then((res) => {
      setCookie('accessToken', res.data.accessToken, { expires: new Date(Date.now() + accessTime), path: '/' })
      setCookie('refreshToken', res.data.refreshToken, { expires: new Date(Date.now() + refreshTime), path: '/' })
    })
  }, [searchParams])

  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      navigate('/');
    }
  }, [cookies])
}

export default useLogin;