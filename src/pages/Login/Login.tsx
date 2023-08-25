import eye from "../../assets/eye.svg";
import logo from "../../assets/svg/logo.svg";
import {SubmitHandler, useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import cls from "./Login.module.css";
import {useEffect, useState} from "react";
import {facebookProvider, githubProvider, googleProvider,} from "../../config/firebase-config";
import socialMediaAuth from "../../service/auth";
import {AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {CiLock} from 'react-icons/ci'

import google from "../../assets/image 2.svg";
import facebook from "../../assets/image 3.svg";
import apple from "../../assets/image 4.svg";
import {useAppDispatch} from "../../store/hooks";
import {AuthResponse, useAddTokenMutation} from "../../store/auth/authApi";
import {setAuthStatus} from "../../store/auth/authSlice";

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
  const [addToken, {data, isError, error, isSuccess}] = useAddTokenMutation({})
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
      .catch((err) => console.log(err));
    console.log(res)
  }

  if(isError){
    console.log(error)
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
              <div className={cls.login__form_options}>
                {/*<div className={cls.login__form_options__wrapper}>*/}
                {/*  <div className="flex items-center h-5">*/}
                {/*    <input*/}
                {/*      id="remember_password"*/}
                {/*      aria-describedby="remember_password"*/}
                {/*      type="checkbox"*/}
                {/*      className={cls.login__form_options__checkbox}*/}
                {/*      {...register('remember_password')}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <div className="ml-3 text-sm">*/}
                {/*    <label*/}
                {/*      htmlFor="remember_password"*/}
                {/*      className={cls.login__form_options__label}>*/}
                {/*      Запомнить меня*/}
                {/*    </label>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <a href="#" className={cls.login__form_options__password}>Забыли пароль?</a>
              </div>
              <button type="submit" className={cls.login__form_signin__button}>Войти</button>
              <p className={cls.login__form_register__link}>
                У вас нету аккаунта?
                <Link to={'/registration'} className={cls.login__form_register__link__text}>Регистрация</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
