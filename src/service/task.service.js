import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
import { revalidateTag } from "next/cache";

export const deleteTaskByWorkSpaceByIdService = async (wId, tId) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/tasks/deleteTaskByWorkspaceIdAndTaskId/${wId}/${tId}`, {
        method : 'DELETE',
        headers : header
    })
    const data = await res.json();
    return data;
}
