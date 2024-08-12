import './Headline.css';
import useHeadline from "../../hooks/useHeadline"

function Headline() {
  const {
    headline,
    titleRef,
    descriptionRef,
    handleTitleChange,
    handleDescriptionChange,
    handleUpdateTitle,
    handleUpdateDescription
  } = useHeadline();

  return (
    <section className='headline'>
    <p className='created-at'>{headline.createdAt}</p>
    <textarea
      ref={titleRef}
      className='headline-title'
      value={headline.title}
      onChange={(e)=>handleTitleChange(e.target.value)}
      onBlur={(e)=>handleUpdateTitle(e.target.value)}
    />
    <textarea
      ref={descriptionRef}
      className='headline-description'
      value={headline.description}
      onChange={(e)=>handleDescriptionChange(e.target.value)}
      onBlur={(e)=>handleUpdateDescription(e.target.value)}
    />
  </section>
  )
}

export default Headline;