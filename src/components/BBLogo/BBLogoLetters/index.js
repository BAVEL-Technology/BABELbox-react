const BBLogoLetters = (props) => {
  return (
    <span
      class={`inline-block duration-200 origin-bottom transform ease-in-out scale-75 mx-2 ${props.charColor}`}
      onMouseOver="big(event)"
      onMouseOut="small(event)"
    >
      {props.character}
    </span>
  );
};

export default BBLogoLetters;
