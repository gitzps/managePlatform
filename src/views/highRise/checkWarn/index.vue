<template>
  <div class="add-project">
    <custom-form
      :form="form"
      :isCheck="isCheck"
      :formList="formList"
      :isCondition="false"
      :showOperateBtns="false"
    ></custom-form>
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
        { label: "告警信息", type: "title", span: 24 },
        { label: "告警设备", prop: "device", span: 8, type: "text" },
        { label: "设备ID", prop: "deviceId", span: 8, type: "text" },
        { label: "设备位置", prop: "deviceAddr", span: 8, type: "text" },
        { label: "告警事件", prop: "warnEvent", span: 8, type: "text" },
        { label: "告警时间", prop: "warnTIme", span: 16, type: "text" },
        { label: "抓拍事件", prop: "arrest", span: 24, type: "text" },
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