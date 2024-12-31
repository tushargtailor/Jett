/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { redirect } from 'react-router-dom';
import { Query } from 'appwrite';

/**
 * Custom modules
 */
import { account, databases } from '../../lib/appwrite';

const appLoader = async () => {
  const data = {};

  try {
    data.user = await account.get();
  } catch (error) {
    console.log(`Error getting user session: ${error.message}`);
    return redirect('/login');
  }

  try {
    data.conversations = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations',
      [
        Query.select(['$id', 'title']),
        Query.orderDesc('$createdAt'),
        Query.equal('user_id', data.user.$id),
      ],
    );
  } catch (error) {
    console.log(`Error getting conversations: ${error.message}`);
  }
  return data;
};

export default appLoader;
