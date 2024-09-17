import SocialLinksProfile from "./components/SocialLinksProfile";
import profileData from "../src/data/profile.json";

function App() {
  return (
    <>
      <header className="flex select-none flex-col items-center justify-center text-tPrimary">
        <h1 className="mx-auto text-wrap text-center font-inter text-3xl font-bold">
          Social Links Profile
        </h1>
        <a
          href="https://www.frontendmentor.io/"
          className="mx-auto mb-6 text-wrap text-center font-inter text-3xl font-bold hover:text-tSecondary"
        >
          Frontendmentor.io
        </a>
      </header>
      <main>
        <SocialLinksProfile profile={profileData} />
      </main>
      <footer>
        <p className="mt-6 text-center font-inter text-xl font-bold text-tPrimary">
          Coded by
          <a
            href="https://github.com/brianlagranda"
            className="pl-1 hover:text-tSecondary"
          >
            Brian Lagranda
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
