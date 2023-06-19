import instance from '../config/axiosInterceptor';

export const getUTMs = async () => {
  try {
    const res = await instance.get('utms');
    return res;
  } catch (err: any) {
    console.log('err', err);
    return err;
  }
};

type DataType = { data: string[] };

export const getUTMExcell = async (data: DataType) => {
  try {
    await instance.post('utms/export/excell', data);
  } catch (e) {
    console.log(e);
  }
};

export const getUTMSheet = async (data: DataType) => {
  try {
    await instance.post(`utms/export/sheet/csv`, data);
  } catch (e) {
    console.log(e);
  }
};

export const ExternalUTM = async (data: any) => {
  try {
    await instance.post('utms/external', data);
  } catch (e) {
    console.log(e);
  }
};

/** DELETE */

export const deleteUTM = async (data: any) => {
  try {
    await instance.post(`utms/delete`, data);
  } catch (e) {
    console.log(e);
  }
};

/** PATCH */

type EditMemoType = {
  _id: number | undefined;
  memo?: string;
};

export const patchUTM = async (data: EditMemoType) => {
  try {
    await instance.patch('utms/memo', data);
  } catch (e) {
    console.log(e);
  }
};

/** File Upload */
export const upload = async (data: any) => {
  try {
    const res = await instance.post('utms/importdata', data);
    return res;
  } catch (e) {
    console.log(e);
  }
};
