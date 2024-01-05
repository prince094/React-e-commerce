import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { classNames } from '../../../utils/helpers';

function CatalogFilterParameter({ parameters }: { parameters: string[] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  function handleChoose(value: any) {
    const height = value.height ? `height-is-${value.height}/` : '';
    const width = value.width ? `width-is-${value.width}/` : '';
    const diameter = value.diameter ? `diameter-is-${value.diameter}` : '';
    navigate(`/${location.pathname}/${height}${width}${diameter}`);
    console.log('Parsed Tire Size:', value);
  }

  function handleDisplay(tire: any) {
    const apostrof = tire.height ? '/' : '';
    if (tire.width && !tire.height) {
      return null;
    }
    return tire.height + apostrof + tire.width + 'R' + tire.diameter;
  }

  return (
    <div className="my-4  w-full items-center justify-between rounded bg-[#F5F8FC] p-[10px] lg:flex">
      <div className="-m-0.5 mb-2 flex flex-[85%] flex-wrap lg:mb-0">
        {parameters.map((item: any, index: number) => (
          <div
            key={index}
            className={classNames(
              true ? 'active' : '',
              handleDisplay(item) ? '' : 'hidden',
              'm-0.5 flex h-9 flex-[11%] cursor-pointer items-center justify-center rounded bg-white px-3 text-sm text-[#566879] md:h-[40px] md:text-base'
            )}
            onClick={() => handleChoose(item)}
          >
            {handleDisplay(item)}
          </div>
        ))}
      </div>
      <div className="flex flex-[15%] items-center justify-center px-3 text-sm font-bold md:text-base">
        <p className="font-semibold">Show all</p>
        <ChevronRightIcon className="ml-1 h-[22px] w-[22px]" />
      </div>
    </div>
  );
}

export default CatalogFilterParameter;
