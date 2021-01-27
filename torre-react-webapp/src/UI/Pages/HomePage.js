import { useSocialContext } from "../../Modules/Social/SocialProvider";
import NavBar from "../Components/Bars/NavBar";
import PersonCard from "../Components/Cards/PersonCard";

const HomePage = () => {
  const { closePeople } = useSocialContext();

  return (
    <>
      <main className="flex w-full bg-onTerceary font-sans text-white">
        <NavBar />
        <div className="mt-28 mb-40 flex flex-col md:px-auto mx-auto">
          <div className="flex-col wra w-full grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {closePeople?.map((person, index) => {
              return (
                <PersonCard
                  key={index}
                  username={person.username}
                  name={person.name}
                  picture={person.picture}
                />
              );
            })}
          </div>
        </div>
      </main>
      <footer className="text-center bg-secondary fixed bottom-0 z-20 w-full py-8 px-5 text-white">
        Made by{" "}
        <a
        className="text-primary"
        href={"https://bio.torre.co/jmcontreras10" }
        target="_blank"
        rel="noopener noreferrer"
      >
        @jmcontreras10  
      </a>
      {".  "}visit me at:{" "}
        <a
          className="text-primary"
          href="https://mateocontreras.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Website
        </a>
      </footer>
    </>
  );
};

export default HomePage;
