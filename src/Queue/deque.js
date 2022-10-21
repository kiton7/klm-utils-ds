/**
 * 
 * @file 该文档主要用于学习使用js创建一个双端队列
 * @author  Kiton
 * @version 0.0.1
 * @license MIT
 * 
 */

'use strict';

/**
 * 一个队列
 * @class Deque
 */
class Deque {
    constructor() {
        // 用对象来保存队列里面的元素
        this.items = {};
        // 队列的大小
        this.count = 0;
        // 第一个元素
        this.lowestCount = 0;
    };

    /**
     * @method addFront
     * @des 该方法在双端队列前端添加新的元素
     * @param {*} e 待添加的元素
     * @memberof Deque
     */
    addFront(e) {
        if (this.isEmpty()) {
            // 第一种情况：队列元素个数为0，因为addBack已经有了更新count属性值的逻辑，
            // 因此这边复用addBack(), 避免重复编写代码
            this.addBack(e);
        } else if (this.lowestCount > 0) {
            // 第二种情况，队列第一个元素以及被移除过，即lowestCount != 0
            this.lowestCount--;
            this.items[this.lowestCount] = e;
        } else {
            // 第三种情况，队列第一个元素未被移除，即lowestCount == 0；将所有元素后移一位
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = e;
        }
    }

    /**
     * @method addBack
     * @des 该方法在双端队列尾端添加新的元素
     * @param {*} e 待添加的元素
     * @memberof Deque
     */
    addBack(e) {
        this.items[this.count] = e;
        this.count++;
    }

    /**
     * @method removeFront
     * @des 该方法用于移除队列第一个元素，并返回删除的元素
     * @returns {*}
     * @memberof Deque
     */
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return res;
    }

    /**
     * @method removeBack
     * @des 该方法用于移除队列最后一个元素，并返回删除的元素
     * @returns {*}
     * @memberof Deque
     */
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        const res = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return res;
    }

    /**
     * @method peekFront
     * @des 该方法用于返回队列第一个元素
     * @returns {*} e 队列的第一个元素
     * @memberof Deque
     */
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    /**
     * @method peekBack
     * @des 该方法用于返回队列最后一个元素
     * @returns {*} e 队列的最后一个元素
     * @memberof Deque
     */
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    /**
     * @method isEmpty
     * @des 如果队列为空返回true，否则返回false
     * @returns {boolean}
     * @memberof Deque
     */
    isEmpty() {
        return this.count - this.lowestCount === 0 ? true : false;
    }

    /**
     * @method size
     * @des 返回队列中的元素个数
     * @returns {number}
     * @memberof Deque
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * @method clear
     * @des 清空队列
     * @memberof Deque
     */
    clear() {
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    /**
     * @method toString
     * @des 将栈内元素以指定分隔符分割后以字符串格式返回
     * @param {string} separator 分隔符
     * @returns {string} 栈内元素
     * @memberof Deque
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

module.exports.Deque = Deque;

/** 
 * @test
 */
let deque = new Deque();

for (let index = 1; index <= 8; index++) {
    deque.addBack(index);
}

for (let index = 1; index <= 8; index++) {
    deque.addFront(index);
}

console.log(deque);
console.log("count:", deque.size());
console.log("isEmpty:", deque.isEmpty());
console.log("string:", deque.toString());
deque.clear();
console.log(deque);