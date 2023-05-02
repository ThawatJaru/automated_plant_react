import { axiosInstance } from "../../config/axiosInstance";

export const getAllPlantType = async (name, order) => {
  try {
    const res = await axiosInstance.get(`/api/plant_types?sortby=${name}&order=${order}`,)
    return res
  } catch (error) {
    return null;
  }
}
export const getPlantTypeFromCat = async (category_id) => {
  try {
    const res = await axiosInstance.get(`/api/plant_types?category_id=${category_id}`,)
    return res
  } catch (error) {
    return null;
  }
}

// 