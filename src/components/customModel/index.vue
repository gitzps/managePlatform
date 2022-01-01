<script>
export default {
  name: "customModel",
  props: {},
  data() {
    return { dialogVisible: false, dialogConfig: {} };
  },
  methods: {
    handleClose(done) {
      typeof done == "function" && done();
      this.dialogVisible = false;
    },
    generateFoorter() {
      return (
        <div slot="footer" class="dialog-footer">
          <el-button onClick={this.closeDialog}>取 消</el-button>
          <el-button type="primary" onClick={this.closeDialog}>
            确 定
          </el-button>
        </div>
      );
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    openDialog(params) {
      this.dialogConfig = params;
      this.dialogVisible = true;
    },
    initDialog() {},
  },
  render(h) {
    let { title, showFooter, dialogContent, props, width } = this.dialogConfig;

    if (this.dialogVisible) {
      return (
        <el-dialog
          title={title}
          visible={this.dialogVisible}
          width={width !== undefined ? width : "50%"}
          beforeClose={this.handleClose}
          onOpen={this.initDialog}
          destroyOnClose
        >
          {h(dialogContent, {
            on: {
              close: this.closeDialog,
            },
            props: {
              ...props,
            },
            attrs: {
              ...props,
            },
          })}
          {showFooter && this.generateFoorter()}
        </el-dialog>
      );
    }
  },
};
</script>