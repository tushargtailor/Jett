/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/**
 * Assets
 */
import { iconLogo } from '../assets/assets';

const AiResponse = ({ aiResponse, children }) => {
  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          alt='Jett logo'
          width={32}
          height={32}
        />
      </figure>
      {children}

      <div className="markdown-content">
        <Markdown remarkPlugins={[remarkGfm]}>
        {aiResponse}
        </Markdown>
      </div>
    </div>
  );
};

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
};

export default AiResponse;
