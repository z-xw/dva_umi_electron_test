import styles from './index.css';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
        <ul>
        <Link to='/user/'><li>jump to user </li></Link>
        <Link to='/mine/'><li>jump to mine</li></Link>
      </ul>
      <h1 className={styles.title}>Yay! Welcome to desktop-es!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
