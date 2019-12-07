<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>Generate A Shared Secret</el-breadcrumb-item>
          <el-breadcrumb-item><b>Secure Your Communication With Your Key!</b></el-breadcrumb-item>
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
        <el-col :span="7">
            <el-input v-model="plain_text" placeholder="Alice's Plain Text"></el-input>
        </el-col>
        <el-col :span="3">
            <el-button type="primary" @click="encrypt">Encrypt!</el-button>
        </el-col>
        <el-col :span="7">
          <el-input :placeholder="cipher_text" :disabled="true"></el-input>
        </el-col>
        <el-col :span="7">
          <el-input :placeholder="decrypt_text" :disabled="true"></el-input>
        </el-col>
      </el-row>

      <br />
      <br />
      <el-button style="margin-top: 12px;" @click="previous">Previous</el-button>
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
      urlEncrypt: "/cryptography/aes/encrypt",
      guiUrl: gui,
      waUrl: wa,
      shared_sec: "",
      cipher_text: "",
      decrypt_text: "",
      plain_text: "",
    };
  },
  created() {
    this.shared_sec = sessionStorage.getItem("shared_sec");
  },
  methods: {
    previous() {
      this.$router.push("/AES_1");
    },
    encrypt() {
      // this.$axios
      //   .post(this.urlEncrypt, {
      //     plain_text: this.plain_text
      //   })
      //   .then(res => {
      //     let res_data = res.data;
      //     if (red_data.length == 0) {
      //       this.$message({
      //         message: "failed to encrypt",
      //         type: "error"
      //       });
      //     } else {
      //       this.cipher_text = res_data.cipher_text;
      //       this.decrypt_text = res_data.decrypt_text;
      //     }
      //   });
      this.cipher_text = 'asdsadasfdsf';
      this.decrypt_text = this.plain_text;
    },
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
