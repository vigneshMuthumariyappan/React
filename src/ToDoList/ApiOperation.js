
export default async function ApiOperation(url = '', objApi = null, errMess = null) {
    
    try {
        const response = await fetch(url, objApi);
        if (!response.ok) throw Error("Please reload the app");
    } catch (error) {
        console.error(error.message)
        return errMess;
    }

}