// export const getAllApps = async () => {
//     const res = await fetch('http://localhost:3001/data.json')
//     const data = await res.json()
//     return data;
// }



import { Iapp } from "@/type/apps.type";

export const getAllApps = async (): Promise<Iapp[]> => {
    try {

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/data.json`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch apps");
        }

        const data: Iapp[] = await res.json();

        return data;

    } catch (error) {

        console.log("Error fetching apps:", error);

        return [];
    }
};