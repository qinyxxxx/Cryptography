<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Generate Keys</el-breadcrumb-item>
          <el-breadcrumb-item>Exchange Public Keys</el-breadcrumb-item>
          <el-breadcrumb-item>Encrypt Messages With My Private Key</el-breadcrumb-item>
          <el-breadcrumb-item>Decrypt Messages With Sender's Public Key</el-breadcrumb-item>
        </el-breadcrumb>
        <br />
        <br />
        <br />
        <!-- <el-button type="plain" @click="clear">清除/刷新</el-button> -->
      </div>
      <el-row :type="flex" justify="center">
        <el-col :span="6" offset="6">
          <div class="grid-content">
            <el-image style="width: 100px; height: 100px" :src="guiUrl" :fit="fit"></el-image>
            <br />
            <br />
            <br />
            Public key: {{pub_key}}
            <br />
            <br />
            Private key: {{pri_key}}
            <br />
            <br />
            <el-button type="primary" @click="generate">Generate</el-button>
          </div>
        </el-col>
        <el-col :span="6" offset="2">
          <div class="grid-content">
            <el-image style="width: 100px; height: 100px" :src="waUrl" :fit="fit"></el-image>
            <br />
            <br />
            <br />
            Public key: {{pub_key}}
            <br />
            <br />
            Private key: {{pri_key}}
            <br />
            <br />
            <el-button type="primary" @click="generate">Generate</el-button>
          </div>
        </el-col>
      </el-row>
      <br />
      <br />
      <!-- <el-steps :active="active" finish-status="success">
        <el-step title="Step 1"></el-step>
        <el-step title="Step 2"></el-step>
        <el-step title="Step 3"></el-step>
        <el-step title="Step 4"></el-step>
        <el-step title="Step 5"></el-step>
      </el-steps> -->
      <el-button style="margin-top: 12px;" @click="previous">Previous</el-button>
      <el-button style="margin-top: 12px;" @click="next">Next</el-button>
    </div>
  </div>
</template>

<script>
import gui from "@/assets/img/gui.png";
import wa from "@/assets/img/wa.png";
export default {
  name: "order",
  data() {
    return {
      urlSelectUser: "/pizzaexpress/user/getuserbyid",
      urlInit: "/pizzaexpress/user/getuserinfo",
      guiUrl: gui,
      waUrl: wa,
      pub_key: 1111,
      pri_key: 222,
      active: 0,
      userData: [],
      cur_page: 1,
      total: 0,
      selectWord: "",
      userID: "",
      orderObj: "",
      orderFormVisible: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 分页导航
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    formatter(row, column) {
      return row.userAddress;
    },
    preivious() {
      if (this.active-- < 0) this.active = 0;
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    getData() {
      this.$axios.post(this.urlInit).then(res => {
        let userData = res.data.userData.data;
        this.userData = userData;
        this.total = userData.length;
      });
      // this.userData = [
      //   {
      //     userID: "1",
      //     userName: "小王",
      //     userPhone: "1388888888",
      //     userStatus: "在线",
      //     userAddress: "小王家里",
      //     lastLogin: "2018-12-01 10:00"
      //   },
      //   {
      //     userID: "2",
      //     userName: "大王",
      //     userPhone: "1388888888",
      //     userStatus: "离线",
      //     userAddress: "小王家里",
      //     lastLogin: "2018-12-01 10:00"
      //   },
      //   {
      //     userID: "1",
      //     userName: "小王",
      //     userPhone: "1388888888",
      //     userStatus: "在线",
      //     userAddress: "小王家里",
      //     lastLogin: "2018-12-01 10:00"
      //   }
      // ];
    },
    // filterStatus(value, row) {
    //   return row.userStatus === value;
    // },
    // search() {
    //   if (this.selectWord == "") {
    //     this.$message.error("抱歉，搜索内容不能为空");
    //   } else {
    //     this.userID = this.selectWord;
    //     this.$axios
    //       .post(this.urlSelectUser, {
    //         userID: this.userID
    //       })
    //       .then(res => {
    //         let userData = res.data.userData.data;
    //         if (userData.length == 0) {
    //           this.$message({
    //             message: "未找到含有'" + this.selectWord + "'的记录",
    //             type: "info"
    //           });
    //         } else {
    //           this.userData = userData;
    //           this.total = userData.length;
    //         }
    //       });
    //   }
    // },
    // clear() {
    //   this.selectWord = "";
    //   this.getData();
    // }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
