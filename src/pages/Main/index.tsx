import { FC } from "react";
import Floor from "../../features/Floor";
import Users from "../../features/Users";
import styles from "./index.module.scss";

export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Users />
      <Floor />
    </div>
  );
};
