import axios, { AxiosError, AxiosResponse } from "axios";

/**
 * This is the class responsible for the API calls, responses and errors.
 * This class will be comunicating with the server.
 */

class AxiosRequester {

    // static endpoint for POC
    AxiosAPI = axios.create({ baseURL: 'https://api-entertainment.enlight.diagnal.com/v1b3/content' });

    /**
     * Generic funciton used to handle the API request to the server.
     * This function takes one parameter as input and has two returns
     * 
     * @param uri, @type string,  @desc this is the uri from which the data has to be fetched.
     * 
     * @return response, @type AxiosResponse<any> | undefined, @desc This Axiosresponse object, this will return the data fetched if successful.
     * @return error,  @type  AxiosError<any> | undefined, @desc THis error object, this will return error on failure.
     * 
     */
    async fetch(uri: string): Promise<[
        AxiosResponse<any> | undefined,
        AxiosError<any> | undefined
    ]> {
        try {
            const response = await this.AxiosAPI.get(uri);
            return [response, undefined];
        } catch (error: any) {
            return [undefined, error];
        }

    }
}

export default AxiosRequester;
