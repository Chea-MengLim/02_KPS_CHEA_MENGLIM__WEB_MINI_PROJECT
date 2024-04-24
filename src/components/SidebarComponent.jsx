'use client'
import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllTodoListService } from "@/service/todo.service";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function SidebarComponent() {
  const pathname = usePathname();
  console.log(pathname)
  const workSpaces = await getAllTodoListService();
  const data = await workSpaces?.data;
  const favorites = data.filter(data=> data.isFavorite)
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image alt="" src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image alt="" src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {
        data.map((workSpace)=>{
          return(
            <div key={workSpace.workSpaceId} className="flex items-center mt-5 w-full">
          <div className={workSpace.workSpaceId % 2 == 0 ? "bg-red-500 rounded-full w-4 h-4 " : "bg-blue-500 rounded-full w-4 h-4 "}></div>
          <div className="flex justify-between w-full pl-3">
            <Link href={`${pathname}/${workSpace.workSpaceId}`}><p> {workSpace.workspaceName} </p></Link>

            <EditDeleteDropDownComponent workspaceId = {workSpace.workSpaceId}  /> 
          </div>
      </div>
          )
        })
      }
      
      

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      {
        favorites.map(favorite => {
          return(
            <div key={favorite.workSpaceId} className="flex items-center mt-5 w-full">
            <div className={favorite.workSpaceId % 2 == 0 ? "bg-red-500 rounded-full w-4 h-4 " : "bg-blue-500 rounded-full w-4 h-4 "}></div>
            <div className="flex justify-between w-full pl-3">
            <Link href={`/todo-list/${favorite.workSpaceId}`}><p> {favorite.workspaceName} </p></Link>
            </div>
          </div>
          )
        })
      }
     
    </div>
  );
}
