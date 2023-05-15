import { axiosInstance } from "../../config/axiosInstance";

export const getAllPlants = async (data) => {
  try {
    const res = await axiosInstance.get(`/api/plants?machine_id=${data.m_id}&category_id=${data.cat_id}&sortby=${data.sortBy}&order=${data.sort}&search=${data.search}`,)
    return res
  } catch (error) {
    return null;
  }
}
export const getPlants = async (m_id, p_id) => {
  try {
    const res = await axiosInstance.get(`/api/plants/${p_id}?machine_id=${m_id}`,)
    return res
  } catch (error) {
    return null;
  }
}

export const updatePlants = async (m_id, p_id, data) => {
  try {
    const res = await axiosInstance.put(`/api/plants/${p_id}?machine_id=${m_id}`,data)
    return res
  } catch (error) {
    return null;
  }
}
export const deletePlants = async (m_id, p_id) => {
  try {
    const res = await axiosInstance.delete(`api/plants/${p_id}?machine_id=${m_id}`)
    return res
  } catch (error) {
    return null;
  }
}