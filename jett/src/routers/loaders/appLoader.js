/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { redirect } from 'react-router-dom';

/**
 * Custom modules
 */
import { account } from '../../lib/appwrite';


const appLoader = async () => {
    const data = {};

    try {
        data.user = await account.get();
    } catch (error) {
        console.log(`Error getting user session: ${error.message}`);
        return redirect('/login');
    }
    return data;
};

export default appLoader;