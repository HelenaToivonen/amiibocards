import styles from './settings.module.scss';
import Button from '../../shared/uibuttons';
import { useUser, useAuth } from 'reactfire';

function Settings(props) {

    const user = useUser();
    const auth = useAuth();

    const signOut = async () => {
        await auth.signOut();
    }

    const handleSpecieSubmit = (event) => {
        event.preventDefault();
        const newspecie = event.target.elements.specie.value;
        props.onSpecieSubmit(newspecie);
        event.target.elements.specie.value = "";
        
    }

    const handleSerieSubmit = (event) => {
        event.preventDefault();
        const newserie = event.target.elements.serie.value;
        props.onSerieSubmit(newserie);
        event.target.elements.serie.value = "";
        
    }

    return (
        <div className={styles.settings}>
            <h2>Settings</h2>

            <h3>Profile</h3>

            <div className={styles.settings_profile}>
                <div className={styles.settings_user}>
                    <div><img src={user.data.photoURL} alt="" /></div>
                    <div>{user.data.displayName}<br />{user.data.email}</div>
                </div>
                <div>
                <Button primary onClick={signOut}>Sign Out</Button>
                </div>
            </div>


            <h3>Species</h3>
            <div className={styles.settings_species}>
                {props.species.map((specie) => <div key={specie}>{specie}</div>)}
                <form onSubmit={handleSpecieSubmit}>
                    <div className={styles.typeform}>
                        <input type="text" name="specie" />
                        <Button type="submit" primary>Add</Button>
                    </div>
                </form>
            </div>
            <h3>Series</h3>
            <div className={styles.settings_series}>
                {props.series.map((serie) => <div key={serie}>{serie}</div>)}
                <form onSubmit={handleSerieSubmit}>
                    <div className={styles.typeform}>
                        <input type="text" name="serie" />
                        <Button type="submit" primary>Add</Button>
                    </div>
                </form>
            </div>
           </div> 
    );
}

export default Settings;