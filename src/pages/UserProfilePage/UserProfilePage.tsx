import React from "react";
import styles from "./UserProfile.module.css";
import person from "../../assets/person_filled.svg";
import mail from "../../assets/mail.svg";
import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";


const UserProfilePage: React.FC = () => {
  const authRole = useAppSelector((state) => state.auth)
  console.log(authRole)

  return (
    <>
    {authRole ? (<>
      <Link to='/registration'><button>registration</button></Link>
    </>) : (<>
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
            <button type="submit" className={styles.user__btn}>
              Обновить профиль
            </button>
          </form>
        </div>
      </section>
    </>
    )}

    </>
    
  );
};

export default UserProfilePage;
