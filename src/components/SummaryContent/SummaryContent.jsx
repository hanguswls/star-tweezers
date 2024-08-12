import './SummaryContent.css'

function SummaryContent({title, description, type}) {
  return (
    <section className='summary-content'>
      <p className='content-title'>{title}</p>
      {(type == 'summary') ? (
        <ol className='summary-ordered-list'>
          {description.map((s) => (
            <li className='summary-item' key={s.id}>
            <p className='summary-item-title'>{s.title}</p>
            <p className='summary-description'>{s.description}</p>
          </li>
          ))}
        </ol>
      ) : (
        <p className='summary-description'>{description}</p>
      )}
    </section>
  )
}

export default SummaryContent;