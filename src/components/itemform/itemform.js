import styles from './itemform.module.scss';
import Button from '../../shared/uibuttons';
import useForm from '../../shared/useform';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function ItemForm(props) {

    const history = useHistory();

    const submit = () => {
        let storedvalues = Object.assign({}, values);
        storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
        props.onItemSubmit(storedvalues);
        history.push("/");
    }

    const initialState = props.data ? props.data : {

        specie: props.species ? props.species[0] : "",
        fname: "",
        birthday: "",
        personality: "",
        serie: ""
    
    };


    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);

    const handleCancel = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleDelete = (event) => {
        event.preventDefault();
        props.onItemDelete(values.id);
        history.push("/");
    }

    return(
      <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>

             <div className={styles.form_row}>
             <div>
                    <label htmlFor="fname">Name</label>
                    <input type="text" name="fname" onChange={handleChange} value={values.fname} required />
                 </div>
                 <div>
                     <label htmlFor="serie">Series</label>
                     <select name="serie" onChange={handleChange} value={values.series} required >
                        { props.series.map( (serie) =>  <option key={serie} value={serie}>{serie} </option> ) }
                     </select>
                 </div>
              </div>   

              <div className={styles.form_row}>
              <div>
                     <label htmlFor="specie">Species</label>
                     <select name="specie" onChange={handleChange} value={values.species}>
                        { props.species.map( (specie) =>  <option key={specie} value={specie}>{specie}</option> ) }
                     </select>
                 </div>

                 <div>
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" name="birthday" onChange={handleChange} value={values.birthday} required />
                 </div>
         

                </div>
                
              <div className={styles.form_row}>
                 <div>
                    <label htmlFor="personality">Personality</label>
                    <input type="text" name="personality" onChange={handleChange} value={values.personality} required />
                 </div>
                </div>
               

                 <div className={styles.form_row}>
                    <div>
                        <Button onClick={handleCancel}>CANCEL</Button>
                    </div>
                 <div>
                    <Button primary type="submit">{ props.data ? "SAVE" : "ADD" }</Button>
                 </div>
                </div>

                { props.onItemDelete ?
                  <div className={styles.form_row}>
                      <div>
                          <Button onClick={handleDelete}>DELETE</Button>
                      </div>                
                      <div></div>
                     </div> : "" }
            </div>
          </form>
      </div>
    );
}

export default ItemForm;