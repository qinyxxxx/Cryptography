<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/RSA_1' }">Generate Keys</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/RSA_2' }">Exchange Public Keys</el-breadcrumb-item>
          <el-breadcrumb-item>Encrypt Messages With Receiver's Public Key</el-breadcrumb-item>
          <el-breadcrumb-item>Decrypt Messages With My Private Key</el-breadcrumb-item>
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
            Public key: {{pub_key_A}}
            <br />
            <br />
            Private key: {{pri_key_A}}
            <br />
            <br />
            <el-button type="primary" @click="generate('A')">Generate</el-button>
          </div>
        </el-col>
        <el-col :span="6" offset="2">
          <div class="grid-content">
            <el-image style="width: 100px; height: 100px" :src="waUrl" :fit="fit"></el-image>
            <br />
            <br />
            <br />
            Public key: {{pub_key_B}}
            <br />
            <br />
            Private key: {{pri_key_B}}
            <br />
            <br />
            <el-button type="primary" @click="generate('B')">Generate</el-button>
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
      </el-steps>-->
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
      urlGenerate: "/cryptography/rsa/generate",
      guiUrl: gui,
      waUrl: wa,
      pub_key_A: "",
      pri_key_A: "",
      pub_key_B: "",
      pri_key_B: ""
    };
  },
  created() {
    this.pub_key_A = sessionStorage.getItem("pub_key_A");
    this.pri_key_A = sessionStorage.getItem("pri_key_A");
    this.pub_key_B = sessionStorage.getItem("pub_key_B");
    this.pri_key_B = sessionStorage.getItem("pri_key_B");
  },
  methods: {
    next() {
      this.$router.push("/RSA_2");
    },

    generate(user) {
      // this.$axios.post(this.urlGenerate).then(res => {
      //   let pub_key = res.data.pub_key;
      //   let pri_key = res.data.pri_key;
      //   if (pub_key == None) {
      //     this.$message({
      //       message: "failed to generate'",
      //       type: "error"
      //     });
      //   } else {
      //     if (user == "A") {
      //       this.pub_key_A = pub_key;
      //       this.pri_key_A = pri_key;
      //     } else {
      //       this.pub_key_B = pub_key;
      //       this.pri_key_B = pri_key;
      //     }
      //   }
      // });
      if (user == "A") {
        this.pub_key_A = "public_aaa";
        this.pri_key_A = "private_aaa";
        sessionStorage.setItem("pub_key_A", this.pub_key_A);
        sessionStorage.setItem("pri_key_A", this.pri_key_A);
      } else {
        this.pub_key_B = "public_bbb";
        this.pri_key_B = "private_bbb";
        sessionStorage.setItem("pub_key_B", this.pub_key_B);
        sessionStorage.setItem("pri_key_B", this.pri_key_B);
      }
    }
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
