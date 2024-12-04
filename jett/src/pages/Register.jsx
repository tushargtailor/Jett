/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, Form } from 'react-router-dom';

/**
 * Custom modules
 */
import { logoDark, logoLight, banner } from '../assets/assets';

/**
 * Components
 */
import PageTitle from "../components/PageTitle";
import TextField from '../components/TextField';
import { Button } from '../components/Button';

const Register = () => {
  return (
    <>
      <PageTitle  title='Create an account'/>

      <div className="relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
        <div className="flex flex-col p-4">
          <Link to='/' className='max-w-max mb-auto mx-auto lg:mx-0'>
            <img 
              src={logoLight} 
              alt="jett logo" 
              width={133}
              height={24}
              className="dark:hidden" />

            <img 
              src={logoDark} 
              alt="jett logo" 
              width={133}
              height={24}
              className="hidden dark:block" />
          </Link>

          <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
            <h2 className="text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center">Create an account</h2>

            <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2">
              Register today and gain access to powerful tools that will supercharge your ideas.
            </p>

            <Form 
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField 
              type='text'
              name='name'
              label='Full name'
              placeholder='Full name..'
              required={true}
              autoFocus={true}
               />
               <TextField 
               type='email'
               name='email'
               label='Email'
               placeholder='Your email..'
               required={true}
               />

              <TextField 
               type='password'
               name='password'
               label='Password'
               placeholder='Enter Your  password..'
               required={true}
               />

               <Button type='submit'>Create account</Button>
            </Form>

            <p className="text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4">
              Already have an account?
              <Link
                to='/login'
                className='link inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Sign in 
              </Link>
            </p>
          </div>
          <p className="mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0">
            &copy; 2024 tushar. All right reserved.
          </p>
        </div>

        <div className="hidden img-box lg:block lg:relative lg:rounded-large">
          <img 
          src={banner} 
          alt="" 
          className="img-cover" />

          <p className="absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]">Chat with Jett to 
            supercharge your ideas.</p>
        </div>
      </div>
  </>
);
}

export default Register