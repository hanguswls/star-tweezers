import './Modal.css';
import stopBtn from '/stop_btn.png';

function Modal({figure, message, onStopClick}) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='status-container'>
          {figure}
          <p>{message}</p>
        </div>
        <button className='stop-btn' onClick={onStopClick}>
          <img src={stopBtn} />
        </button>
      </div>
    </div>
  );
}

export default Modal;