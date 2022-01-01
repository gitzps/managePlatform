<template>
  <div class="add-project">
    <custom-form
      :form="form"
      :isCheck="isCheck"
      :formList="formList"
      :isCondition="false"
      :showOperateBtns="false"
    ></custom-form>
    <div class="operation-btns" v-if="!isCheck">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addProject",
  props: {
    row: Object,
    operateType: {
      required: false,
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
      form: {
        title: "",
        residentName: "",
        residentName: "",
        crdType: "",
        crdCode: "",
        remark: "",
        louDong: "",
        floor: "",
        houseId: "",
      },
      formList: [
        { label: "基础信息", type: "title", span: 24 },
        { label: "住户姓名", prop: "residentName", span: 12 },
        { label: "手机号码", prop: "residentName", span: 12 },
        { label: "证件类型", prop: "crdType", span: 12 },
        { label: "证件号码", prop: "crdCode", span: 12 },
        { label: "备注", prop: "remark", span: 24 },
        { label: "房屋信息", type: "title", span: 24 },
        { label: "楼栋", prop: "louDong", span: 8, type: "select" },
        { label: "楼层", prop: "floor", span: 8, type: "select" },
        { label: "房屋号", prop: "houseId", span: 8, type: "select" },
      ],
    };
  },
  computed: {
    isCheck() {
      return this.operateType === "isCheck";
    },
  },
  mounted() {
    if (this.row) {
      let keys = Object.keys(this.form);
      keys.forEach((el) => {
        this.form[el] = this.row[el] ? this.row[el] : "";
      });
      console.log(this.form);
    }
  },
  methods: {
    cancel() {
      this.$emit("close");
    },
    save() {
      this.cancel();
    },
  },
};
</script>

<style lang="less" scoped>
.add-project {
  display: flex;
  flex-direction: column;

  .operation-btns {
    display: flex;
    height: 35px;
    justify-content: center;
    margin-top: 22px;
  }
}
</style>