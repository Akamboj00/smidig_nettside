import fire from "../../server/firebase"
import {forEach} from "react-bootstrap/ElementChildren";

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

export async function postProgress(){
    const createParts= {
            0:{
                0:{
                    part_id: 0,
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                1:{
                    part_id: 1,
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                2:{
                    part_id: 2,
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                3:{
                    part_id: 3,
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                4:{
                    part_id: 4,
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                }, 
                5:{
                    part_id: 5,
                    part_name: "Sunbell 2.0 PCBA/Sunbell REV D PCBA",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                6:{
                    part_id: 6,
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                7:{
                    part_id: 7,
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
            },
            1:{
                0:{
                    part_id: 0,
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                1:{
                    part_id: 1,
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                2:{
                    part_id: 2,
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                3:{
                    part_id: 3,
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                4:{
                    part_id: 4,
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                }, 
                5:{
                    part_id: 5,
                    part_name: "Sunbell 2.0 PCBA/Sunbell REV D PCBA",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                6:{
                    part_id: 6,
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                7:{
                    part_id: 7,
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
            },
            2:{
                0:{
                    part_id: 0,
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                1:{
                    part_id: 1,
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                2:{
                    part_id: 2,
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                3:{
                    part_id: 3,
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                4:{
                    part_id: 4,
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                }, 
                5:{
                    part_id: 5,
                    part_name: "Sunbell 2.0 PCBA/Sunbell REV D PCBA",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                6:{
                    part_id: 6,
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                7:{
                    part_id: 7,
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
            },
            3:{
                0:{
                    part_id: 0,
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                1:{
                    part_id: 1,
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                2:{
                    part_id: 2,
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                3:{
                    part_id: 3,
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                4:{
                    part_id: 4,
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                }, 
                5:{
                    part_id: 5,
                    part_name: "Sunbell 2.0 PCBA/Sunbell REV D PCBA",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                6:{
                    part_id: 6,
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                7:{
                    part_id: 7,
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
            },
            4:{
                0:{
                    part_id: 0,
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                1:{
                    part_id: 1,
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                2:{
                    part_id: 2,
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                3:{
                    part_id: 3,
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                4:{
                    part_id: 4,
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                }, 
                5:{
                    part_id: 5,
                    part_name: "Sunbell 2.0 PCBA/Sunbell REV D PCBA",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                6:{
                    part_id: 6,
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                7:{
                    part_id: 7,
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
            },
            5:{
                0:{
                    part_id: 0,
                    part_name: "Sunbell 2.0 Solar panel complete 4m cable",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                1:{
                    part_id: 1,
                    part_name: "Sunbell solar cable including plug. 4m",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                2:{
                    part_id: 2,
                    part_name: "Sunbell 2.0 / rev D battery 18650-LifePO- 3,2V-1600mAh",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                3:{
                    part_id: 3,
                    part_name: "Sunbell 2.0 Battery pack and light unit complete",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                4:{
                    part_id: 4,
                    part_name: "Sunbell 2.0 Light and gooseneck unit. including battery box-top and switch covers",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                }, 
                5:{
                    part_id: 5,
                    part_name: "Sunbell 2.0 PCBA/Sunbell REV D PCBA",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                6:{
                    part_id: 6,
                    part_name: "Sunbell 2.0/ REV D power switch cover",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
                7:{
                    part_id: 7,
                    part_name: "Battery box and PCBA screws Torx",
                    part_image:"https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
                    part_video: "https://mybrightbucket.s3.eu-north-1.amazonaws.com/bright.mp4",
                },
            }
    };
    let posts2 = {};
    posts2['/progress'] = createParts;

    //let userRef = fire.database().ref(`users/${userAuth.uid}/${userId}`);
    return getDatabaseRef().update(posts2)
}


function getUserAuth() {
    const key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    return getSessionStorage(key);
}

export async function postUser(firstName, lastName, language, image) {
    const key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    const userAuth = getSessionStorage(key);
    let userKey = getDatabaseRef().child('users').child(userAuth.uid).push().key;


    const newUser = {
        id: userAuth.uid,
        userId: userKey,
        firstName: firstName,
        lastName: lastName,
        language: language,
        progress: {
            0: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
            },
            1: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
            },
            2: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
            },
            3: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
            },
            4: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
            },
            5: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
            }
        },
        image: image
    }

    let posts = {};
    posts[`users/${userAuth.uid}/${userKey}`] = newUser;

    //let userRef = fire.database().ref(`users/${userAuth.uid}/${userId}`);
    postProgress()
    sessionStorage.setItem("user", userKey);
    return getDatabaseRef().update(posts);
}

export async function editUser(firstName, lastName, language, image, userId, progress) {
    const key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    const userAuth = getSessionStorage(key);

    const updateUser = {
        id: userAuth.uid,
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        language: language,
        progress: progress,
        image: image
    }

    let posts = {};
    posts[`users/${userAuth.uid}/${userId}`] = updateUser;

    return getDatabaseRef().update(posts);
}

export default function newReport(product_id, part_id, part_name, comment) {
    const key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    const userAuth = getSessionStorage(key);

    const report = {
        userId: sessionStorage.getItem('user'),
        partNumber: part_id,
        productId: product_id,
        partName: part_name,
        productName: sessionStorage.getItem("current_report_product_name"),
        comment: comment
    }

    return getDatabaseRef().child("reports").child(userAuth.uid).push(report);
}

export function deleteUser(key) {
    const userAuth = getUserAuth();

    return getDatabaseRef().child("users").child(userAuth.uid).child(key).remove();
}



