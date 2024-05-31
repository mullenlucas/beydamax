import prismadb from "@/lib/prismadb";
import { UserProps } from "@/lib/types"

export const getUserById = async (userId: string): Promise<UserProps | null> => {
  try {
    const user = await prismadb.tools.findUnique({
      where: {
        id: parseInt(userId, 10),
      },
    });

    if (!user) return null;

    return user
  } catch (error: any) {
    throw new Error(error.message);
  }
}