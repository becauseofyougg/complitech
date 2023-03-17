import styles from "./index.module.scss";

export interface UsersData {
    id: number;
    image_ref: string;
    midname: string;
    surname: string;
    name: string;
};

export const DisplayUserData = (props: { users: Array<UsersData>, loading: boolean }) => {
    return (
        <div className={styles.usersList}>
            <h2 className={styles.title}>Users</h2>
            {props.users.length && !props.loading ? (
                <>
                    {props.users.map((item) => {
                        return (
                            <div className={styles.user} key={item.id}>
                                <div className={styles.image}>
                                    <img src={item.image_ref} alt="avatar" />
                                </div>
                                <div className={styles.userInfo}>
                                    {item.name && <p>{item.name}</p>}
                                    {item.midname && (
                                        <p className={styles.midname}>{item.midname}</p>
                                    )}
                                    {item.surname && (
                                        <p className={styles.surname}>{item.surname}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </>
            ) : null}
        </div>
    )
}
