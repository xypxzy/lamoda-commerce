import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import { googleProvider,} from "../../config/firebase-config";

import {setAuthStatus} from "../../store/auth/authSlice";
import {useAddTokenMutation} from "../../store/auth/authApi";
import {useAppDispatch} from "../../store/hooks";
import socialMediaAuth from "../../service/auth";
import cls from "./Login.module.css";
import {FcGoogle } from 'react-icons/fc';
import logo from "../../assets/svg/logo.svg";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: {errors},
  } = useForm<FormData>();
  const dispatch = useAppDispatch()
  const [addToken, { isError}] = useAddTokenMutation({})
  const navigate = useNavigate()

  const onSubmit = async (data: FormData) => {
    const res = await addToken({
      username: data.username,
      password: data.password,
    })
      .unwrap()
      .then(((res) => {
        localStorage.setItem('token', JSON.stringify({
          'access_token': res.access,
          'refresh_token': res.refresh,
        }));
        dispatch(setAuthStatus(true))
        navigate('/');
      }))
      .catch((err) => console.error(err));
  }

  const onClickProvider = (provider: any) => {
    socialMediaAuth(provider)
      .then((user) => {
        console.log("Authenticated user:", user);

        dispatch(setAuthStatus(true))
        navigate('/')
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  };

  return (
      <section className={cls.login}>
        <div className={cls.login__container}>
          <Link to='/' className={cls.login__logo}>
            <img className="w-20 h-20 mr-2" src={logo} alt="logo"/>
          </Link>
          <div className={cls.login__form_wrap}>
            <div className={cls.login__form_wrapper}>
              <h1 className={cls.login__form_title}>
                Вход в личный кабинет
              </h1>
              <form className={cls.login__form_forms} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="username" className={cls.login__form_label}>Ваш username</label>
                  <input
                      type="username"
                      id="username"
                      className={cls.login__form_input}
                      placeholder="username"
                      {...register('username', {required: 'Это поле обязательно'})}
                  />
                  {errors.username && <p className={cls.login__form_required__error}>{errors.username.message}</p>}
                </div>
                <div>
                  <label htmlFor="password" className={cls.login__form_label}>Пароль</label>
                  <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className={cls.login__form_input}
                      {...register('password', { required: "Это поле обязательно" })}
                  />
                  {errors.password && <p className={cls.login__form_required__error}>{errors.password.message}</p>}
                </div>
                {
                  isError && (
                        <p className={cls.login__form_required__error}>У вас неверный логин или пароль</p>
                    )
                }
                <div className={cls.login__form_options}>
                  <a href="#" className={cls.login__form_options__password}>Забыли пароль?</a>
                </div>
                <button type="submit" className={cls.login__form_signin__button}>Войти</button>
                <p className={cls.login__form_register__link}>
                  У вас нету аккаунта?
                  <Link to={'/registration'} className={cls.login__form_register__link__text}>Регистрация</Link>
                </p>
              </form>
            </div>
            <section className={cls.socialMediaButtons}>
              <div>
                <p className={'flex justify-center mb-5 text-sm text-gray-600'}>Можете войти через</p>
                <div className={'flex items-center justify-center gap-4 mb-5'}>
                  <button onClick={() => onClickProvider(googleProvider)}>
                    <FcGoogle className={'text-4xl transition-transform transform-gpu duration-200 hover:scale-105'}/>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
  );
};
export default Login;