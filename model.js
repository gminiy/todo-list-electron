const fs = require('fs');
const electron = require('electron');
const path = require('path');
const userDataPath = electron.remote.app.getPath('userData');
const memberListPath = path.join(userDataPath + ('/member-list.json'));
const itemListPath = path.join(userDataPath + ('/item-list.json'));
const loginUserPath = path.join(userDataPath + ('/login-user.json'));

const model = {
    initJSONFiles() {
        if(!fs.existsSync(memberListPath)) {
            fs.writeFileSync(memberListPath, '{}', (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        if(!fs.existsSync(itemListPath)) {
            fs.writeFileSync(itemListPath, '{}', (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        if(!fs.existsSync(loginUserPath)) {
            fs.writeFileSync(loginUserPath, '{}', (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
    },

    updateMemberList(id, password) {
        const memberList = require(memberListPath);
        memberList[id] = password;
        fs.writeFile(memberListPath, JSON.stringify(memberList), (err) => {
            if (err) {
                console.error(err);
            }
        });
    },

    readMemberList() {
        return require(memberListPath);
    },

    updateLoginUser(id) {
        const objUser = {'user': id};

        fs.writeFile(loginUserPath, JSON.stringify(objUser), (err) => {
            if (err) {
                console.error(err);
            }
        });
    },

    readLoginUser() {
        return require(loginUserPath);
    },

    deleteLoginUser(id) {
        fs.writeFile(loginUserPath, '{}', (err) => {
            if (err) {
                console.error(err);
            }
        });
    },

    updateItemList(id, items) {
        const itemList = require(itemListPath);

        itemList[id] = items;
        fs.writeFile(itemListPath, JSON.stringify(itemList), (err) => {
            if (err) {
                console.error(err);
            }
        });
    },

    readItemList() {
        return require(itemListPath);
    }
}

module.exports = model;