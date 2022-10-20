/**
 * 
 * @file 该文档主要用于学习使用js创建一个队列
 * @author  Kiton
 * @version 0.0.1
 * @license MIT
 * 
 */

 'use strict';

 /**
 * 一个队列
 * @class Queue
 */
class Queue {
    constructor() {
        // 用对象来保存队列里面的元素
        this.items = {};
        // 队列的大小
        this.count = 0;
        // 第一个元素
        this.lowestCount = 0;
    };

    /**
     * @method enqueue
     * @des 向队列尾部添加一个元素
     * @param {*} e 待添加的元素
     * @memberof Queue
     */
    enqueue(e){
        this.items[this.count] = e;
        this.count++
    }

    /**
     * @method dequeue
     * @des 移除队列第一项，并返回被移除的元素
     * @returns {*} 被移除的元素
     * @memberof Queue
     */
    dequeue(){
        if(this.count == 0){
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return res;
    }

    /**
     * @method peek
     * @des 返回队列的第一个元素
     * @returns {*} 队列的第一个元素
     * @memberof Queue
     */
    peek(){
        if(this.count == 0){
            return undefined;
        }
        return  this.items[this.lowestCount];
    }

    /**
     * @method isEmpty
     * @des 如果队列为空返回true，否则返回false
     * @returns {boolean}
     * @memberof Queue
     */
    isEmpty(){
        return this.count - this.lowestCount === 0 ? true : false;
    }

    /**
     * @method size
     * @des 返回队列中的元素个数
     * @returns {number}
     * @memberof Queue
     */
    size(){
        return this.count - this.lowestCount;
    }

    /**
     * @method clear
     * @des 清空队列
     * @memberof Queue
     */
    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    /**
     * @method toString
     * @des 将栈内元素以指定分隔符分割后以字符串格式返回
     * @param {string} separator 分隔符
     * @returns {string} 栈内元素
     * @memberof Queue
     */
     toString(separator = ',') {
        if (typeof(separator) === "string") {
            let res = '';
            for (let i = this.lowestCount; i < this.count - 1; i++) {
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

module.exports.Queue = Queue;

// let queue = new Queue();
// queue.enqueue('8');
// queue.enqueue('klm');
// console.log(queue.dequeue());
// console.log(queue.toString());