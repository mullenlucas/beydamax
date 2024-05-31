import AddToolForm from "@/components/tool/AddToolForm";
import { getToolById } from "@/actions/getToolById";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/actions/getUserById"; // Adjust the path as necessary
import {Users, Tools} from "@/lib/types"; // Adjust the path as necessary

interface ToolProps {
  params: {
    toolId: string;  // Adjusted to string as URL parameters are initially strings
  }
}

const Tool = async ({ params }: ToolProps) => {
  const toolId = parseInt(params.toolId, 10); // Convert toolId to number
  const tool: Tools | null = await getToolById(toolId);
  const { userId } = auth();

  if (!userId) {
    return <div>Debes iniciar sesión para ver esta página</div>;
  }

  if (!tool) {
    return <div>Herramienta no encontrada</div>;
  }

  // const user: Users | null = await getUserById(userId);

  // if (!user || user.role !== 'admin') {
  //   return <div>No tienes permisos para ver esta página</div>;
  // }

  return (
    <div>
      <AddToolForm tool={tool} />
    </div>
  );
};

export default Tool;