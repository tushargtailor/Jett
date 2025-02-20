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

/**
 * Handel the login action
 */
const loginAction = async ({ request }) => {
    const formData = await request.formData();

    try {
        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password')
        );
        return redirect('/')
    } catch (error) {
        return {
            message: error.message,
        };
    }
};

export default loginAction;