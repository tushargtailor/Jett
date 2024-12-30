/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

/**
 * Components
 */
import PageTitle from '../components/PageTitle';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};

  return (
    <>
      {/* Meta title */}
      <PageTitle title={`${title} | Jett`} />

      <motion.div className=''>
        {chats.map((chat) => (
          <div key={chat.$id}>
            {/* UserPrompt */}
            <UserPrompt text={chat.user_prompt}/>

            {/* AiResponse */}
            <AiResponse aiResponse={chat.ai_response}/>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Conversation;
