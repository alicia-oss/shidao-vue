<template>
<div class="box">
  <h1>我的订单</h1>
  <div class="tab">
    <el-tabs v-model="activeName" @tab-click="">
    <el-tab-pane label="已完成" name="finished">
       <div>
        <el-table
          size="medium"
          :data="finished"
          style="width: 60%"
          height="100%">
          <el-table-column
            fixed
            prop="id"
            label="订单编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="classTitle"
            label="课程标题"
            width="150">
          </el-table-column>
          <el-table-column
            prop="createDate"
            label="订单生成日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="sellerName"
            label="教师昵称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="buyerName"
            label="学生昵称"
            width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="detailClick(scope.$index)"
                type="text"
                size="small">
                评价
              </el-button>
               <el-button
                @click.native.prevent="detailClick(scope.$index)"
                type="text"
                size="small">
                查看
              </el-button>
            </template> 
            
          </el-table-column>
        </el-table>
        </div>
    </el-tab-pane>

    <el-tab-pane label="未完成" name="unFinished">
       <div>
        <el-table
          :data="unFinished"
          style="width: 100%"
          height="100%">
          <el-table-column
            fixed
            prop="id"
            label="订单编号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="classTitle"
            label="课程标题"
            width="150">
          </el-table-column>
           <el-table-column
            prop="order_status"
            label="订单状态"
            width="150">
            <template slot-scope="scope">
              {{ getState(scope.row.order_status)}}
            </template>
          </el-table-column>
          <el-table-column
            prop="createDate"
            label="订单生成日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="sellerName"
            label="教师昵称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="buyerName"
            label="学生昵称"
            width="120">
          </el-table-column>
          <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="detailClick(scope.$index)"
                type="text"
                size="small">
                查看
              </el-button>
            </template> 
            
          </el-table-column>
        </el-table>
        </div>
    </el-tab-pane>


    </el-tab-pane>
   
  </el-tabs>
  </div>

 

</div>
</template>

<script>
export default {
  name:"ProfileMyOrder",
  data(){
    return{
      activeName:"finished",
      finished:[
        {
        id:123213123,
        order_status:"finish",
        buyerName:"张武",
        sellerName:"王二",
        classTitle:"课程1",
        createDate:"2088-1-1"
        },
       {
        id:123213123,
        order_status:"finish",
        buyerName:"张武",
        sellerName:"王二",
        classTitle:"课程1",
        createDate:"2088-1-1"
        },
         {
         id:123213123,
        order_status:"finish",
        buyerName:"张武",
        sellerName:"王二",
        classTitle:"课程1",
        createDate:"2088-1-1"
        },  {
         id:123213123,
        order_status:"finish",
        buyerName:"张武",
        sellerName:"王二",
        classTitle:"课程1",
        createDate:"2088-1-1"
        },  {
         id:123213123,
        order_status:"finish",
        buyerName:"张武",
        sellerName:"王二",
        classTitle:"课程1",
        createDate:"2088-1-1"
        },
      ],
      unFinished:[
        {
          id:123213123,
          order_status:"waitWant",
          buyerName:"张武",
          sellerName:"王二",
          classTitle:"课程1",
          createDate:"2088-1-1",
        },
          {
          id:123213123,
          order_status:"waitWant",
          buyerName:"张武",
          sellerName:"王二",
          classTitle:"课程1",
          createDate:"2088-1-1",
        },
          {
          id:123213123,
          order_status:"waitWant",
          buyerName:"张武",
          sellerName:"王二",
          classTitle:"课程1",
          createDate:"2088-1-1",
        },
          {
          id:123213123,
          order_status:"waitWant",
          buyerName:"张武",
          sellerName:"王二",
          classTitle:"课程1",
          createDate:"2088-1-1",
        },
        
      ]
    }
  },
  methods:{
    getState(order_status){
      switch (order_status) {
        case "finished": return "已完成";   
        case "waitConfirm": return "等待确认信息";  
        case "waitUpdata": return "等待制定";  
        case "waitWant": return "等待确认意向";  
        default:
          break;
      }
    },
    detailClick(index){
       console.log(this.finished[index].id);
    }
  }

}
</script>

<style scoped>
 
 .box{
   box-sizing: border-box;
   width: 100%;
   height: 800px;
   padding: 20px 20px;
   background-color: white;
   
 }

</style>