const base = {
    get() {
        return {
            url : "http://localhost:8080/springboothot14/",
            name: "springboothot14",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "基于Hadoop的高校固定资产管理系统研究与实现"
        } 
    }
}
export default base
