import IconName from '../IconName/IconName';
import Icon from '../Icon/Icon';

import styles from './IconCard.module.css';

function IconCard({ name, icon }: { name: string, icon: string }) {

    return (
        <div className={styles.iconCard}>
            <IconName name={name} />
            <Icon icon={icon} />
        </div>
    );
}

export default IconCard;