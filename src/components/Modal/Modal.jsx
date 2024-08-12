import './Modal.css';
import SoundWave from '../SoundWave/SoundWave';
import stopBtn from '/stop_btn.png';
import bigSpinner from '/spinner_icon_big.png';


function Modal({type, message, handleStopRecord}) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='status-container'>
          {(type == 'record') &&
            <SoundWave />
          }
          {(type == 'analysis') &&
            <img src={bigSpinner} className='big-spinner' />
          }
          <p>{message}</p>
        </div>
        {
          (type == 'record') &&
            <button className='stop-btn' onClick={handleStopRecord}>
              <img src={stopBtn} className='stop-btn'/>
            </button>
        }
      </div>
    </div>
  );
}

export default Modal;