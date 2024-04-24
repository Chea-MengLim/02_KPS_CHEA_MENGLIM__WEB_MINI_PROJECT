'use server'

import { deleteTaskByWorkSpaceByIdService } from "@/service/task.service";
import { revalidateTag } from "next/cache";

export async function deleteAction(wid, tId){
    await deleteTaskByWorkSpaceByIdService(wid, tId);
    revalidateTag("workspace")
}