const model = require('./model');
const addController = {
    add(user, [name, status, id]) {
        const items = model.readItemList()[user];
        const item = {'name': name, 'status': status, 'id': id};
        items.push(item);
        model.updateItemList(user, items);
    }
}

module.exports = addController;