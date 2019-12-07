<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/DigitalSign_1' }">Generate Keys</el-breadcrumb-item>
          <el-breadcrumb-item>Send Public Key to Bob</el-breadcrumb-item>
          <el-breadcrumb-item>Sign and Validate Messages</el-breadcrumb-item>
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
          </div>
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
      urlGenerate: "/cryptography/digitalsign/generate",
      guiUrl: gui,
      waUrl: wa,
      pub_key: "",
      pri_key: ""
    };
  },
  created() {
    this.pub_key = sessionStorage.getItem("pub_key");
    this.pri_key = sessionStorage.getItem("pri_key");
  },
  methods: {
    next() {
      this.$router.push("/DigitalSign_2");
    },
    generate() {
      // this.$axios.post(this.urlGenerate).then(res => {
      //   let pub_key = res.data.pub_key;
      //   let pri_key = res.data.pri_key;
      //   if (pub_key == None || pri_key == None) {
      //     this.$message({
      //       message: "failed to generate'",
      //       type: "error"
      //     });
      //   } else {
      //     this.pub_key = pub_key;
      //     this.pri_key = pri_key;
      //     sessionStorage.setItem("pub_key", this.pub_key);
      //     sessionStorage.setItem("pri_key", this.pri_key);
      //   }
      // });
      this.pub_key = "public key adasdasdasdsa";
      this.pub_key = "public key weiqwyroeir";
      this.pri_key = "private key sfsfdfd";
      sessionStorage.setItem("pub_key", this.pub_key);
      sessionStorage.setItem("pri_key", this.pri_key);
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
