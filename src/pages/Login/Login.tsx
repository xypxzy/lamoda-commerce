// login and token request

import mail from "../../assets/mail.svg";
import lock from "../../assets/lock.svg";
import eye from "../../assets/eye.svg";
import eyeblock from "../../assets/eyeslash.svg";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import styles from "./Login.module.scss";
import {useState} from "react";
import {facebookProvider, githubProvider, googleProvider,} from "../../config/firebase-config";
import socialMediaAuth from "../../service/auth";

import google from "../../assets/image 2.svg";
import facebook from "../../assets/image 3.svg";
import apple from "../../assets/image 4.svg";
import {useAddTokenMutation} from "../../store/auth/authApi";
import {toggle} from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [booleanPassword, setBooleanPassword] = useState(true);
  const dispatch = useDispatch()
  const [addToken, {data, isError, error, isSuccess}] = useAddTokenMutation()
  const navigate = useNavigate()

/////
  const onClickProvider = (provider: any) => {
    socialMediaAuth(provider)
      .then((user) => {
        console.log("Authenticated user:", user);
        console.log('success')
        dispatch(toggle(true))
        navigate('/')
      })
      .catch((error) => {
        console.error("Authentication error:", error);
      });
  };

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

      
  return (
    <main>
      <section>
        <h1>Вход в личный кабинет</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <img src={mail} alt={'mail'}/>
            <input
              type="name"
              id="name"
              placeholder="name"
              {...register("name", {
                required: "Параметр обязателен",
                maxLength: {
                  value: 15,
                  message: "Ваше имя должно быть меньше 20 символов",
                },
                minLength: {
                  value: 3,
                  message: "Ваше имя должно быть больше 3 символов",
                },
              })}
              required
            ></input>
            {errors.name && <span className="error" role="alert">errors.name</span>}
          </div>
          <div className="mb-6">
            <img src={lock} alt="" />
            <input
              type={booleanPassword ? "password" : "text"}
              id="password"
              placeholder="•••••••••"
              {...register("password", {
                required: "Параметр обязателен",
                maxLength: {
                  value: 15,
                  message: "Ваше имя должно быть меньше 20 символов",
                },
                minLength: {
                  value: 3,
                  message: "Ваше имя должно быть больше 3 символов",
                },
              })}
              required
            ></input>
            {booleanPassword ? (
              <img
                src={eye}
                alt=""
                className={styles.imgEye}
                onClick={() => setBooleanPassword(false)}
              />
            ) : (
              <img
                src={eyeblock}
                alt=""
                className={styles.imgEye}
                onClick={() => setBooleanPassword(true)}
              />
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Войти
          </button>
        </form>

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
  );
};
export default Login;
