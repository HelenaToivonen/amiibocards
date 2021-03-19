import styles from './additem.module.scss';
import ItemForm from '../../components/itemform';

function AddItem(props) {
    return(
        <div className={styles.additem}>
        <h2>Add new villager</h2>
        <ItemForm 
           onItemSubmit={props.onItemSubmit} 
           species={props.species} 
           series={props.series}  
           />
        </div>
    );
}

export default AddItem;