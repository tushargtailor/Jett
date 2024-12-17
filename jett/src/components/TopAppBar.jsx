/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, useNavigation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/**
 * Components
 */
import { IconBtn } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { LinearProgress } from './Progress';

/**
 * Assets
 */
import { logoLight, logoDark } from '../assets/assets';

const TopAppBar = () => {

  const navigation = useNavigation();

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4 '>
      <div className='flex items-center gap-1'>
        <IconBtn
          icon='menu'
          title='Menu'
        />
        <Link
          to='/'
          className=''
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
      </div>
      <div className='menu-wrapper'>
        <IconBtn>
          <Avatar name='Tushar' />
        </IconBtn>
        <Menu>
          <MenuItem  labelText='Log out' />
        </Menu>
      </div>
      <AnimatePresence>
      {isNormalLoad && <LinearProgress />}
      </AnimatePresence>
    </header> 
  );
};

export default TopAppBar;
