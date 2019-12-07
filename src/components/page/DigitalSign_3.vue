<template>
  <div class="table">
    <div class="container">
      <div class="handle-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>Generate Keys</el-breadcrumb-item>
          <el-breadcrumb-item>Send Public Key to Bob</el-breadcrumb-item>
          <el-breadcrumb-item><b>Sign and Validate Messages</b></el-breadcrumb-item>
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
          </div>
        </el-col>
        <el-col :span="6" offset="2">
          <div class="grid-content">
            <el-image style="width: 100px; height: 100px" :src="waUrl" :fit="fit"></el-image>
            <br />
            <br />
          </div>
        </el-col>
      </el-row>
      <br />
      <br />

      <el-row :type="flex" justify="center">
        <el-col :span="6">
            <el-input v-model="plain_text" placeholder="Alice's Message"></el-input>
        </el-col>
        <el-col :span="2">
            <el-button type="primary" @click="encrypt">Sign it!</el-button>
        </el-col>
        <el-col :span="6" offset="1">
            <el-input :placeholder="cipher_text" :disabled="true"></el-input>
        </el-col>
        <el-col :span="6" offset="1">
            <el-input :placeholder="decrypt_text" :disabled="true"></el-input>
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
      <!-- <el-button style="margin-top: 12px;" @click="next">Next</el-button> -->
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
      guiUrl: gui,
      waUrl: wa,
      pub_key: "",
      pri_key: "",
      plain_text: "",
      cipher_text: "",
      decrypt_text: ""
    };
  },
  created() {
    this.pub_key = sessionStorage.getItem("pub_key");
    this.pri_key = sessionStorage.getItem("pri_key");
  },
  methods: {
    previous() {
      this.$router.push("/DigitalSign_2");
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
      this.cipher_text = 'poiuytrefghjkl';
      this.decrypt_text = this.plain_text;
    },
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
