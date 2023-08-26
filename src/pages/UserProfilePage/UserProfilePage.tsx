import React, {useState} from "react";
import cls from "./UserProfile.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {SlOptions} from 'react-icons/sl'
import {useForm} from "react-hook-form";
import {useGetUserDataQuery} from "../../store/auth/authApi.ts";
import {auth} from "../../config/firebase-config.ts";
import {signOut} from "firebase/auth";
import {setAuthStatus} from "../../store/auth/authSlice.ts";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
};

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const {isAuth} = useAppSelector((state) => state.auth)

  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch()
  const {data: userData} = useGetUserDataQuery('')
  console.log(userData)
  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues
  } = useForm<FormData>();

  const handleToLogin = () => {
    navigate('/login')
  }
  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    // Здесь вы можете добавить логику сохранения изменений, например, отправку на сервер
    setIsEditing(false);
  }

  const logOut = async() => {
    if(auth){
      try {
        await signOut(auth)
      } catch (error) {
        console.log(error)
      }
    } else {
      localStorage.removeItem('token')
    }
    localStorage.removeItem('token')
    dispatch(setAuthStatus(false))
  }

  return (
    <>
      {
        isAuth ?
          (
            <section className={cls.profile_card}>
              <div className={cls.profile_card__container}>
                <div className={cls.profile_card__information}>
                  <img className={cls.profile_card__information_image} src="/docs/images/people/profile-picture-3.jpg"
                       alt="Bonnie image"/>
                  {isEditing ? (
                    <section className={'flex flex-col gap-4'}>
                      <div>
                        <label htmlFor="username" className={cls.register__form_label}>Ваш username</label>
                        <input
                          type="username"
                          id="username"
                          placeholder="username"
                          className={cls.profile_card__information_input}
                          {...register('username', {
                            required: 'Username является обязательным для заполнения.'
                          })}
                        />
                        {errors.username && <p className="text-red-500 text-[12px] mt-1">{errors.username.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className={cls.register__form_label}>Ваш email</label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Email является обязательным для заполнения.",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} ${cls.profile_card__information_input}`}
                          placeholder="name@company.com"
                        />
                        {errors.email && <p className="text-red-500  text-[12px] mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="password" className={cls.register__form_label}>Пароль</label>
                        <input
                          type="password"
                          id="password"
                          placeholder="••••••••"
                          className={cls.profile_card__information_input}
                          {...register("password", {
                            required: "Пароль является обязательным для заполнения.",
                            minLength: {
                              value: 8,
                              message: " Пароль должен состоять из не менее чем 8 символов."
                            },
                            validate: (value) => {
                              return (
                                /[A-Z]/.test(value) &&
                                /[0-9]/.test(value) ||
                                "Пароль должен содержать заглавные и строчные буквы и цифры"
                              );
                            }
                          })}
                        />
                        {errors.password && <p className="text-red-500 text-[12px] mt-1">{errors.password.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className={cls.register__form_label}>Подтвердить
                          пароль</label>
                        <input
                          type="password"
                          id="confirm-password"
                          placeholder="••••••••"
                          className={cls.profile_card__information_input}
                          {...register("confirm_password", {
                            required: "Потвердите пароль",
                            validate: (value) => value === getValues("password") || "Пароли не совподают"
                          })}
                        />
                        {errors.confirm_password &&
                            <p className="text-red-500  text-[12px] mt-1">{errors.confirm_password.message}</p>}
                      </div>
                      <div className="flex mt-4 space-x-3 md:mt-6">
                        <button
                          className={cls.profile_card__information_edit}
                          onClick={handleSubmit(handleSaveClick)}
                        >
                          Сохранить
                        </button>
                        <button
                          className={cls.profile_card__information_logout}
                          onClick={() => setIsEditing(false)}
                        >
                          Отменить
                        </button>
                      </div>
                    </section>
                  ) : (
                    <div className={'flex flex-col  gap-2'}>
                      <span className={'flex items-center'}><p className={'text-lg text-blue-600'}>Username</p>: username</span>
                      <span className={'flex items-center'}><p className={'text-lg text-blue-600'}>Email</p>: username@emal.com</span>
                      <span className={'flex items-center'}><p className={'text-lg text-blue-600'}>First Name</p>: First Name</span>
                      <span className={'flex items-center'}><p className={'text-lg text-blue-600'}>Last name</p>: Last name</span>
                    </div>
                  )}
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    {!isEditing &&
                        <>
                            <button className={cls.profile_card__information_edit} onClick={handleEditClick}>Изменить
                            </button>
                            <Link to={'/login'} onClick={logOut} className={cls.profile_card__information_logout}>Выйти</Link>
                        </>
                    }
                  </div>
                </div>
              </div>
            </section>
          ) :
          (<div className={'h-[50vh] flex flex-col justify-center'}>
            <div id="snter-m">
              <button id="button-auth"
                      className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none
                      max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600
                       dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                      onClick={handleToLogin}
              >
                SingIn
              </button>
            </div>
          </div>)
      }
    </>

  );
};

export default UserProfilePage;
