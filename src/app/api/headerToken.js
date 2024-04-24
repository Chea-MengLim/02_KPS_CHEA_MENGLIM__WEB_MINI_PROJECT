import { getServerSession } from "next-auth";
import { authOption } from "./auth/[...nextauth]/route";

export const headerToken = async () => {
    const token = await getServerSession(authOption);
    return {
        'authorization': `Bearer ${token?.user?.token}`,
        'Content-Type': 'application/json'
    }
}