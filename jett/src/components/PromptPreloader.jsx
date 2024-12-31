/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

/**
 * Components
 */
import UserPrompt from './UserPrompt';
import AiResponse from './AiResponse';
import Skeleton from './Skeleton';

const PromptPreloader = ({ promptValue }) => {
  return (
    <div className='max-w-[700px] mx-auto'>
      <UserPrompt text={promptValue} />

      <AiResponse>
        <Skeleton />
      </AiResponse>
    </div>
  );
};

PromptPreloader.propTypes = {
  promptValue: PropTypes.string,
};

export default PromptPreloader;
