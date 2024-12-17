/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';

const App = () => {
  return (
    <>
      {/** Meta title */}
      <PageTitle title='Jett - chat to supercharge your ideas' />
      <div className=''>
        {/** Sidebar */}
        <div className=''>
          {/** Top app bar */}
          <TopAppBar />
          {/** Main content */}
          <div className=''>
            <div className=''></div>
          </div>

          {/** Prompt field */}
          <div className=''>
            <p className=''>
              Jett may display inaccurate info, including about people, so
              double-check its responses.
              <a
                href='https://support.google.com/gemini?p=privacy_notice'
                target='_blank'
                className=''
              >
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
