import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CakeIcon from '@material-ui/icons/Cake';
import { Link } from 'react-router-dom';

function Item(props) {

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_fname}>{props.data.fname}</div>
                <div className={styles.item_species}>{props.data.specie}</div>
                <div className={styles.item_birthday}><CakeIcon/> {props.data.birthday}</div>
                <div className={styles.item_personality}>{props.data.personality}</div>
                <div className={styles.item_series}>{props.data.serie}</div>  
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/"+props.data.id}> <NavigateNextIcon /></Link>
            </div>
        </div>
    );
}

export default Item;
