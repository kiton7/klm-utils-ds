/**
 * 
 * @file 链表的元素
 * @author  Kiton
 * @version 0.0.1
 * @license MIT
 * 
 */

'use strict';


/**
 * 链表中的元素
 * @class Node
 */
class Node {
    constructor(element) {
        // 该节点保存的元素
        this.element = element;
        // 该节点所指向的下一节点
        this.next = undefined;
    };
}

module.exports.Node = Node;