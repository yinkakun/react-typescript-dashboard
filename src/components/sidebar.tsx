import styles from './sidebar.module.scss';
import samanthaAvatar from '../assets/images/samantha.png';
import { Link, useLocation } from 'react-router-dom';

const SIDEBAR_NAV_LINKS = [
  {
    route: 'dashboard',
    text: 'Dashboard',
  },
  {
    route: 'expenses',
    text: 'Expenses',
  },
  {
    route: 'wallets',
    text: 'Wallets',
  },
  {
    route: 'summary',
    text: 'Summary',
  },
  {
    route: 'accounts',
    text: 'Accounts',
  },
  {
    route: 'settings',
    text: 'Settings',
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.profileDetails}>
          <div className={styles.profileImageContainer}>
            <img src={samanthaAvatar} alt="Samantha" />
            <span className={styles.notification}>4</span>
          </div>
          <p className={styles.userName}>Samantha</p>
          <p className={styles.userEmail}>samantha@email.com</p>
        </div>

        <nav className={styles.sidebarNav}>
          <ul className={styles.sidebarNavList}>
            {SIDEBAR_NAV_LINKS.map(({ route, text }) => {
              return (
                <li key={route} className={styles.sidebarNavItem}>
                  <Link
                    className={
                      location.pathname === `/${route}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${route}`}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
