import Header from './components/Header';
import Footer from './components/Footer';
import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import Feed from './components/Feed';
import Ads from './components/Ads';

function App() {
  return (
    <div className="h-screen text-3xl font-bold underline text-center">
      Hello
      <section className="h-full m-2 flex flex-col justify-center items-center border-4 border-pink-900 text-center">
        <div className="h-1/6 w-11/12 m-2  border-2 border-red-900 rounded-xl   bg-teal-700 text-center">
          <Header />
        </div>
        <div className="flex sm:flex-col lg:flex-row h-4/6 w-11/12">
          <div className="w-1/6 m-2  border-2 border-red-900 rounded-xl bg-indigo-700">
            <AsideLeft />
          </div>
          <div className="w-4/6 m-2 border-2 border-red-900 rounded-xl bg-yellow-700">
            <Feed />
          </div>
          <div className="w-1/6 m-2  border-2 border-red-900 rounded-xl bg-orange-700">
            <AsideRight />
          </div>
        </div>
        <div className="flex h-1/6 w-11/12">
          <div className="w-2/4 m-2  border-2 border-red-900 rounded-xl bg-blue-700">
            <Footer />
          </div>
          <div className="w-2/4 m-2  border-2 border-red-900 rounded-xl bg-green-700">
            <Ads />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
