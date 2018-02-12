module.exports = class extends think.Logic {
  indexAction() {

  }
  addAction() {
    this.allowMethods = 'post';
    this.rules = {
      name: {
        string: true,
        required: true,
        trim: true
      }
    }
  }
  deleteAction() {
    this.allowMethods = 'delete'; //  只允许 DELETE 请求类型
    this.rules = {
      id: {
        int: true,
        required: true
      }
    }
  }
};
