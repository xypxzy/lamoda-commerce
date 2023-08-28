import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useAddAuthMutation} from "../../store/auth/authApi";
import cls from "./Regist.module.css";
import logo from "../../assets/svg/logo.svg";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
};

const Regist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();
  const [addUser, { isSuccess, isError }] = useAddAuthMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: FormData) => {
    try {
      if (data.password === data.confirm_password) {
        const res = await addUser({
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
          email: data.email,
          password: data.password,
          password2: data.confirm_password,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };


  if (isSuccess) {
    navigate("/login");
  }

  return (
    <section className={cls.register}>
      <div className={cls.register__container}>
        <Link to={"/"} className={cls.register__logo}>
          <img className="w-20 h-20 mr-2" src={logo} alt="logo" />
        </Link>
        <div className={cls.register__form_wrap}>
          <div className={cls.register__form_wrapper}>
            <h1 className={cls.register__form_title}>Создайте новый аккаунт</h1>
            <form className={cls.register__form_forms} action="#">
              <div>
                <label htmlFor="username" className={cls.register__form_label}>
                  Ваш username
                </label>
                <input
                  type="username"
                  id="username"
                  placeholder="username"
                  className={cls.register__form_input}
                  {...register("username", {
                    required: "Username является обязательным для заполнения.",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={cls.register__form_label}>
                  Ваш email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email является обязательным для заполнения.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`bg-gray-50 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } ${cls.register__form_input}`}
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="text-red-500  text-[12px] mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="firstName" className={cls.register__form_label}>
                  Имя
                </label>
                <input
                  type="firstName"
                  id="firstName"
                  placeholder="Alex"
                  className={cls.register__form_input}
                  {...register("first_name", {
                    required: "Имя является обязательным для заполнения.",
                  })}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className={cls.register__form_label}>
                  Фамилия
                </label>
                <input
                  type="lastName"
                  id="lastName"
                  placeholder="Alex"
                  className={cls.register__form_input}
                  {...register("last_name", {
                    required: "Фамилия является обязательным для заполнения.",
                  })}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" className={cls.register__form_label}>
                  Пароль
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className={cls.register__form_input}
                  {...register("password", {
                    required: "Пароль является обязательным для заполнения.",
                    minLength: {
                      value: 8,
                      message:
                        " Пароль должен состоять из не менее чем 8 символов.",
                    },
                    validate: (value) => {
                      return (
                        (/[A-Z]/.test(value) && /[0-9]/.test(value)) ||
                        "Пароль должен содержать заглавные и строчные буквы и цифры"
                      );
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className={cls.register__form_label}
                >
                  Подтвердить пароль
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className={cls.register__form_input}
                  {...register("confirm_password", {
                    required: "Потвердите пароль",
                    validate: (value) =>
                      value === getValues("password") || "Пароли не совподают",
                  })}
                />
                {errors.confirm_password && (
                  <p className="text-red-500  text-[12px] mt-1">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              <div>
                {isError && <p className="text-red-500  text-[12px] mt-1">
                  Есть такой пользователь
                </p>}
              </div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className={cls.register__form_signup__button}
              >
                Создать аккаунт
              </button>
              <p className={cls.register__form_register__link}>
                У вас уже есть аккаунт?
                <Link
                  to={"/login"}
                  className={cls.register__form_register__link__text}
                >
                  Зайти в аккаунт
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Regist;
