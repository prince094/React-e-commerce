import { ChangeEvent, MouseEventHandler } from 'react';
import { classNames } from '../../../utils/helpers.ts';
import { SeasonProps } from './FilterBySeason.tsx';

type SeasonItemProps = {
  season: SeasonProps;
  params: string;
  children: string;
  onClick: (value: string) => void;
};

function SeasonItem({ season, params, children, onClick }: SeasonItemProps) {
  return (
    <>
      <label
        className={classNames(
          params === season.value ? 'active' : '',
          'relative flex  items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] [&.active]:border-[#15A524]'
        )}
      >
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (params === e.target.value) {
              onClick('');
            }
          }}
          onClick={(e: MouseEvent<HTMLInputElement>) => {
            onClick(e.target.value);
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

export default SeasonItem;
