import './Record.css';
import recordBtn from '/record_btn.png';
import stopBtn from '/stop_btn.png';
import bigSpinnerIcon from '/spinner_icon_big.png';
import Modal from '../../components/Modal/Modal';
import useRecord from '../../hooks/useRecord';

function Record() {

  const {
    isRecording,
    isAnalyzing,
    handleStartRecord,
    handleStopRecord,
    handleStopAnalysis
  } = useRecord();

  return (
    <>
      <main className='record'>
        <section className='record-content'>
          <p className='record-title'>새로운 정리 추가</p>
          <p className='record-description'>
            녹음 아이콘을 클릭하면 녹음을 시작할 수 있어요.
            녹음된 파일을 업로드하려면
            <br />
            그 아래의 녹음 파일 업로드 버튼을 눌러주세요.
          </p>
        </section>
        <section className='record-btns'>
          <button className='record-btn' onClick={handleStartRecord}>
            <img src={recordBtn} />
          </button>
          <button className='record-upload-btn'>녹음 파일 업로드</button>
        </section>
      </main>
      {
        isRecording && (
          <Modal>
            <div className='status-container'>
              <div className='sound-wave'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
                <div className='box5'></div>
              </div>
              <p>녹음중이에요...</p>
            </div>
            <button className='stop-btn' onClick={handleStopRecord}>
              <img src={stopBtn} />
            </button>
          </Modal>
        )
      }
      {
        isAnalyzing && (
          <Modal>
            <div className='status-container'>
              <img src={bigSpinnerIcon} className='big-spinner' />
              <p>분석중이에요...</p>
            </div>
            <button className='stop-btn' onClick={handleStopAnalysis}>
              <img src={stopBtn} />
            </button>
          </Modal>
        )
      }
  </>
  )
}

export default Record;