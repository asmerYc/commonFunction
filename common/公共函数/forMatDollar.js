/*
 * @Author: your name
 * @Date: 2020-07-20 18:06:28
 * @LastEditTime: 2020-07-20 20:19:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/公共函数/forMatDollar.js
 */ 
const price =1024;
console.log(formatMoney(price))
function formatMoney(price) {
  const money = price.toLocaleString('en-IN',{
    style:'currency',
    currency:'CNY',
    currycyDisplay:'symbol',
    mininumFractionDigits:2
  });
  return money.replace('CN','')
}