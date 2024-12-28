/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


/**
 * Assets 
 */
import { logoDark, logoLight } from "../assets/assets";

const Logo = ({ classes = '' }) => {
  return (
    <Link
              to='/'
              className={`min-w-max max-w-max h-[24px] ${classes}` } 
            >
              <img
                src={logoLight}
                width={133}
                height={24}
                alt='jett logo'
                className='dark:hidden'
              />
              <img
                src={logoDark}
                width={133}
                height={24}
                alt='jett logo'
                className='hidden dark:block'
              />
            </Link>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
}; 

export default Logo;