import { axiosInstance } from "../../config/axiosInstance";

export const getAllPlants = async (data) => {
  console.log('%cMyProject%cline:3%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', data)
  try {
    const res = await axiosInstance.get(`/api/plants?machine_id=${data.m_id}&category_id=${data.cat_id}&sortby=price&order=${data.sort}&search=${data.search}`,)
    return res
  } catch (error) {
    return null;
  }
}