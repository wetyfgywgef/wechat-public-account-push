/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc93edb14c2534c58',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f41ac6408dd7e92bd56cb653bfc12709',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'oXhVU6RanwgpqIGnPCccviLHAlps',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '61bRcGta16BKhq0t65krjsgx7O00Af-LvNPJPE1CWm4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '4-19',

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '61bRcGta16BKhq0t65krjsgx7O00Af-LvNPJPE1CWm4',

  CALLBACK_USERS: [
    {
      name: 'oXhVU6RanwgpqIGnPCccviLHAlps',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

