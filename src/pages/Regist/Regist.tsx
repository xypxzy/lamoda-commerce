// regist request

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import styles from './Regist.module.scss'
import person from '../../assets/person_filled.svg'
import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
import eye from '../../assets/eye.svg'
import eyeblock from '../../assets/eyeslash.svg'
import backG from '../../assets/IMG_7286 1.png'

import { useState } from "react"

const Regist = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [booleanPassword, setBooleanPassword] = useState(true); 
    const [booleanConfirmPassword, setBooleanConfirmPassword] = useState(true); 

    // const addUser = async() => {
    //     try {
    //         await some
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return(
        <main>
            <section className={styles.imageBackground}>
                <img src={backG} alt="" />
            </section>
            <section>
                <h1>Регистрация</h1>
                <form action="POST" onSubmit={handleSubmit()}>
                    <div className="mb-6">
                        <img src={person} />
                        <input 
                            type="name" 
                            id="name" 
                            placeholder="name"
                            {...register('name', {
                                required: "Параметр обязателен",
                                maxLength: {
                                    value: 15,
                                    message: 'Ваше имя должно быть меньше 20 символов'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Ваше имя должно быть больше 3 символов'
                                },
                            })}
                            required
                            ></input>
                            {errors.name && <span className="error" role="alert"></span>}
                    </div>
                    <div className="mb-6">
                        <img src={mail} alt="" />
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="john.doe@company.com"
                            {...register('email', {
                                required: "Параметр обязателен",
                                maxLength: {
                                    value: 15,
                                    message: 'Ваше имя должно быть меньше 20 символов'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Ваше имя должно быть больше 3 символов'
                                },
                            })}
                            required
                        ></input>
                    </div>
                    <div className="mb-6">
                        <img src={lock} alt="" />
                        <input 
                            type={booleanPassword ? "text" : "password"}
    
                            id="password" 
                            placeholder="•••••••••"
                            {...register('password', {
                                required: "Параметр обязателен",
                                maxLength: {
                                    value: 15,
                                    message: 'Ваше имя должно быть меньше 20 символов'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Ваше имя должно быть больше 3 символов'
                                },
                            })}
                            required
                        ></input>
                        {booleanPassword ? (
                            <img src={eye} alt="" className={styles.imgEye} onClick={() => setBooleanPassword(false)}/>
                            ) : (
                                <img src={eyeblock} alt="" className={styles.imgEye} onClick={() => setBooleanPassword(true)}/>
                            )
                        }
                        
                    </div>
                    <div className="mb-6">
                        <img src={lock} alt="" />
                        <input 
                            type={booleanConfirmPassword ? "text" : "password"}
                            id="confirm_password" 
                            placeholder="•••••••••"
                            {...register('confirm_password', {
                                required: "Параметр обязателен",
                                maxLength: {
                                    value: 15,
                                    message: 'Ваше имя должно быть меньше 20 символов'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Ваше имя должно быть больше 3 символов'
                                },
                            })}
                            required
                        ></input>
                        {booleanConfirmPassword ? (
                            <img src={eye} alt="" className={styles.imgEye} onClick={() => setBooleanConfirmPassword(false)}/>
                            ) : (
                                <img src={eyeblock} alt="" className={styles.imgEye} onClick={() => setBooleanConfirmPassword(true)}/>
                            )
                        }
                        
                    </div>


                    <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Зарегистрироваться</button>
                </form>

                <Link to='/login' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">есть аккаунт</Link>

            </section>
        </main>
    )
}
export default Regist