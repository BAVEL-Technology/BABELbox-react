const BBLogoLetters = (props) => {
  let classes = "inline-block duration-100 origin-bottom scale-75 mx-2 transition duration-200 ease-in-out transform ";
  
  if(props.hover === true)
  {
    classes += " hover:-translate-y-1 hover:scale-110";
  }

  return (
    <span
      class={`${classes} ${props.charColor}`}
    >
      {props.character}
    </span>
  );
};

export default BBLogoLetters;
