// regist request

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./Regist.module.css";
import person from "../../assets/person_filled.svg";
import lock from "../../assets/lock.svg";
import eye from "../../assets/eye.svg";
import eyeblock from "../../assets/eyeslash.svg";
import { useAddAuthMutation } from "../../store/auth/authApi";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const Regist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [booleanPassword, setBooleanPassword] = useState(true);
  const [booleanConfirmPassword, setBooleanConfirmPassword] = useState(true);
  const [addUser, { isSuccess, error, isError, isLoading }] =
    useAddAuthMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    if (data.password === data.confirm_password) {
      try {
        const res = await addUser({
          first_name: data.first_name,
          username: data.name,
          email: data.email,
          password: data.password,
          password2: data.confirm_password,
          last_name: data.last_name,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };
  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    console.log("login is success");
    navigate("/login");
  }

  return (
    <main>
      <section>
        <button>на главную</button>
        <h1>Регистрация</h1>
        <form action="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <img src={person} alt={"person"} />
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
            {errors?.name && (
              <span className="error" role="alert">
                {errors?.name?.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-6">
            <img src={person} alt={"person"} />
            <input
              type="first_name"
              id="first_name"
              placeholder="first_name"
              {...register("first_name", {
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
            {errors?.name && (
              <span className="error" role="alert">
                {errors?.name?.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-6">
            <img src={person} alt={"person"} />
            <input
              type="last_name"
              id="last_name"
              placeholder="last_name"
              {...register("last_name", {
                required: "Параметр обязателен",
                maxLength: {
                  value: 15,
                  message: "Ваша фамилия должна быть меньше 20 символов",
                },
                minLength: {
                  value: 3,
                  message: "Ваше фамилия должна быть больше 3 символов",
                },
              })}
              required
            ></input>
            {errors?.name && (
              <span className="error" role="alert">
                {errors?.name?.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-6">
            {/*<img src={} alt="" />*/}
            <input
              type="email"
              id="email"
              placeholder="john.doe@company.com"
              {...register("email", {
                required: "Параметр обязателен",
              })}
              required
            ></input>
            {errors?.name && (
              <span className="error" role="alert">
                {errors?.name?.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-6">
            <img src={lock} alt="" />
            <input
              type={booleanPassword ? "text" : "password"}
              id="password"
              placeholder="•••••••••"
              {...register("password", {
                required: "Параметр обязателен",
                minLength: {
                  value: 3,
                  message: "Ваш пароль должен быть больше 5 символов.",
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
            {errors?.name && (
              <span className="error" role="alert">
                {errors?.name?.message?.toString()}
              </span>
            )}
          </div>
          <div className="mb-6">
            <img src={lock} alt="" />
            <input
              type={booleanConfirmPassword ? "text" : "password"}
              id="confirm_password"
              placeholder="•••••••••"
              {...register("confirm_password", {
                required: "Параметр обязателен",
                minLength: {
                  value: 3,
                  message: "Ваш пароль должен быть больше 5 символов.",
                },
              })}
              required
            ></input>
            {booleanConfirmPassword ? (
              <img
                src={eye}
                alt=""
                className={styles.imgEye}
                onClick={() => setBooleanConfirmPassword(false)}
              />
            ) : (
              <img
                src={eyeblock}
                alt=""
                className={styles.imgEye}
                onClick={() => setBooleanConfirmPassword(true)}
              />
            )}
            {errors?.name && (
              <span className="error" role="alert">
                {errors?.name?.message?.toString()}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Зарегистрироваться
          </button>
        </form>

        <Link to="/login">
          <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            есть аккаунт
          </button>
        </Link>
      </section>
    </main>
  );
};
export default Regist;
