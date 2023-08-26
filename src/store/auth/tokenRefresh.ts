// Функция для обновления токена через refreshToken
import {useRefreshTokenMutation} from "./authApi.ts";

const refreshTokenFn = async () => {
  try {
    const [refreshToken] = useRefreshTokenMutation()
    const token: {
      access_token: string,
      refresh_token: string,
    } = JSON.parse(localStorage.getItem('token') as string);

    const res = await refreshToken({refresh: token.refresh_token})
      .unwrap()
      .then(((res) => {
        localStorage.setItem('token', JSON.stringify({
          'access_token': res.access,
          'refresh_token': res.refresh,
        }));
        console.log(res)
      }))

      .catch((err) => console.log(err));
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
};

// Запуск обновления токена каждые 5 минут
const refreshTokenInterval = setInterval(refreshTokenFn, 5 * 60 * 1000);

// Остановить интервал через 5 минут
setTimeout(() => {
  clearInterval(refreshTokenInterval);
}, 5 * 60 * 1000);
