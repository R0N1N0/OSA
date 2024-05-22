
import { getUserRequests } from "../userRequests.js";

export function hasInvitations(userInvitations) {
    return userInvitations.length > 0? true: false;
}

export async function declineLogic(id_grupo) {
    const res = await getUserRequests.declineInvitation({id_grupo}, "user/invitacions/decline");
    if(res) return true;
}
export async function acceptLogic(id_grupo) {
    const res = await getUserRequests.acceptInvitation({id_grupo}, "user/invitacions/accept")
    if(res) return true;
}