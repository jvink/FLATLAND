import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Menu from "./Menu";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <div>
          <h3>Header!</h3>
        </div>
        <div>
          <button
            className={styles.header__switch}
            onClick={() => setOpen(!open)}
          >
            <Image
              src={`/icons/${open ? "close" : "menu"}.svg`}
              width={32}
              height={32}
              alt={open ? "close menu" : "open menu"}
            />
          </button>
        </div>
      </header>
      {open && <Menu open={open} />}
    </>
  );
}
