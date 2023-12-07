import AccordionItem from './AccordionItem';
import FilterBySeasonSubContent from './FilterBySeasonSubContent';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '../../utils/helpers';
import { useEffect } from 'react';

function FilterBySeason() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get('seasonly') || '';

  function handleChange(value) {
    searchParams.set('seasonly', value);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    if (!searchParams.get('seasonly')) {
      setSearchParams(() => {
        const newParams = new URLSearchParams('seasonly');
        newParams.delete('seasonly');
        return newParams;
      });
    }
  }, [searchParams]);

  const seasons = [
    { value: 'winter', label: 'Winter' },
    { value: 'summer', label: 'Summer' },
    { value: 'all-seasons', label: 'All seasons' },
  ];
  return (
    <AccordionItem label={'Seasonality'}>
      <div className="mt-5">
        <>
          {seasons.map((season) => (
            <SeasonItem
              key={season.value}
              season={season}
              params={params}
              onClick={handleChange}
            >
              <FilterBySeasonSubContent />
            </SeasonItem>
          ))}
        </>
      </div>
    </AccordionItem>
  );
}

export default FilterBySeason;

function SeasonItem({ season, params, children, onClick }) {
  return (
    <>
      <label
        className={classNames(
          params === season.value ? 'active' : '',
          'relative flex  items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] [&.active]:border-[#15A524]'
        )}
      >
        <input
          onChange={(e) => onClick(e.target.value)}
          onClick={(e) => {
            if (params === e.target.value) {
              onClick('');
            }
          }}
          type="radio"
          name="season"
          value={season.value}
          checked={season.value === params}
          className="absolute left-0 right-0 h-full w-full cursor-pointer opacity-0"
        />
        <p className="w-[26px]">
          <img src={`/img/${season.value}.svg`} className="w-full" alt="" />
        </p>
        <p className="ml-4">
          {season.label}
          <span className="ml-3 text-sm text-[#566879]">(112)</span>
        </p>
      </label>
      {season.value === 'winter' && children}
    </>
  );
}
