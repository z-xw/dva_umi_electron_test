import styles from './index.css';
import Link from 'umi/link';
function MineLayout(props) {
  return (
    <div className={styles.normal}>
      <ul>
        <Link to='/mine/a'><li>jump to mine A Path</li></Link>
        <Link to='/mine/b'><li>jump to mine b Path</li></Link>
      </ul>
      <h1 className={styles.title}>Yay! Welcome to mine!</h1>
      {props.children}
    </div>
  );
}

export default MineLayout