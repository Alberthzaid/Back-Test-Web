import { foundUser } from "../Helpers/foundUser.js";
import { validPassword } from "../Helpers/validatePassword.js";


export const authUser = async (json) => {
    try {
        const found = await foundUser(json);
        const validatePassword = await validPassword(json);

        if (!found) {
            return { error: 'User not found' };
        }

        if (!validatePassword) {
            return { error: 'Invalid access' };
        }

        return { success: true };

    } catch (error) {
        console.error('Error authenticating user:', error.message);
        return { error: error.message };
    }
};