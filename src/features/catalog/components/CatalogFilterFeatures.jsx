import FilterBySetting from '../../../components/catalog/FilterBySetting';
import FilterBySeason from '../../../components/catalog/FilterBySeason';
import FilterByPrice from '../../../components/catalog/FilterByPrice';

function CatalogFilterFeatures() {
  return (
    <div className="hidden max-w-[25%] overflow-hidden lg:block lg:flex-[25%]">
      <FilterBySetting />
      <FilterBySeason />
      <FilterByPrice />
    </div>
  );
}

export default CatalogFilterFeatures;
