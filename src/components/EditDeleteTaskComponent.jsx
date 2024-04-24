'use client'
import { deleteAction } from "@/action/taskAction";
import Image from "next/image";
import React from "react";
export default function EditDeleteTaskComponent({ workspaceId, taskId }) {
  return (
    <details className="dropdown">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <form>
          <button type="submit">
            <a>Edit</a>
          </button>
        </form>
        <form action={async()=>deleteAction(workspaceId, taskId)}>
          <button type="submit">
            <a >Delete</a>
          </button>
        </form>
        
      </ul>
    </details>
  );
}
