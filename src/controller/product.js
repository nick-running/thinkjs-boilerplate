const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async listAction() {
    let model = this.model('product')
    let productList = await model.select()
    this.ctx.success(productList)
  }
  async addAction(){
    let model = this.model('product')
    let classify = this.ctx.post('classify')
    let name = this.ctx.post('name')
    console.log('name is:'+name)
    let insertId = await model.add({name: name, classify_id: classify})
    if(insertId) {
      this.ctx.success()
    }else{
      this.ctx.fail()
    }
  }
  async deleteAction(){
    let model = this.model('product')
    try {
      let id = this.ctx.post('id')
      let affectedRows = await model.where({id: id}).delete()
      if(affectedRows) {
        this.ctx.success()
      }else{
        this.ctx.fail()
      }
    }catch (e){
      this.ctx.fail(e)
    }
  }
};
