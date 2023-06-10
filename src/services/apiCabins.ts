import { Cabin } from "@/types";
import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");
    if (error) {
        console.error(error);
        throw new Error("Cabins could not be fetched");
    }
    return data;
}

export async function deleteCabin(id: number) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);
    if (error) {
        console.error(error);
        throw new Error("Cabins could not be deleted");
    }
    return data;
}

export async function createCabin(cabin: Cabin) {
    return cabin;
}
