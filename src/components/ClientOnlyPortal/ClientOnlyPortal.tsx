import { ReactElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ClientOnlyPortalProps {
  children: ReactElement;
  selector: string;
}

export default function ClientOnlyPortal(props: ClientOnlyPortalProps) {
  const { children, selector } = props;
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);

    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
