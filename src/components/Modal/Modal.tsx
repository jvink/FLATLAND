import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";

import styles from "./Modal.module.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { open, onClose } = props;

  if (!open) return null;

  return (
    <ClientOnlyPortal selector="#modal">
      <div className={styles.backdrop}>
        <OutsideAlerter onClick={onClose}>
          <div className={styles.modal}>
            {/* CONTENT */}
            <button onClick={onClose}>Close modal</button>
            <h1>This is a modal!</h1>
            {/* /////// */}
          </div>
        </OutsideAlerter>
      </div>
    </ClientOnlyPortal>
  );
}
