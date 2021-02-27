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

export const BlobButton = (props) => {
  return (
    <div className="text-white realtive flex items-center justify-center">
      <p className="text-sm -mt-1 absolute font-semibold font-poppins text-white z-20">
        {props.text}
      </p>
      <svg className="h-36 w-36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgb(89, 81, 157)" d="M35.2,-47C45,-33.8,51.7,-22.1,52.9,-10.1C54.1,1.9,49.9,14.2,45.1,29.3C40.3,44.4,34.8,62.4,22.2,71.7C9.6,80.9,-10.1,81.4,-29.3,76.3C-48.5,71.1,-67.1,60.3,-77.6,43.9C-88.1,27.5,-90.5,5.6,-86.7,-15.2C-82.9,-35.9,-72.9,-55.4,-57.4,-67.5C-41.9,-79.6,-21,-84.3,-4.1,-79.4C12.8,-74.5,25.5,-60.1,35.2,-47Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
};
