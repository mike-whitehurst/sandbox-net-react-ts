import styles from './IconName.module.css';

function IconName({ name }: { name: string }) {

    return (
        <div className={styles.iconName}>{ name }</div>
    );
}

export default IconName;