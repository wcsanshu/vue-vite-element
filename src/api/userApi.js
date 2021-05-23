import request from '../request/request'

export const PostLoginAPI = (userName, password) => request.post('/api/login', { userName, password });

export const tescApi = () => request.get('/api/json', {})


/**
 * 
 * @param {员工姓名} staffname 
 * @param {员工权限} staffjur 
 * @param {员工岗位} staffjob 
 * @param {入职时间} entrtime 
 * @returns 
 */
export const AddStaffApi = (staffname, staffjob, staffjur, entrtime) => request.post('/api/staff', {
    staffname, staffjur, staffjob, entrtime
})


// 员工数据获取
export const GetStaffListApi = (page)=>request.get(`/api/stafflist/${page}`,{})