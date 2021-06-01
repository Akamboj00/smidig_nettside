import React, {useState, useEffect} from "react";
import Cookies from 'js-cookie'

export function Language(){

    console.log(sessionStorage.getItem("user_language"))

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.FloatPosition.TOP_RIGHT,
            autoDisplay: false
        }, 'google_translate_element');
    }

    (function () {
        var googleTranslateScript = document.createElement('script');
        googleTranslateScript.type = 'text/javascript';
        googleTranslateScript.async = true;
        googleTranslateScript.src =
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(
            googleTranslateScript);
    })();

    Cookies.remove('googtrans',{path:'', domain: 'domainNameNoDot.com'});
    Cookies.remove('googtrans',{path:'', domain: '.domainNamePrecedDot.com'});
    Cookies.set('GoogleAccountsLocale_session', `${sessionStorage.getItem("user_language").toLowerCase()}`, { expires: 999});
    Cookies.set('googtrans', `/en/${sessionStorage.getItem("user_language").toLowerCase()}`, { expires: 999});
    useEffect(() => {
        googleTranslateElementInit()
        }, []);
        
    return(
        <>
         <div id={"container_main"}>
            <div className={"wrap_container wrap_content"}>
                <div className={"container_inner"}>
                <div class="custom-translate" style={{display: "none"}} id="google_translate_element"></div>
                </div>
            </div>
        </div>
        </>
    )
}