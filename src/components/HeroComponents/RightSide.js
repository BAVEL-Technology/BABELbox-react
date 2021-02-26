const LeftSide = (props) => {
  return (
    <div className="col-span-3 h-full flex justify-center overflow-hidden">
    <img className="inline-block animate-wiggle h-12 w-12 object.cover absolute top-3/4 -ml-12 animation-delay-1000" src="./clown.png" />
      <div className="h-8 w-8 bg-babelYellow-700 rounded-full animate-slide-up-vertical-medium absolute top-1/2 animation-delay-1000"></div>
    </div>
  );
};

export default LeftSide;
