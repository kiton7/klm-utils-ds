/**
 * 
 * @file 该文档主要用于学习使用js创建一个基于对象的栈
 * @author  Kiton
 * @version 0.0.1
 * @license MIT
 * 
 */

'use strict';

/**
 * 一个基于对象的栈
 * @class StackObj
 */
class StackObj {
    constructor() {
        // 用对象来保存栈里面的元素
        this.items = {};
        this.count = 0;
    };

    /**
     * @method push
     * @des 添加一个元素至栈顶
     * @param {*} ele 添加的元素
     * @memberof StackObj
     */
    push(ele) {
        this.items[this.count] = ele;
        this.count++;
    };

    /**
     * @method pop
     * @des 移除栈顶元素
     * @returns {*} 被移除的元素
     * @memberof StackObj
     */
    pop() {
        if (this.isEmpty()) return undefined;
        // return this.items.pop();
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const res = this.items[this.count];
        delete this.items[this.count];
        return res;
    };

    /**
     * @method top
     * @des 获取栈顶元素
     * @returns {*} 栈顶元素
     * @memberof StackObj
     */
    top() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    };

    /**
     * @method isEmpty
     * @des 判断栈是否为空
     * @returns {boolean} 栈是否为空
     * @memberof StackObj
     */
    isEmpty() {
        return this.count === 0;
    };

    /**
     * @method clear
     * @des 清空栈
     * @memberof StackObj
     */
    clear() {
        this.items = {};
        this.count = 0;
    };

    /**
     * @method size
     * @des 获取栈内元素个数
     * @returns {number} 栈内元素个数
     * @memberof StackObj
     */
    size() {
        return this.items.count;
    };

    /**
     * @method toString
     * @des 将栈内元素以指定分隔符分割后以字符串格式返回
     * @param {string} separator 分隔符
     * @returns {string} 栈内元素
     * @memberof StackObj
     */
    toString(separator) {
        if (typeof(separator) === "string") {
            let res = '';
            for (let i = 0; i < this.count - 1; i++) {
                res += this.items[i];
                res += separator;
            }
            res += this.items[this.count - 1];
            return res;
        } else {
            throw new Error("separator is not a string");
        }
    }
}

module.exports.StackObj = StackObj;

let stack = new StackObj();
stack.push(7);
stack.push('klm');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
stack.push(7);
stack.push('klm');
stack.push({
    k: 'klm'
});
// stack.clear();
console.log(stack.toString('/'));
console.log(stack);