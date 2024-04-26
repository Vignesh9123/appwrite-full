import conf from "@/conf/conf";
import { Client, Databases, Storage, Query,ID } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async getPost(slug: any) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);

        } catch (error) {
            console.log("Appwrite getPost", error);
            
            throw error
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log("Appwrite getPosts", error);
            
            throw error
        }
    }
    async createPost({title,slug,content,image, status,userId}:any){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,slug,{title,content,image,userId, status})
        } catch (error) {
            console.log("Appwrite createPost", error);

            throw error
        }
    }
    async updatePost(slug:any,{title,  content, image, status}:any){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title, slug, content, image, status})
        } catch (error) {
            console.log("Appwrite updatePost", error);

            throw error
        }
    }
    async deletePost(slug:any){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("Appwrite deletePost", error);

            throw error
        }
    }
    async uploadFile(file:any){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite uploadFile", error);

            throw error
        }
    }
    async deleteFile(fileId:any){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (error) {
            console.log("Appwrite deleteFile", error);

            throw error
        }
    }
    getFilePreview(fileId:any){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href
    }

}

const service = new Service();
export default service;