const BBLogoLetters = (props) => {
  return (
    <span
      class={`inline-block duration-100 origin-bottom scale-75 mx-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${props.charColor}`}
    >
      {props.character}
    </span>
  );
};

export default BBLogoLetters;
