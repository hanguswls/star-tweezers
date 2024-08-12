import './QuestionItem.css'
import { useState } from 'react';

function QuestionItem({id, question, answer}) {
  const [openAnswer, setOpenAnswer] = useState(null);

  const toggleAnswer = (id) => {
    setOpenAnswer(openAnswer === id ? null : id);
  };

  return (
    <section className='question-content' key={id}>
      <p className='content-title'>문제 {id}</p>
      <div className='question-container'>
        <span className='question-prefix'>문제: </span>
        <span className='question-text'>{question}</span>
      </div>
      <button className='answer-toggle-btn' onClick={()=>toggleAnswer(id)}>
        <span>
          {openAnswer === id ? '▼' : '▶'} 답변 보기
        </span>
      </button>
      {openAnswer === id && (
          <p className='answer'>{answer}</p>
        )}
    </section>
  );
}

export default QuestionItem;