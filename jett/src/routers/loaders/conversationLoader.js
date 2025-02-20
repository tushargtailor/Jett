/**
 * @copyright 2024 tushar
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { redirect } from 'react-router-dom';

/**
 * Custom modules
 */
import { account, databases } from '../../lib/appwrite';

const conversationLoader = async ({ params }) => {
  const { conversationId } = params;
  const data = {};

  try {
    data.user = await account.get();
  } catch (error) {
    console.log(`Error getting user account: ${error.message}`);

    return redirect('/login');
  }

  try {
    data.conversation = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      conversationId,
    );
  } catch (error) {
    console.log(`Error getting conversation: ${error.message}`);
    throw error;
  }
  return data;
};

export default conversationLoader;
