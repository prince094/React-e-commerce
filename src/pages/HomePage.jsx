import CalcContent from '../features/calc/Calc';
import NewsContent from '../components/news/News';

function HomePage() {
  return (
    <div className="py-24 pb-12">
      <CalcContent />
      <NewsContent />
    </div>
  );
}

export default HomePage;
