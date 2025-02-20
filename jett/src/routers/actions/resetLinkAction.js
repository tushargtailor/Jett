/**
 * @copyright 2024 tushar
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from "../../lib/appwrite";

const resetLinkAction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');

    try {
        await account.createRecovery(email, `${location.origin}/reset-password`);

        return {
            ok: true,
        message: 'You will recieve a password reset link shortly. Please check your email and follow the instruction to reset your password. ',
        };
    } catch (error) {
        console.log(`Error getting password reset link: ${error.message}`);
        
        return {
            ok: false,
            message: error.message,
        };
    }

};

export default resetLinkAction;