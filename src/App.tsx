import Root from "./routes/root.tsx";
import {useEffect} from "react";
import {refreshAccessToken} from "./store/auth/tokenRefresh.ts";

function App() {
    // Обновления токена каждые 4 минут
    useEffect(() => {
      const token: {
        access_token: string,
        refresh_token: string,
      } = JSON.parse(localStorage.getItem('token') as string);

      const updateAccessToken = async () => {
            // Первоначальный запрос токена и его обновление каждые 4 минуты
            const access: string = await refreshAccessToken(token.refresh_token)
            const updateToken = {
              access_token: access,
              refresh_token: token.refresh_token
            }
            localStorage.setItem('token', JSON.stringify(updateToken))
        }

      updateAccessToken();

      const refreshInterval = setInterval(() => {
        refreshAccessToken(token.refresh_token);
      }, 4 * 60 * 1000); // 4 минуты в миллисекундах

      return () => {
        clearInterval(refreshInterval);
      };
    }, []);

    return <Root/>;
}

export default App;
