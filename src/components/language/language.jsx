import React, {useState, useEffect} from "react";

export function Language(){
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en',}, 'google_translate_element');
      }
    useEffect(() => {
        googleTranslateElementInit()
        }, []);
        
    return(
        <>
         <div id={"container_main"}>
            <div className={"wrap_container wrap_content"}>
                <div className={"container_inner"}>
                    <div id="google_translate_element"></div>
                </div>
            </div>
        </div>
        </>
    )
}