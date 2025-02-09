import styles from './CloudBackground.module.scss';
// import Image from 'next/image';

export default function CloudBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.child1}></div>
      <div className={styles.child2}></div>
      <div className="absolute inset-0 w-full">{children}</div>
    </div>
  );
}
