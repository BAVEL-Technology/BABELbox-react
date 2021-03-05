const Letter = (props) => {
  return <>
  <div className={`bg-${props.color}-${props.light || 200} text-${props.color}-${props.dark || 600} ring-8 ring-${props.color}-${props.dark || 600} transform ${props.placement}  rounded-lg text-4xl font-bold`}>
    <div className={`bg-${props.color}-${props.light || 200} text-${props.color}-${props.dark || 600} flex items-center justify-center w-${props.size || '14'} h-${props.size || '14'}  rounded-lg text-5xl border-4 border-${props.color}-${props.light ? props.light + 100 : 300} font-bold`}>
    {props.children}
    </div>
  </div>
  </>;
};

export default Letter;
