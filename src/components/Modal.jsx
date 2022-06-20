const Modal = ({ onClose, children }) => {
    return (
        <div>
            <div>
                <button onClick={onClose}></button>
                <div id={children}>{children}</div>
            </div>
        </div>
    )
}

export default Modal;