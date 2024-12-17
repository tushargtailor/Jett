/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Client, Account, Avatars } from 'appwrite';

/**
 * Initial appwrite client
 */
const client = new Client();

client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint('https://cloud.appwrite.io/v1');

/**
 * Initial appwrite account
 */  
const account = new Account(client);

/**
 * Initial appwrite avatars
 */
const avatars = new Avatars(client);

export { account, avatars };
