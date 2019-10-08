import styles from './index.css';
import Link from 'umi/link';
function UserLayout(props) {
  return (
    <div className={styles.normal}>
      <ul>
        <Link to='/user/a'><li>jump to user A Path</li></Link>
        <Link to='/user/b'><li>jump to user B Path</li></Link>
      </ul>
      <h1 className={styles.title}>Yay! Welcome to user!</h1>
      {props.children}
    </div>
  );
}

export default UserLayout;