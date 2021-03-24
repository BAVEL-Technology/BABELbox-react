const BBLogoLetters = (props) => {
  let classes = "inline-block duration-100 origin-bottom transition duration-200 ease-in-out transform ";

  if(props.hover === true)
  {
    classes += " hover:-translate-y-1 hover:scale-110";
  }

  return (
    <span
      className={`${classes} ${props.charColor}`}
    >
      {props.character}
    </span>
  );
};

export default BBLogoLetters;
