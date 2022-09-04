// 封装页面请求
import request from './request'

// 搜索图书 
export const searchBooks = (data) => request({ url: `/v1/volumes?q=${data.name}:${data.bookName}&startIndex=${data.pageNum}&key=AIzaSyDSOPQkHnAdRgJJ3CEIjuQo9Puj9z4Cl9Y`, method: 'get' })



// // 编辑角色的操作
// export const updateRole = (data) => request({ url: "/roles/" + data.id, data, method: 'put' })

// // 获取角色权限列表
// export const usePowerList = (data) => request({ url: '/rights/' + data })

// // 删除角色权限操作
// export const removeUserPower = (data) => request({ url: '/roles/' + data.roleId + '/rights/' + data.rightId, method: 'delete' })