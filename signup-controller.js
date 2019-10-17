const model = require('./model');
const signupController = {
    saveUser(id, password) {
        const memberList = model.readMemberList();
        if(id in memberList) {
            alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
            return false;
        }
        model.updateMemberList(id, password);
        model.updateItemList(id, []);
        return true;
    }
}

module.exports = signupController;