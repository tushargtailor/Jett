/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

/**
 * Custom modules
 */
import { useToggle } from '../hooks/useToggle';

/**
 * Components
 */
import Avatar from './Avatar';
import { IconBtn } from './Button';

const UserPrompt = ({ text }) => {
  const { user } = useLoaderData();

  const [isExpanded, toggleExpand] = useToggle();

  const textBoxRef = useRef();

  const [hasMoreContent, setMoreContent] = useState(false);

  useEffect(() => {
    setMoreContent(
      textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight,
    );
  }, [textBoxRef]);

  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr),max-content] md:gap-5'>
      <Avatar name={user?.name} />

      <p
        className={`text-bodyLarge pt-1 whitespace-pre-wrap ${isExpanded ? 'line-clamp-4' : ''}`}
        ref={textBoxRef}
      >
        {text}
      </p>

      {hasMoreContent && (
        <IconBtn
          icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          onClick={toggleExpand}
          title={isExpanded ? 'collapse text' : 'Expand text'}
        />
      )}
    </div>
  );
};
UserPrompt.propTypes = {
  text: PropTypes.string,
};

export default UserPrompt;
