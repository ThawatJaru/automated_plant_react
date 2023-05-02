import { axiosInstance } from "../../config/axiosInstance";

export const getAllPlantType= async (name, order) => {
  try {
    const res = await axiosInstance.get(`/api/plant_types?sortby=${name}&order=${order}`,)
    return res
  } catch (error) {
    return null;
  }
}

// 