/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link } from "react-router-dom"

/**
 * Components
 */
import { IconBtn } from "./Button"

/**
 * Assets
 */

import { logoLight, logoDark } from "../assets/assets"

const TopAppBar = () => {
  return (
    <header className="">
        <div className="">
            <IconBtn icon='menu' title='Menu' />
             <Link to='/' className="">
              <img 
                src={logoLight}
                width={133}
                height={24}
                alt="jett logo" 
                className="dark:hidden" 
                />
              <img 
                src={logoDark}
                width={133}
                height={24}
                alt="jett logo" 
                className="hidden dark:block" 
                />
             </Link>
        </div>
        <div className="menu-wrapper">
          <IconBtn>

          </IconBtn>
        </div>
    </header>
  )
}

export default TopAppBar