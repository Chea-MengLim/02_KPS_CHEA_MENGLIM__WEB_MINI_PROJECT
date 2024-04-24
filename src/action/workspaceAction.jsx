'use server'

import { addWorkSpaceService, deleteWorkSpaceByIdService } from "@/service/todo.service";
import { revalidateTag } from "next/cache";

export async function deleteAction(id){
    await deleteWorkSpaceByIdService(id);
    revalidateTag("workspace")
}
export async function addAction(workspaceName){
    await addWorkSpaceService(workspaceName.get('workspaceName'));
    revalidateTag("workspace");
}