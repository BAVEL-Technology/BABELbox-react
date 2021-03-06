import { Clown } from "../Logos";
import "./index.css";
import BBLogo from "../BBLogo";

const styles = {
  hoverTransform:
    "transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1",
  navButton:
    "px-3 py-2 rounded-3xl bg-gray-100 text-indigo-800 focus:outline-white",
};

const Navbar = (props) => {
  return (
    <div className="navbar w-full px-12 z-50 pt-6 flex justify-between items-center absolute sticky top-0">
      <div className={`flex items-center space-x-4`}>
        <img src="./images/whitebox.png" className="h-12" />
        {/* <p
          className={`font-poppins uppercase text-babelPink-500 text-lg font-bold`}
        >
          {props.brandName || "BABELBOX"}
        </p> */}
        <BBLogo small={true} className={`pb-3 ${styles.hoverTransform}`} />
      </div>
      <ul
        className={`flex items-center font-semibold cursor-pointer space-x-7 text-${props.color} font-roboto font-medium text-sm`}
      >
      <li
        className={`dropdown inline-block relative transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 ${styles.navButton} ${styles.hoverTransform}`}
      >
        Games
        <ul>
          <li className="dropdown-menu absolute hidden text-base pt-5">
            <a
              href="/liarliar"
              style={{ fontFamily: "Sniglet" }}
              className="px-4 py-2 rounded-md bg-white text-indigo-800 focus:outline-white"
            >
              LiarLiar
            </a>
          </li>
        </ul>
      </li>

      <a href="/about-us">
        <li className={`${styles.navButton} ${styles.hoverTransform}`}>
          About
        </li>
      </a>
      
      <a href="/help">
        <li className={`${styles.navButton} ${styles.hoverTransform}`}>
          Help
        </li>
      </a>


        

        {/* <li className={`${styles.navButton} ${styles.hoverTransform}`}>
          Login
        </li>

        <li
          style={{ padding: "8.48611px 16.9722px" }}
          className={`p-2 border-2 border-${props.color} rounded-3xl flex items-center justify-center hover:bg-white ${styles.hoverTransform}`}
        >
          Sign Up
        </li> */}
        
      </ul>
    </div>
  );
};

export default Navbar;
