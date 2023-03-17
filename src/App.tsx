import { FC, useEffect } from 'react';
import './App.scss';
import { CookiesProvider, useCookies } from "react-cookie";
import api from './shared/api/api';
import { PASSWORD, USERNAME } from './shared/utils/env';
import { Main } from './pages/Main';

const App: FC = () => {
  const [cookie, setCookie] = useCookies(["token"]);

  useEffect(() => {
    const login = async () => {
      try {
        const res = await api.login(USERNAME, PASSWORD);
        setCookie("token", `Bearer ${res.data.access_token}`);
      } catch (error) {
        console.log(error)
      }
    }
    login()
  }, []);

  return (
    <CookiesProvider>
      <Main />
    </CookiesProvider>
  );
}

export default App;
