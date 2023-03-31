export const storeToken = (headers) => {
    const authHeader = headers.get("authorization");
    const token = authHeader.substring(7, authHeader.length);
    localStorage.setItem("token", token);
}