import { ReactElement, useEffect, useRef } from "react";

interface OutsideAlerterProps {
  children: ReactElement;
  onClick: () => void;
}

export default function OutsideAlerter(props: OutsideAlerterProps) {
  const { children, onClick } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    function handleClickOutside(event: globalThis.MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) return;

      onClick();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClick]);

  return <div ref={ref}>{children}</div>;
}
