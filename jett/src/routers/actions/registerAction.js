/**
 * @copyright 2024 tushar
 * @license Apache-2.0
 */

/**
 * Node  modules
 */
import { redirect } from "react-router-dom";

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
            formData.get('email'),
            formData.get('password'),
            formData.get('name'),
        );
        
    } catch (error) {
        return {
            message: error.message,
        };
    }

    try {

        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password'),
        );
        
    } catch (error) {
        console.log(`Error creating email session: ${error.message}`);
        return redirect('/login');
        
    }

    return redirect('/');
    

};

export default registerAction;


