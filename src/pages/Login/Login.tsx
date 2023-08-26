import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {facebookProvider, githubProvider, googleProvider,} from "../../config/firebase-config";
<<<<<<< HEAD
import socialMediaAuth from "../../service/auth";

import google from "../../assets/image 2.svg";
import facebook from "../../assets/image 3.svg";
import apple from "../../assets/image 4.svg";
import {useAddTokenMutation} from "../../store/auth/authApi";
import {toggle} from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";
=======
import {setAuthStatus} from "../../store/auth/authSlice";
import {useAddTokenMutation} from "../../store/auth/authApi";
import {useAppDispatch} from "../../store/hooks";
import socialMediaAuth from "../../service/auth";
import cls from "./Login.module.css";
import {FcGoogle } from 'react-icons/fc';
import {GrGithub, GrFacebook} from 'react-icons/gr';
import logo from "../../assets/svg/logo.svg";
>>>>>>> main

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
<<<<<<< HEAD
    formState: { errors },
  } = useForm();
  const [booleanPassword, setBooleanPassword] = useState(true);
  const dispatch = useDispatch()
  const [addToken, {data, isError, error, isSuccess}] = useAddTokenMutation()
=======
    formState: {errors},
  } = useForm<FormData>();
  const dispatch = useAppDispatch()
  const [addToken, { isError, error}] = useAddTokenMutation({})
>>>>>>> main
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
<<<<<<< HEAD
        console.log('success')
        dispatch(toggle(true))
=======
        dispatch(setAuthStatus(true))
>>>>>>> main
        navigate('/')
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  };

<<<<<<< HEAD
////
  const onSubmit = async(data: any) => {

    try {
        await addToken({username: data?.name, password: data?.password})
        .then((res) => localStorage.setItem('token', JSON.stringify({accesss_token:res?.data?.access, refresh_token: res?.data?.refresh})))
        .catch((err) => console.log(err))
        dispatch(toggle(true))
        console.log()
    } catch (error) {
      console.log(error)
    }
  }

  if(isError){
    console.log(error)
  }

///

      
=======
>>>>>>> main
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
          <section className={cls.socialMediaButtons}>
            <div>
              <p className={'flex justify-center mb-5 text-sm text-gray-600'}>Можете войти через</p>
              <div className={'flex items-center justify-center gap-4 mb-5'}>
                <button onClick={() => onClickProvider(googleProvider)}>
                  <FcGoogle className={'text-4xl transition-transform transform-gpu duration-200 hover:scale-105'}/>
                </button>
                <button onClick={() => onClickProvider(githubProvider)}>
                  <GrGithub className={'text-4xl transition-transform transform-gpu duration-200 hover:scale-105'}/>
                </button>
                <button onClick={() => onClickProvider(facebookProvider)}>
                  <GrFacebook className={'text-4xl transition-transform transform-gpu duration-200 hover:scale-105'}/>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

<<<<<<< HEAD
        <Link to='/registration'>
          <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">нет аккаунта !!!</button></Link>


        <section className={styles.giveChoose}>
          <div className={styles.line}></div>
          <p>or</p>
          <div className={styles.line}></div>
        </section>

        <section className={styles.socialMediaButtons}>
          {/* <button onClick={() => onClickProvider(googleProvider, true)}>
            <img src={google} alt="" />
          </button>
          <button onClick={() => onClickProvider(githubProvider)}>
            <img src={apple} alt="" />
          </button> */}
          <button onClick={() => onClickProvider(facebookProvider)}>
            <img src={facebook} alt="" />
          </button>
        </section>
      </section>
    </main>
=======
>>>>>>> main
  );
};
export default Login;
