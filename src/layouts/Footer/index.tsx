import packageJson from '../../../package.json';
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode;
}

function Footer({ children }: Props) {
  const version = packageJson.version || '0.0.0';
  return (
    <div className={styles.root}>
      &copy; {new Date().getFullYear()}, GSA FedRAMP Automation Administrative
      Portal, v{version}
    </div>
  );
}
export default Footer;
