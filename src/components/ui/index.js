export const OblongButton = (props) => {
  return (
    <div className="text-white realtive flex items-center justify-center">
      <p className="text-sm -mt-1 absolute font-semibold font-poppins text-white z-20">
        {props.text}
      </p>
      <svg className={`text-${props.color}`} width="137" height="69" viewBox="0 0 137 69" stroke="currentColor" fill={props.fill ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.06984 17.0639C8.04385 11.3324 12.8293 7.02188 18.6311 6.65004L112.977 0.603307C118.553 0.245998 123.692 3.6195 125.581 8.87675L136.101 38.1475C138.823 45.7214 133.807 53.8624 125.819 54.8372L14.7012 68.3967C6.37143 69.4132 -0.587064 62.1204 0.818847 53.8474L7.06984 17.0639Z" stroke="currentColor" fill={props.fill ? "currentColor" : "none"}/>
      </svg>
    </div>
  );
};
