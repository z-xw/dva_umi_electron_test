import styles from '../index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.userCenter}>
     user a path
     <Link to='/mine/a'>jump to /mine/a</Link>
    </div>
  );
}
