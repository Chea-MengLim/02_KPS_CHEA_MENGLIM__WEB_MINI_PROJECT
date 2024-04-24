import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/utils/constants";
import { getServerSession } from "next-auth"

// get token from cookie



export const getAllTodoListService = async () => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
        method : "GET",
        headers: header,
        next : {
            tags : ["workspace"]
        }
    })
    const data = await res.json();
    return data;
}

export const deleteWorkSpaceByIdService = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces/${id}`, {
        method : 'DELETE',
        headers : header
    })
    const data = await res.json();
    console.log(data)
    return data;
}

export const getWorkSpaceByIdService = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspace/${id}`, {
        headers : header
    })
    const data = await res.json();
    return data;
}

export const getTasksByWorkSpaceByIdService = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/tasks?workspaceId=${id}`, {
        headers : header
    })
    const data = await res.json();
    return data;
}

export const addWorkSpaceService = async(workSpaceName) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
        method : 'POST',
        headers : header,
        body : JSON.stringify({
            workspaceName : workSpaceName
        })
    }

    )
}

export const getTaskByStatusAndWorkspaceId = async (status, id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/tasks/getTaskByStatusAndWorkspaceId/${status}/${id}`, {
        headers : header
    })
    const data = await res.json();
    return data;
}

export const editWorkSpaceFavorite = async (id, obj) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces/add-to-favorite/${id}`, {
        method : 'PUT',
        headers : header,
        body : JSON.stringify(obj)
    })
    const data = await res.json();
    return data;
}