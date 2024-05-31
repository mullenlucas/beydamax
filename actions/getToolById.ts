import prismadb from "@/lib/prismadb";

export const getToolById = async (toolId: number) => {
  try {
    const tool = await prismadb.tools.findUnique({
      where: {
        id: toolId,
      },
    });

    if (!tool) return null;

    return tool;
  } catch (error: any) {
    throw new Error(error.message);
  }
}