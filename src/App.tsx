import SocialLinksProfile from './components/SocialLinksProfile';

function App() {
  return (
    <>
      <header className='select-none flex flex-col justify-center items-center'>
        <h1 className='text-center text-3xl font-bold font-figtree text-wrap mx-auto'>
          Blog Preview Card
        </h1>
        <a
          href='https://www.frontendmentor.io/'
          className='hover:text-white text-center text-3xl font-bold font-figtree text-wrap mx-auto mb-6'
        >
          Frontendmentor.io
        </a>
      </header>
      <main>
        <SocialLinksProfile />
      </main>
      <footer>
        <p className='text-center text-xl font-bold font-figtree mt-6'>
          Coded by
          <a
            href='https://github.com/brianlagranda'
            className='hover:text-white pl-1'
          >
            Brian Lagranda
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
