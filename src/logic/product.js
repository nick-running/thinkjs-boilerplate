module.exports = class extends think.Logic {
  indexAction() {

  }
  addAction() {
    this.allowMethods = 'post'; //  只允许 POST 请求类型
    this.rules = {
      name: {
        string: true,
        required: true,
        trim: true
      },
      summary: {
        string: true,
        required: true,
        trim: true
      },
      content: {
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
