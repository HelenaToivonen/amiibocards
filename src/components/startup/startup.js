import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';

function Startup (props) {

    const auth = useAuth();

    const signin = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        
    }

    return (
        <div className={styles.startup}>
            <h1>My amiibo cards</h1>
            <div>Welcome to My amiibo cards!<br/>
                Sign in with your Google Account.
            </div>
            <Button onClick={signin} primary>Sign In</Button>

        </div>
    );
}

export default Startup;