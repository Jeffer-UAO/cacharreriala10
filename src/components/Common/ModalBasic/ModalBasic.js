import styles from './ModalBasic.module.scss';

export const ModalBasic = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

