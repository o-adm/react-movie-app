import { useKey } from "./Custom Hooks/useKey";

export default function Modal({ children, onCloseModal }) {
  useKey("Escape", function () {
    onCloseModal();
  });

  return (
    <div className="modal-wrapper">
      <div className="modal modal--animated">
        <span className="modal__close" onClick={onCloseModal}>
          X
        </span>
        {children}
      </div>
    </div>
  );
}
