

export function checkSession(){
    const authUser = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    return authUser !== undefined;
}