/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";

/**
 * Handels user registration.
 */

const registerAction = async ({ request }) => {
    // Retrive the form data from the incoming request
    const formData = await request.formData();

    try {
        //Creates a new user account using the provided email, password, and name
        await account.create(
            generateID(), // Generates a unique id for user
            formData(),
        )
        
    } catch (error) {
        
    }
    return null;
    

};

export default registerAction;


