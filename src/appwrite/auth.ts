import conf from "@/conf/conf";
import { Client, Account, ID} from "appwrite";
type CreateUserAccount = {
    email:string;
    password:string;
    name:string;
}
type LoginUserAccount = {
    email:string;
    password:string;
}
export class AuthService {
    client = new Client();
    account
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

   async createAccount({email, password,name}:CreateUserAccount) {
   try {
    const userAccount =  await this.account.create(ID.unique(), email, password,name);
    if(userAccount){
     return this.login({email, password});
    }
   } catch (error) {
        throw error
   }
  }
  async login({email,password}:LoginUserAccount){
    try {
        return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite login",error);
        throw error
    }
  }
  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite getcu",error);
        
        throw error
    }
    return null
  }
  async logout(){
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite logout",error);
        
        throw error
    }
  }
}
const authService = new AuthService();
export default authService;