import { axiosInstance } from "../../config/axiosInstance";

export const getAllMachine = async (staff_id) => {
  try {
    const res = await axiosInstance.get(`/api/machines?staff_id=${staff_id}`,)
    return res
  } catch (error) {
    return null;
  }
}
export const createMachine = async (staff_id, data) => {
  try {
    const res = await axiosInstance.post(`/api/machines?staff_id=${staff_id}`, data)
    return res
  } catch (error) {
    return null;
  }
}