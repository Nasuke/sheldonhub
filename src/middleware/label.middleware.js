const { create } = require("../service/label.service")
const { queryLabel } = require("../service/label.service")


const verifyLabelExists = async (ctx, next) => {

    // 1. 获取labels并进行遍历
    const { labels } = ctx.request.body
    const labelObjArr = []
    for (const name of labels) {
        // 2. 用labelObj来保存每个label { name: '', id: } 便于存到moment_label表
        const labelObj = { name }
        const result = await queryLabel(name)
        // 3. 存在就用其id 否则插入后用insertId
        if (result) {
            labelObj.id = result.id
        } else {
            const insertResult = await create(name)
            labelObj.id = insertResult.insertId
        }
        labelObjArr.push(labelObj)
    }

    // 4. 保存labelObj到ctx
    ctx.labels = labelObjArr
    await next()
}

module.exports = verifyLabelExists