<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/AES_1' }">Generate A Shared Secret</el-breadcrumb-item>
          <el-breadcrumb-item>Secure Your Communication With Your Key!</el-breadcrumb-item>
        </el-breadcrumb>
        <br />
        <br />
        <br />
      </div>
      <el-row :type="flex" justify="center">
        <el-col :span="6" offset="6">
          <div class="grid-content">
            <el-image style="width: 100px; height: 100px" :src="guiUrl" :fit="fit"></el-image>
            <br />
            <br />
            <br />
            Shared secret: {{shared_sec}}
          </div>
        </el-col>
        <el-col :span="6" offset="2">
          <div class="grid-content">
            <el-image style="width: 100px; height: 100px" :src="waUrl" :fit="fit"></el-image>
            <br />
            <br />
            <br />
            Shared secret: {{shared_sec}}
          </div>
        </el-col>
      </el-row>
      <br />
      <br />

      <el-row :gutter="20">
        <el-col :span="6" :offset="9">
          <el-button type="primary" @click="generate">Generate a shared secret!</el-button>
        </el-col>
      </el-row>

      <br />
      <br />
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
      urlGenerate: "/aes/generate",
      guiUrl: gui,
      waUrl: wa,
      shared_sec: ""
    };
  },
  created() {
    this.shared_sec = sessionStorage.getItem("shared_sec");
  },
  methods: {
    next() {
      this.$router.push("/AES_2");
    },
    generate() {
      // this.$axios.post(this.urlGenerate).then(res => {
      //   let shared_sec = res.data.shared_sec;
      //   if (shared_sec == None) {
      //     this.$message({
      //       message: "failed to generate'",
      //       type: "error"
      //     });
      //   } else {
      //     this.shared_sec = shared_sec;
      //     sessionStorage.setItem("shared_sec", this.shared_sec);
      //   }
      // });
      this.shared_sec = "shared_balbaablads";
      sessionStorage.setItem("shared_sec", this.shared_sec);
    }
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
