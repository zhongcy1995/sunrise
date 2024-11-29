import {post} from "@/utils/method";
import {watch} from "vue";


export const submitEmail = async (data:object) => {
    const res = post<void>('/email/send',data);
    return res
}
