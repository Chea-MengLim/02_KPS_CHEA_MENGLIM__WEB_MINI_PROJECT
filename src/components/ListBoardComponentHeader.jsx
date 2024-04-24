'use client'
import { editWorkSpaceFavorite } from "@/service/todo.service";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";

export default function ListBoardComponentHeader({workspace}) {
  async function handleEditStar(id, isFavorite){
    const obj = {
      isFavorite : isFavorite
    }
    await editWorkSpaceFavorite(id, obj)
    revalidateTag("workspace")
  }
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p> {workspace.data.isFavorite ? "Favorite":"Workspace"  } </p> / <p> {workspace.data.workspaceName} </p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold"> {workspace.data.workspaceName} </h2>
        <div 
        // onClick={()=>handleEditStar(workspace.data.workSpaceId, workspace.data.isFavorite)} 
        className={workspace.data.isFavorite ? "bg-yellow-500 border border-gray rounded-lg p-2  " : "bg-white border border-gray rounded-lg p-2  "} >
          <Image
            
            src="/assets/icons/star.svg"
            width={20}
            height={20}
            alt="black star"
          />
        </div>
      </div>
    </>
  );
}
