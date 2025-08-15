import { Client, Databases } from "appwrite";

const client = new Client().setEndpoint('https://nyc.cloud.appwrite.io/v1').setProject('689eeece000b0f981786');

export const databases = new Databases(client);

