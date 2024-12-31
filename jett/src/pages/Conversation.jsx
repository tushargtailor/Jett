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
import PromptPreloader from '../components/PromptPreloader';

const Conversation = () => {
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};

  return (
    <>
      {/* Meta title */}
      <PageTitle title={`${title} | Jett`} />

      <motion.div
        className='max-w-[700px] mx-auto !will-change-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
      >
        {chats.map((chat) => (
          <div key={chat.$id}>
            {/* UserPrompt */}
            <UserPrompt text={chat.user_prompt} />

            {/* AiResponse */}
            <AiResponse aiResponse={chat.ai_response} />
          </div>
        ))}
      </motion.div>

      <PromptPreloader promptValue='Hi' />
    </>
  );
};

export default Conversation;
