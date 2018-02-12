const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async listAction() {
    let model = this.model('classify')
    let classifyList = await model.select()
    this.ctx.success(classifyList)
  }
  async addAction(){
    let model = this.model('classify')
    let name = this.ctx.post('name')
    console.log('name is:'+name)
    let insertId = await model.add({name: name})
    if(insertId) {
      this.ctx.success()
    }else{
      this.ctx.fail()
    }
  }
  async deleteAction(){
    let model = this.model('classify')
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
