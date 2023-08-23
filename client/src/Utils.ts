class Utils {
    static getToken(): string | null {
        const token = localStorage.getItem("token");
        return token !== null ? token : null;
    }

    static getClient(): any | null {
        const client = localStorage.getItem("client");
        return client !== null ? JSON.parse(client) : null;
    }
}

export default Utils;
