import conf from "../config/config";
import { Client, ID, Account } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        try {
            if (!conf.appwriteUrl || !conf.appwriteProjectId) {
                throw new Error("Appwrite configuration is missing.");
            }

            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);

        } catch (error) {
            console.error("AuthService Constructor Error:", error);
        }
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            console.error("AuthService :: createAccount :: error", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password); // Ensure this is correct for your SDK version
        } catch (error) {
            console.error("AuthService :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("AuthService :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
