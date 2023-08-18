import React from "react";
import styles from "./UserProfile.module.css";
import person from "../../assets/person_filled.svg";
import mail from "../../assets/mail.svg";

const UserProfilePage: React.FC = () => {
  return (
    <section className={styles.user}>
      <h1 className="mb-5">Профиль</h1>
      <div className={styles.user__container}>
        <div className={styles.user__info}>
          <div className="w-full max-w-md p-6 ">
            <h2 className="text-2xl font-semibold mb-4">
              Информация о пользователе
            </h2>
            <div className="space-y-2">
              <div>
                <span className="font-semibold">Имя:</span>
                <span className="ml-2">John</span>
              </div>
              <div>
                <span className="font-semibold">Фамилия:</span>
                <span className="ml-2">Smith</span>
              </div>
            </div>
          </div>
        </div>
        <form action="PUT">
          <div className="mb-6">
            <img src={person} />
            <input type="name" id="name" placeholder="name"></input>
          </div>
          <div className="mb-6">
            <img src={mail} alt="" />
            <input
              type="email"
              id="email"
              placeholder="john.doe@company.com"
            ></input>
          </div>
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Обновить профиль
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserProfilePage;
