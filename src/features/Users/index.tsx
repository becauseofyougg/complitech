import { FC, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { DisplayUserData, UsersData } from "../../entities/DisplayUserData";
import { Pagination } from "../../entities/Pagination";
import api from "../../shared/api/api";

import styles from "./index.module.scss";

const Users: FC = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [page, setPage] = useState<number>(1);
  const [usersCount, setUsersCount] = useState(1);
  const [users, setUsers] = useState<Array<UsersData>>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    const getUserData = async () => {
      try {
        const getUsersRes = await api.getUsers(cookie.token, page)

        setUsersCount(getUsersRes.data.data.num_pages);
        const listOfPeople = getUsersRes.data.data.people;

        const imagesRes = await Promise.all([
          getImageHandler(listOfPeople[0].image_ref),
          getImageHandler(listOfPeople[1].image_ref),
          getImageHandler(listOfPeople[2].image_ref),
        ])

        const finalData = imagesRes.map((item, index) => {
          return {
            image_ref: item,
            id: listOfPeople[index].id,
            name: listOfPeople[index].name,
            surname: listOfPeople[index].surname,
            midname: listOfPeople[index].midname,
          };
        });
        setUsers(finalData);
      } catch (error) {
        console.log(error)
      }
    }

    getUserData();
    setLoading(false);
  }, [page]);

  const getImageHandler = async (url: string) => {
    const picture = await api.getImage(cookie.token, url);
    return URL.createObjectURL(picture.data);
  };


  return (
    <div className={styles.userComponent}>
      <DisplayUserData loading={loading} users={users} />
      <Pagination
        className={styles.paginationBar}
        currentPage={page}
        totalCount={usersCount}
        pageSize={3}
        onPageChange={(numberOfPage) => setPage(numberOfPage)}
      />
    </div>
  );
};
export default Users;