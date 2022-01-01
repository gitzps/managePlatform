<template>
  <custom-page
    :form="form"
    :formList="formList"
    :columns="columns"
    :tableData="tableData"
    :operatebarBtns="operatebarBtns"
    :pageIndex.sync="pageIndex"
    :pageSize.sync="pageSize"
    :total="total"
    @update="initPage"
  ></custom-page>
</template>
<script>
import addProject from "./addProject";
export default {
  name: "ownerInfo",
  data() {
    return {
      operatebarBtns: [
        {
          label: "新增绑定",
          method: () => {
            this.$dialog.openDialog({
              width: "850px",
              title: "新增绑定",
              dialogContent: addProject,
            });
          },
        },
        {
          label: "导入绑定",
          method: () => {
            console.log("导入绑定");
          },
        },
      ],
      form: { louDong: "", floor: "", house: "", ownerInfo: "" },
      formList: [
        { label: "设备名称/ID", prop: "deviceName" },
        { label: "设备类型", prop: "deviceType" },
        { label: "楼栋", prop: "loudong" },
        { label: "楼层", prop: "floor" },
        { label: "房屋", prop: "house" },
      ],
      columns: [
        { label: "设备名称", prop: "deviceName" },
        { label: "设备ID", prop: "deviceId" },
        { label: "设备类型", prop: "deviceType" },
        { label: "楼栋", prop: "louDong" },
        { label: "楼层", prop: "floor" },
        { label: "房屋号", prop: "houseId" },
        { label: "创建人", prop: "created" },
        { label: "创建时间", prop: "createdTime" },
        { label: "更新时间", prop: "updateTime" },
        {
          label: "操作",
          prop: "operate",
          type: "custom",
          width: "140px",
          columnConfig: {
            props: {
              fixed: "right",
            },
          },
          render: (row) => {
            return (
              <div class="table-operate">
                <el-button type="text" onClick={this.editor.bind(this, row)}>
                  移动
                </el-button>
                <el-popover placement={"top"} width={"160"} title="提示">
                  <p>确定删除吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button
                      size="mini"
                      type="text"
                      onClick={() => {
                        document.body.click();
                      }}
                    >
                      取消
                    </el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      onClick={this.delRow.bind(this, row)}
                    >
                      确定
                    </el-button>
                  </div>
                  <el-button slot="reference" type="text">
                    删除
                  </el-button>
                </el-popover>
              </div>
            );
          },
        },
      ],
      tableData: [{ residentName: "lisi" }, { residentName: "zhangsan" }],
      pageIndex: 1,
      pageSize: 20,
      total: 100,
    };
  },
  methods: {
    initPage() {},
    editor(row) {
      this.$dialog.openDialog({
        width: "850px",
        title: "编辑业主",
        props: { row },
        dialogContent: addProject,
      });
    },
    delRow(row) {
      document.body.click();
    },
  },
};
</script>
