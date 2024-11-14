import styles from './Icon.module.css';

function Icon({ icon }: { icon: string }) {

    return (
        <div className={styles.icon}>{ icon }</div>
    );
}

export default Icon;