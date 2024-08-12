import './Question.css';
import useQuestion from '../../hooks/useQuestion';
import QuestionItem from '../../components/QuestionITem/QuestionItem';

function Question() {
  const { questions } = useQuestion();

  return (
    <main className='question'>
      <section className='question-header'>
        <p className='created-at'>{questions.createdAt}</p>
        <p className='header-title'>{questions.title}</p>
        <p className='question-description'>{questions.description}</p>
      </section>
      <hr />
      <section className='question-content-container'>
        {questions.contents.map((q) => (
          <QuestionItem
            key={q.id}
            id={q.id}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </section>
    </main>
  )
}

export default Question;