
import { axiosInstance } from "../../config/axiosInstance";

export const getAllSlot = async (m_id) => {
  try {
    const res = await axiosInstance.get(`/api/slots/available_lists?machine_id=${m_id}`,)
    return res
  } catch (error) {
    return null;
  }
}