// import { changeLoaderStatus } from "../../store/loader.reducer";
// import store from "../../store/store";
import api from "../api";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";

const request = {
  create: async ({ url, jsonData }: any) => {
    //console.log('🚀 Create Request 🚀 ~ file: request.js ~ line 19 ~ create: ~ jsonData', jsonData);
    // store.dispatch(changeLoaderStatus('active'));
    try {
      const response = await api.post(url, jsonData);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  read: async ({ url }: any) => {
    try {
      const response = await api.get(url);
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  delete: async ({ url, id }: any) => {
    try {
      const response = await api.delete(url, {
        params: { id },
      });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  update: async ({ url, data }: any) => {
    try {
      const response = await api.patch(url, data);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
}

export default request;