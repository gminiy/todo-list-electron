const model = require('./model');

const updateController = {
    update(user, item, status) {
        const items = model.readItemList()[user];
        const indexOfItemToUpdate = items.indexOf(items.find((element) => {
            return element.id === parseInt(item.id);
        }));
        items[indexOfItemToUpdate].status = status;
        model.updateItemList(user, items);
    }
}

module.exports = updateController;