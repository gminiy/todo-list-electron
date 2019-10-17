const model = require('./model');

const deleteController = {
    delete(user, item) {
        const items = model.readItemList()[user];
        const indexOfItemToDelete = items.indexOf(items.find((element) => {
            return element.id === parseInt(item.id);
        }));
        items.splice(indexOfItemToDelete, 1);
        model.updateItemList(user, items);
    }
}

module.exports = deleteController;