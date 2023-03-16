import styles from './index.module.scss';

interface Props {
  heading: string;
  text?: string;
  children?: any;
}
function Window({ heading, text, children }: Props) {
  return (
    <div className={styles.root}>
      <img src="/logo.png" alt="GSA logo" className={styles.logo} />
      <span className={styles.heading}>{heading}</span>
      {text ? <p className={styles.text}>{text}</p> : null}
      {children}
    </div>
  );
}

export default Window;
