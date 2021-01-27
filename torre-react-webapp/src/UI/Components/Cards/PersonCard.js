const PersonCard = (props) => {
  return (
    <div className="bg-gray-800 p-5 color-white my-4 rounded-2xl h-full w-auto hover:bg-gray-700 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-110">
      <div className={`flex flex-col text-center content-center`}>
        <svg
          className="p-1 stroke-current stroke-2 text-primary"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id={props.username}
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <image
                href={props.picture}
                alt={props.name}
                x="-25"
                width="150"
                height="100"
              />
            </pattern>
          </defs>
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill={`url(#${props.username})`} />
        </svg>
        <p>{props.name}</p>
        <a
          className="text-primary"
          href={"https://bio.torre.co/" + props.username}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" @" + props.username}
        </a>
      </div>
    </div>
  );
};

export default PersonCard;

//"proxy": "http://localhost:3001",
