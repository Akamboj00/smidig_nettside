import fire from "../../server/firebase"

function getDatabaseRef(){
    return fire.database().ref();
}

export function getSessionStorage(key){
    return JSON.parse(sessionStorage.getItem(key.toString()));
}

export async function getDatabaseWithKey(table, uid){
    return await getDatabaseRef().child(table).child(uid).once('value').then((snapshot) => {
        return snapshot.val();
    });
}



