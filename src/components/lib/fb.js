import fire from "../../server/firebase"

function getDatabaseRef() {
    return fire.database().ref();
}

export function getSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key.toString()));
}

export async function getDatabaseWithKey(table, uid) {
    return await getDatabaseRef().child(table).child(uid).once('value').then((snapshot) => {
        return snapshot.val();
    });
}

export async function postUser(firstName, lastName, language) {
    const key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    const userAuth = getSessionStorage(key);

    const data = await getDatabaseWithKey("users", userAuth.uid);
    let count = 0;
    if(data !== null){
        count = data.length
    }
    const newUser = {
        id: userAuth.uid,
        userId: count,
        firstName: firstName,
        lastName: lastName,
        language: language,
        progress: {
            0: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            },
            1: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            },
            2: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            },
            3: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            },
            4: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            },
            5: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            }
        }
    }

    let posts = {};
    posts[`users/${userAuth.uid}/${count}`] = newUser;

    //let userRef = fire.database().ref(`users/${userAuth.uid}/${userId}`);
    return getDatabaseRef().update(posts);
}



