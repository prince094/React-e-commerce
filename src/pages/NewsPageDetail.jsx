import { CalendarDaysIcon, EyeIcon } from '@heroicons/react/24/outline';
import BreadCrumb from '../ui/BreadCrumb';

function NewsPageDetail() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className=" text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Outpost AT — новинка от Nokian для всех типов дорог
        </h2>
        <div className="mt-6 gap-4 md:flex lg:gap-[50px]">
          <div className="basis-[70%]">
            <div className="mb-4  flex md:mb-8">
              <p className="flex items-center">
                <CalendarDaysIcon className="h-6 w-6 text-extragray" />
                <span className="ml-[6px] font-medium text-extragray">
                  03 january, 11:51
                </span>
              </p>
              <p className="ml-3 flex items-center">
                <EyeIcon className="h-6 w-6 text-extragray" />
                <span className="ml-[6px] font-medium text-extragray">378</span>
              </p>
            </div>
            <p className="mb-5 sm:text-lg">
              Известный финский производитель выпустил на рынок новую модель
              летних покрышек специально для внедорожников, кроссоверов и легких
              грузовиков. Новинка представлена в сегменте All-Terrain и доступна
              в 45 типоразмерах от 15 до 22 дюймов.
            </p>
            <p className="mb-5 sm:text-lg">
              Модель Outpost AT от Nokian позиционируется как шина для сложных
              маршрутов, на которых она обеспечивает высокий уровень сцепных
              свойств. Помимо этого резина отличается исключительной надежностью
              и устойчива к физическим повреждениям.
            </p>
          </div>
          <div className="w-full basis-[30%]">
            <img className="w-full" src="/img/news.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPageDetail;
