import './Question.css';
import useQuestion from '../../hooks/useQuestion';
import QuestionItem from '../../components/QuestionITem/QuestionItem';

function Question() {
  const {
    question,
    titleRef,
    descriptionRef,
    handleTitleChange,
    handleDescriptionChange,
    handleUpdateTitle,
    handleUpdateDescription
  } = useQuestion();

  return (
    <main className='question'>
      <section className='question-header'>
        <p className='created-at'>{question.createdAt}</p>
        <textarea
          ref={titleRef}
          className='header-title'
          value={question.title}
          onChange={(e)=>handleTitleChange(e.target.value)}
          onBlur={(e)=>handleUpdateTitle(e.target.value)}
        />
        <textarea
          ref={descriptionRef}
          className='header-description'
          value={question.description}
          onChange={(e)=>handleDescriptionChange(e.target.value)}
          onBlur={(e)=>handleUpdateDescription(e.target.value)}
        />
      </section>
      <hr />
      <section className='question-content-container'>
        {question.contents.map((q) => (
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