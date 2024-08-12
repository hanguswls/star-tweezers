import './Question.css';
import useQuestion from '../../hooks/useQuestion';
import QuestionItem from '../../components/QuestionITem/QuestionItem';
import Headline from '../../components/Headline/Headline'
import useHeadline from '../../hooks/useHeadline';

function Question() {
  const {headline} = useHeadline();
  const {questions} = useQuestion();

  return (
    <main className='question'>
      <Headline headline={headline}/>
      <hr />
      <section className='question-content-container'>
        {questions.map((q) => (
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