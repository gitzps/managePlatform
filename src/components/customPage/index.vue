<script>
export default {
  name: "customPage",
  props: {
    form: Object,
    formList: Array,
    tableData: Array,
    tableConfig: Object,
    columns: Array,
    showPagination: {
      required: false,
      type: Boolean,
      default: () => {
        return true;
      },
    },
    operatebarBtns: Array,
    showToolBar: Boolean,
    pageIndex: Number,
    pageSize: Number,
    total: Number,
    toolbarConfig: Object,
    columnWidth: {
      type: Number,
      required: false,
      default: () => {
        return 120;
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    generateOperateBar() {
      return (
        <div class="operat-bar">
          {this.operatebarBtns.map((el) => {
            let { label, type, method } = el;
            type = type !== undefined ? type : "text";
            return (
              <el-button type={type} onClick={method}>
                {label}
              </el-button>
            );
          })}
        </div>
      );
    },
    generateForm() {
      return (
        <custom-form
          v-model={this.form}
          formList={this.formList}
          class="custom-form"
        ></custom-form>
      );
    },
    generatePagination() {
      return (
        <el-pagination
          class="custom-pagination"
          background
          onSizeChange={this.handleSizeChange}
          onCurrentChange={this.handleCurrentChange}
          currentPage={this.pageIndex}
          pageSizes={[10, 20, 30, 40]}
          pageSize={this.pageSize}
          layout="total, sizes, prev, pager, next, jumper"
          total={this.total}
        ></el-pagination>
      );
    },
    handleSizeChange(size) {
      this.$emit("update:pageSize", size);
    },
    handleCurrentChange(index) {
      this.$emit("update:pageIndex", index);
    },
    generateToolBar() {
      let { btns } = this.toolbarConfig;
      return (
        <div class="tabel-toolbar">
          {btns.map((el) => {
            let { label, type, method } = el;
            return (
              <el-button type={type} onClick={method}>
                {label}
              </el-button>
            );
          })}
        </div>
      );
    },
  },
  render() {
    let props = this?.tableConfig?.props ? this.tableConfig.props : {};
    let event = this?.tableConfig?.event ? this.tableConfig.event : {};
    props["header-row-class-name"] = "table-header";
    props["stripe"] = true;
    return (
      <div class="custom-page">
        {this?.operatebarBtns?.length && this.generateOperateBar()}
        {this?.formList && this.formList.length && this.generateForm()}
        {this.showToolBar && this.generateToolBar()}
        <div class="custom-table">
          <el-table
            data={this.tableData}
            style={{ width: "100%" }}
            props={{ ...props }}
            on={event}
          >
            {this.columns.map((el) => {
              let { prop, label, columnConfig, type } = el;
              let props = columnConfig?.props ? columnConfig.props : {};
              let event = columnConfig?.event ? columnConfig.event : {};
              if (type === "index") {
                return (
                  <el-table-column
                    prop={prop}
                    label={label}
                    width={el.width || 55}
                    props={props}
                    on={event}
                  ></el-table-column>
                );
              } else if (type === "selection") {
                return (
                  <el-table-column
                    prop={prop}
                    label={label}
                    width={el.width || 55}
                    props={props}
                    on={event}
                  ></el-table-column>
                );
              } else if (type === "custom") {
                return (
                  <el-table-column
                    prop={prop}
                    label={label}
                    width={el.width || this.columnWidth}
                    props={props}
                    on={event}
                    scopedSlots={{
                      default: (scope) => {
                        console.log(4444);
                        return (
                          el?.render &&
                          typeof el.render === "function" &&
                          el.render(scope.row)
                        );
                      },
                    }}
                  ></el-table-column>
                );
              } else {
                return (
                  <el-table-column
                    prop={prop}
                    label={label}
                    width={el.width || this.columnWidth}
                    props={props}
                    on={event}
                  ></el-table-column>
                );
              }
            })}
          </el-table>
        </div>
        {this.showPagination && this.generatePagination()}
      </div>
    );
  },
};
</script>

<style lang="less" scoped>
.custom-page {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.operat-bar {
  height: 35px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}

.custom-table {
  flex: 1;
  display: flex;
  flex-direction: column;

  > .el-table {
    flex: 1;
    display: flex;
    flex-direction: column;

    /deep/ .el-table__body-wrapper {
      flex: 1;
    }
  }
}

.custom-form {
  margin-top: 10px;
}

.custom-pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
