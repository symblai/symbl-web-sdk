interface Browsers {
    chrome: boolean;
    firefox: boolean;
    iexplorer: boolean;
    opera: boolean;
    safari: boolean;
}

/* eslint-disable prefer-const */
const checkBrowser = ():Browsers => {

    // Get the user-agent string
    const userAgentString =
        navigator.userAgent;

    // Detect Chrome
    let chrome =
        userAgentString.indexOf("Chrome") > -1;

    // Detect Internet Explorer
    let iexplorer =
        userAgentString.indexOf("MSIE") > -1 &&
        userAgentString.indexOf("rv:") > -1;

    // Detect Firefox
    let firefox =
        userAgentString.indexOf("Firefox") > -1;

    // Detect Safari
    let safari =
        userAgentString.indexOf("Safari") > -1;

    // Discard Safari since it also matches Chrome
    if ((chrome) && (safari)) {

        safari = false;

    }

    // Detect Opera
    let opera =
        userAgentString.indexOf("OP") > -1;

    // Discard Chrome since it also matches Opera
    if ((chrome) && (opera)) {

        chrome = false;

    }

    return {
        chrome,
        firefox,
        iexplorer,
        opera,
        safari
    };

};

export = checkBrowser;
