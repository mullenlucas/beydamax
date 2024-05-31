"use client"

import { Tools } from "@prisma/client";

interface AddToolProps {
  tool: Tools;
}


const AddToolForm = ( {tool}: AddToolProps ) => {
  return ( <div>AddTool</div>  );
}
 
export default AddToolForm;