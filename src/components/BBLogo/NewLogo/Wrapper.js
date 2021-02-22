import Letter from "./Letter";

const BBLogo = (props) => {
  const letters = props.children ? props.children.split('') : ['B', 'A', 'B', 'E', 'L'];
  console.log(letters);
  const placement = props.placement ||
  [
    '-rotate-6',
    'mt-12 rotate-6',
    '-mt-4 rotate-12',
    'mt-12 -rotate-12',
    'mt-6 ml-3 rotate-3',
    '-rotate-6 mt-6 ml-2',
    'rotate-12 ml-2',
    'mt-16 -rotate-12'
  ];
  const colors = props.colors ||
  [
    'babelBlue',
    'babelYellow',
    'babelBlue',
    'babelRed',
    'babelCyan',
    'babelBlue',
    'babelYellow',
    'babelRed'
  ];

  return <div className="flex items-center justify-center">
  {letters.map((l, i) => <Letter color={colors[i] || 'indigo'} size={props.size} placement={placement[i]}>{l}</Letter>)}
  </div>;
};

export default BBLogo;
