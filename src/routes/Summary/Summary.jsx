import './Summary.css';
import useSummary from '../../hooks/useSummary';
import SummaryContent from '../../components/SummaryContent/SummaryContent';
import Headline from '../../components/Headline/Headline'
import useHeadline from '../../hooks/useHeadline';

function Summary(id) {
  const { headline } = useHeadline(id);
  const { summaries } = useSummary(id);

  return (
    <main className='summary'>
      <Headline headline={headline}/>
      <hr />
      <section className='summary-content-container'>
        <SummaryContent
          title='이게 핵심이에요!'
          description={summaries.mainPoint}
        />
        <SummaryContent
          type='summary'
          title='이렇게 정리했어요!'
          description={summaries.summary}
        />
        <SummaryContent
          title='시험에 나올 수 있어요!'
          description={summaries.examPoint}
        />
      </section>
    </main>
  );
}

export default Summary;