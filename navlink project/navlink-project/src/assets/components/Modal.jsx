import { createPortal } from "react-dom";

function Modal({ isOpen, setIsOpen }) {
  return createPortal(
    <div
      className={`container border bg-light shadow ${isOpen ? "" : "d-none"}`}
    >
      <h4 className="text-center mt-5 text-muted">Sign In</h4>
      <div className="row px-3 py-3">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Enter User"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <input
            type="Password"
            placeholder="Enter Password"
            className="form-control"
          />
        </div>
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary ms-3"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
