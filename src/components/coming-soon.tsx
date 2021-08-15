import { File } from 'react-kawaii';
import { Link } from 'react-router-dom';
import styles from './coming-soon.module.scss';

const ComingSoon = () => {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.comingSoonCard}>
        <File size={200} mood="ko" color="#83D1FB" />
        <h1 className={styles.comingSoonTitle}>
          Not Coming Anytime Soon Bruh... Only the{' '}
          <Link to="/expenses">Expenses</Link> component is implemented - And
          its not even responsive. Yeah, I'm bad, I know 🦹
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
