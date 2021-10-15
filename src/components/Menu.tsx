import Link from "next/link";

import styles from "./Menu.module.css";

interface MenuProps {
  open: boolean;
}

export default function Menu(props: MenuProps) {
  const { open } = props;

  return (
    <div className={styles["menu--wrapper"]}>
      <div className={styles.menu}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
