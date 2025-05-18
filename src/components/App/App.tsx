import styles from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';

export default function App() {
    return <div className={styles.app}>
        <CafeInfo/>
    </div>;
}