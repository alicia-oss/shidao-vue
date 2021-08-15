import { request } from './request';
import { Logout } from './login';
import store from '../store'


//用来更新本地的用户状态，每次更改后都要执行！！
export function GetUser() {
    return request({
        url: '/GetUser',
        method: 'get',
    })
}

export function UpdateLocal() {


    //请求5次直到成功，5次失败强行登出
    {
        GetUser().then((res) => {
            if (res.data.msg == "success") {
                let data = res.data.userInfo;
                store.commit('SetUserState', {
                    login: 1,
                    userId: data.id,
                    userName: data.username,
                    userImg: "admin.jpg",
                    collection_class: data.collection_class,
                    collection_question: data.collection_question
                })

                return;
            }
            if (res.data.msg == "fail") {

                {
                    this.$message({
                        type: "error",
                        message: "抱歉，服务器错误，将立即登出您的账号以保证安全！"
                    })
                    setTimeout(() => {
                        Logout();
                        this.$router.push('/home');
                    }, 1000)
                }
            }
        })

    }


}