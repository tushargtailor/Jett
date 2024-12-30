/**
 * @copyright 2024 codewithsadee
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
import { getConversationTitle, getAiResponse } from '../../api/googleAi';
import generateID from '../../utils/generateID';

const userPromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');

  const user = await account.get();

  const conversationTitle = await getConversationTitle(userPrompt);

  let conversation = null;

  try {
    conversation = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      generateID(),
      {
        title: conversationTitle,
        user_id: user.$id,
      },
    );
  } catch (error) {
    console.log(`Error creating conversation: ${error.message}`);
  }

  const aiResponse = await getAiResponse(userPrompt);
  try {
    await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversation: conversation.$id,
      },
    );
  } catch (error) {
    console.log(`Error creating chat: ${error.message}`);
  }

  return redirect(`/${conversation.$id}`);
};

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
