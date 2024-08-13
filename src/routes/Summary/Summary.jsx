import './Summary.css';
import useSummary from '../../hooks/useSummary';
import Headline from '../../components/Headline/Headline'
import useHeadline from '../../hooks/useHeadline';

function Summary(id) {
  const { headline } = useHeadline(id);
  const { htmlCode } = useSummary(id);

  return (
    <main className='summary'>
      <Headline headline={headline}/>
      <hr />
      <section className='summary-container' dangerouslySetInnerHTML={{__html: htmlCode}}>
      </section>
    </main>
  );
}

export default Summary;
