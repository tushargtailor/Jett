/**
 * @copyright 2024 tushar
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { redirect } from "react-router-dom";

/**
 * Custom modules
 */
import { account } from "../../lib/appwrite";

const registerLoader = async () => {
    try {
        await account.get();
        
    } catch (error) {
        console.log(`Error getting user session: ${error.message}`);
        return null;
        
    }
    return redirect('/')
};

export default registerLoader;