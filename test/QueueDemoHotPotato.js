const { Queue } = require('../src/Queue/queue');
/**
 * @func hotPotato
 * @desc 击鼓传花
 * @param {*} elements // 参加的元素
 * @param {*} times    // 每轮的次数
 */
function hotPotato(elements, times) {
    let queue = new Queue();
    const eliminatedList = [];

    for (let index = 0; index < elements.length; index++) {
        queue.enqueue(elements[index])
    }

    while (queue.size() > 1) {
        for (let index = 0; index < times; index++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }

    return { win: queue.dequeue(), eliminatedList };
}

const elements = ["Jn", "Jk", "Ca", "Id", "Cl"]
const res = hotPotato(elements, 7)
console.log(res);