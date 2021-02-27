import { Clown } from "../Logos";
import "./index.css";

const styles = {
  hoverTransform:
    "transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1",
};

const Navbar = (props) => {
  return (
    <div className="navbar w-full px-12 z-50 pt-6 flex justify-between items-center absolute sticky top-0">
      <div className={`flex items-center space-x-4`}>
        <img src="./images/whitebox.png" className="h-12" />
        <p
          className={`font-poppins uppercase text-babelPink-500 text-lg font-bold`}
        >
          {props.brandName || "BABELBOX"}
        </p>
      </div>
      <ul
        className={`flex items-center font-semibold cursor-pointer space-x-12 text-${props.color} font-roboto font-medium text-sm`}
      >
        <li className={styles.hoverTransform}>
          <a href="/help">Help</a>
        </li>
        <li className={styles.hoverTransform}>
          <a href="/about-us">About</a>
        </li>
        <li
          className={`dropdown inline-block relative transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 ${styles.hoverTransform}`}
        >
          Games
          <li className="dropdown-menu absolute hidden text-base pt-5">
            <a
              href="/liarliar"
              style={{ fontFamily: "Sniglet" }}
              className="px-4 py-2 rounded-md bg-white text-indigo-800 focus:outline-white"
            >
              LiarLiar
            </a>
          </li>
        </li>
        <li className={`${styles.hoverTransform}`}>Login</li>
        <li
          style={{ padding: "8.48611px 16.9722px" }}
          className={`p-2 border-2 border-${props.color} rounded-3xl flex items-center justify-center`}
        >
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
