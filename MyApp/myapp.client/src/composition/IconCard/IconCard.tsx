import IconName from '../IconName/IconName';
import Icon from '../Icon/Icon';

function IconCard({ name, icon }: { name: string, icon: string }) {

    return (
        <div className="iconCard">
            <IconName name={name} />
            <Icon icon={icon} />
        </div>
    );
}

export default IconCard;