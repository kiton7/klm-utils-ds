/**
 * 
 * @file 该文档主要用于学习使用js创建一个链表
 * @author  Kiton
 * @version 0.0.1
 * @license MIT
 * 
 */
const { Node } = require('./node');
'use strict';

/**
 * @func defaultEqualsFn
 * @des 向队列尾部添加一个元素
 * @param {Node} a 待比较元素a
 * @param {Node} b 待比较元素b
 * @returns {boolean} 两个元素是否相等
 */
function defaultEqualsFn(a, b) {
    return a === b;
}

/**
 * 一个链表
 * @class LinkedList
 */
class LinkedList {
    constructor(equalsFn = defaultEqualsFn) {
        // 链表的大小
        this.count = 0;
        // 第一个元素的引用
        this.head = undefined;
        // 比较链表元素是否相等的方法
        this.equalsFn = equalsFn;
    };

    /**
     * @method push
     * @desc 向链表尾部添加一个新元素
     * @param {*} e
     * @memberof LinkedList
     */
    push(e) {
        // 将传进来的值封装
        const node = new Node(e);
        let current;
        if (this.head == null) {
            // 第一种情况：链表为空，直接添加
            this.head = node;
        } else {
            current = this.head;
            // 获得最后一项
            while (current.next != null) {
                current = current.next;
            }
            // 将其next赋值为新元素，建立链接
            current.next = node;
        }
        this.count++;
    }

    /**
     * @method insert
     * @desc 向链表指定位置添加一个新元素
     * @param {*} e
     * @param {number} pos
     * @returns {boolean}
     * @memberof LinkedList
     */
    insert(e, pos) {
        if (pos >= 0 && pos <= this.count) {
            const node = new Node(e);
            if (pos == 0) {
                const head = this.head;
                node.next = head;
                this.head = node;
            } else {
                const previous = this.getElementAt(pos - 1);
                node.next = previous.next;
                previous.next = node;
            }
            // 更新数组长度
            this.count++;
            return true;
        }
        return false
    }

    /**
     * @method getElementAt
     * @desc 返回链表指定位置的元素，如果链表中指定位置不存在元素则返回undefined
     * @param {number} index
     * @returns {*}
     * @memberof LinkedList
     */
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }

    /**
     * @method remove
     * @desc 删除链表中第一个跟指定值一样的元素
     * @param {*} e
     * @memberof LinkedList
     */
    remove(e) {
        if (this.isEmpty()) {
            return undefined;
        }
        let current;
        let previous;
        for (let i = 0; i < this.count; i++) {
            current = this.getElementAt(i)
            if (this.equalsFn(e, current.element)) {
                if (i == 0) {
                    this.head = current.next;
                    this.count--;
                    return current.element;
                }
                // 获取当前节点的上一个节点
                previous = this.getElementAt(i - 1);
                // 移除当前节点
                previous.next = current.next;
                this.count--;
                return current.element
            }
        }
    }

    /**
     * @method removeAt
     * @desc 删除链表中指定位置的元素
     * @param {number} index
     * @returns
     * @memberof LinkedList
     */
    removeAt(index) {
        // 检测越界值
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);

                let current = previous.next;
                previous.next = current.next;
                // previous.next = current.next;
            }
            // 更新数组长度
            this.count--;
            return current.element;
        }
        return undefined;
    }

    /**
     * @method indexOf
     * @desc 返回元素在链表中的索引，如果链表中不存在元素则返回-1
     * @param {Node} e
     * @memberof LinkedList
     */
    indexOf(e) {
        for (let i = 0; i < this.count; i++) {
            let current = this.getElementAt(i);
            if (this.equalsFn(e, current.element)) {
                return i;
            }
        }
        return -1;
    }

    /**
     * @method isEmpty
     * @desc 如果链表元素为0则返回true，否则返回false
     * @returns {boolean}
     * @memberof LinkedList
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * @method size
     * @desc 返回链表中元素的个数
     * @returns {number}
     * @memberof LinkedList
     */
    size() {
        return this.count;
    }

    /**
     * @method getHead
     * @desc 返回链表第一个元素
     * @returns {*}
     * @memberof LinkedList
     */
    getHead() {
        return this.head
    }

    /**
     * @method toString
     * @desc 返回表示整个链表的字符串
     * @returns {String}
     * @memberof LinkedList
     */
    toString() {
        let str = '';
        if (!this.isEmpty()) {
            let current;
            for (let i = 0; i < this.count - 1; i++) {
                current = this.getElementAt(i);
                str += current.element + ",";
            }
            str += current.next.element;
        }
        return str;
    }
}

module.exports.LinkedList = LinkedList;

/** @test */
let linkedList = new LinkedList();

linkedList.push(8);
linkedList.push(7);
linkedList.push("klm");
linkedList.removeAt(1);
linkedList.insert(7, 1);
linkedList.insert(15, 0);
linkedList.insert(15, 4);
linkedList.remove(15);
for (let i = 0; i < linkedList.size(); i++) {
    console.log(linkedList.getElementAt(i));
}

console.log(linkedList.size());
console.log(linkedList.isEmpty());
console.log(linkedList.toString());