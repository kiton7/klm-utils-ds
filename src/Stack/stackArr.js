/**
 * 
 * @file 该文档主要用于学习使用js创建一个基于数组的栈
 * @author  Kiton
 * @version 0.0.1
 * @license MIT
 * 
 */

'use strict';

/**
 * 一个基于数组的栈
 * @class StackArr
 */
class StackArr {
    constructor() {
        // 用数组来保存栈里面的元素
        this.items = [];
    };

    /**
     * @method push
     * @des 添加一个元素至栈顶
     * @param {*} ele 添加的元素
     * @memberof StackArr
     */
    push(ele) {
        this.items.push(ele);
    };

    /**
     * @method pop
     * @des 移除栈顶元素
     * @returns {*} 被移除的元素
     * @memberof StackArr
     */
    pop() {
        if (this.isEmpty()) return undefined;
        return this.items.pop();
    };

    /**
     * @method top
     * @des 获取栈顶元素
     * @returns {*} 栈顶元素
     * @memberof StackArr
     */
    top() {
        if (this.isEmpty()) return undefined;
        return this.items[this.items.length - 1];
    };

    /**
     * @method isEmpty
     * @des 判断栈是否为空
     * @returns {boolean} 栈是否为空
     * @memberof StackArr
     */
    isEmpty() {
        return this.items.length == 0;
    };

    /**
     * @method clear
     * @des 清空栈
     * @memberof StackArr
     */
    clear() {
        this.items = [];
    };

    /**
     * @method size
     * @des 获取栈内元素个数
     * @returns {number} 栈内元素个数
     * @memberof StackArr
     */
    size() {
        return this.items.length;
    };

    /**
     * @method toString
     * @des 将栈内元素以指定分隔符分割后以字符串格式返回
     * @param {string} separator 分隔符
     * @returns {string} 栈内元素
     * @memberof StackArr
     */
    toString(separator) {
        if (typeof(separator) === "string") {
            return this.items.join(separator);
        } else {
            throw new Error("separator is not a string");
        }
    }
}

module.exports.StackArr = StackArr;