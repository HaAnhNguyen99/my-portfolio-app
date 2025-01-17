import { useRouteError } from 'react-router-dom';
import errorImage from '../../assets/imgs/404.jpg';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-[300px] h-[300px] overflow-hidden rounded-xl shadow-xl mb-10">
        <img src={errorImage} alt="error" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-center gap-10">
        <h2 className="text-5xl font-bold  border-r-white border-r-2 pr-10">Oops!</h2>
        <div className="text-center">
          <p>Sorry, an unexpected error has occurred.</p>
          <p className="text-xl font-bold text-red-500">
            <i>&quot;{error.statusText || error.message}&quot;</i>
          </p>
        </div>
      </div>
    </div>
  );
}
