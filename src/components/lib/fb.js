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

// How to use GUIDE:
// users = "users"
// authUID = authUser.uid
// childKey = user index
// progress = "progress"
// productKey = progress index
export async function getDatabaseSingleProgress(users, authUID, childKey, progress, productKey) {
    return await getDatabaseRef().child(users).child(authUID).child(childKey).child(progress).child(productKey).once('value').then((snapshot) => {
        return snapshot.val();
    });
}

//lage progress data i firebase
/*export async function postProgress(){
    const createParts= {
            0:{
                0:{
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                1:{
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                2:{
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                3:{
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                4:{
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                }, 
                5:{
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                6:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                7:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
            },
            1:{
                0:{
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                1:{
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                2:{
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                3:{
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                4:{
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                }, 
                5:{
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                6:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                7:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
            },
            2:{
                0:{
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                1:{
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                2:{
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                3:{
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                4:{
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                }, 
                5:{
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                6:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                7:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
            },
            3:{
                0:{
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                1:{
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                2:{
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                3:{
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                4:{
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                }, 
                5:{
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                6:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                7:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
            },
            4:{
                0:{
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                1:{
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                2:{
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                3:{
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                4:{
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                }, 
                5:{
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                6:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                7:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
            },
            5:{
                0:{
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                1:{
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                2:{
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                3:{
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                4:{
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                }, 
                5:{
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                6:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
                7:{
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg"
                },
            }
    };
    let posts2 = {};
    posts2['/progress'] = createParts;

    //let userRef = fire.database().ref(`users/${userAuth.uid}/${userId}`);
    return getDatabaseRef().update(posts2)
}
*/

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
    //postProgress()
    return getDatabaseRef().update(posts);
}



