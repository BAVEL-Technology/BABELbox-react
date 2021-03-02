const NavBar = (props) => {
    const path = './images/greetings/';
    const grettings = props.grettings || [
      `${path}babel_hallo.png`,
      `${path}babel_nihao.png`,
      `${path}babel_ola.png`,
      `${path}babel_xinchao.png`,
      `${path}babel_zdravo.png`
    ];
    const img = grettings[Math.floor(Math.random() * Math.floor(grettings.length))];
    return (
        <div className="w-full z-50 relative px-12 pt-4 flex items-center justify-between">
          <img className="h-16" src={img} />
          <ul className="flex cursor-pointer items-center space-x-4 text-white font-semibold text-md">
          <li>Help</li>
          <li>About</li>
          <li>Log In</li>
          <li className="px-2 py-1 bg-babelYellow-700 rounded-md shadow-lg transform hover:-translate-y-1 hover:shadow-xl ease-in-out transition-all duration-150">Register</li>
          </ul>
        </div>
    );
};

export default NavBar;
