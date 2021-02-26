const Steps = (props) => {
  return (
    <div className="w-full flex items-center justify-between">
      {(props.step % 2) == 0 &&
        <div className="flex-shrink-0 flex justify-center">
          <img src={props.img} className={props.imgSize || 'h-96'}/>
        </div>
      }
      <div className="flex flex-col w-full">
        <div className="flex items-start w-full">
          {(props.step % 2) != 0 &&
            <p className="font-roboto flex-shrink-0 h-24 w-24 flex items-center justify-center text-7xl bg-gray-900 font-black text-white rounded-full mr-6">
              {props.step}
            </p>
          }
          <div className={`flex flex-col space-y-6 w-full ${(props.step % 2) != 0 ? '' : 'items-end'}`}>
            <p className={`font-poppins text-6xl font-black text-white ${(props.step % 2) != 0 ? '' : 'text-right'}`}>
              {props.title}
            </p>
            <p className={`font-roboto text-lg font-medium text-white ml-2 w-3/4 ${(props.step % 2) != 0 ? '' : 'text-right'}`}>
              {props.p}
            </p>
          </div>
          {(props.step % 2) == 0 &&
            <p className="font-roboto flex-shrink-0 h-24 w-24 flex items-center justify-center text-7xl bg-gray-900 font-black text-white rounded-full ml-6">
              {props.step}
            </p>
          }
        </div>
      </div>
      {(props.step % 2) != 0 &&
        <div className="flex-shrink-0 flex justify-center">
          <img src={props.img} className={props.imgSize || 'h-96'}/>
        </div>
      }
    </div>
  );
};

export default Steps;
