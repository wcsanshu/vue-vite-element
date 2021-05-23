import { createStore } from 'vuex'
import { GetStaffListApi } from '../api/userApi'
export default createStore({
    state: {
        // 控制新增窗口是否显示
        isShow: false,
        // 员工管理数据
        tableData: []
    },
    mutations: {
        // 控制弹出窗口是否显示
        UseIshow(state, val) {
            state.isShow = val
        },
        UseSaffList(state, res) {
            state.tableData = res
        }
    },
    actions: {

        async GetSaffList(context) {
            console.log("执行了")
            const res = await GetStaffListApi("10");
            context.commit('UseSaffList', res.rows)
        }

    }
})
