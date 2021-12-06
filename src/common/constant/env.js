export const ENV = {
    BASE_URL: "https://www.datasense.in/c2/lc/ms",
    DEV_BASE_URL: "https://dev-lc.livc.in",
    QA_BASE_URL: "https://qa-lc.livc.in",
    UAT_BASE_URL: "https://uat-lc.livc.in",
    PRD_BASE_URL: "https://prod-c2.livc.in",
    DEV_URL: "https://dev-lc.livc.in",
    QA_ECO_URL: "https://qa-eg-eco.livc.in",
    ADMIN_BASE_URL: "http://35.224.80.84:5000",
    ADMIN_BASE_URL1: "http://35.224.80.84",
}

export let REACT_APP_BASE_URL = "";

if (window.location.hostname.includes("localhost")) {
    // REACT_APP_BASE_URL = "https://dev-lc.livc.in"
    REACT_APP_BASE_URL = "https://qa-lc.livc.in"
    // REACT_APP_BASE_URL = "https://uat-lc.livc.in"
} else if (window.location.hostname.includes("dev"))  {
    REACT_APP_BASE_URL = "https://dev-lc.livc.in"
    // REACT_APP_BASE_URL = "https://uat-lc.livc.in"
} else if (window.location.hostname.includes("qa-lc"))  {
    REACT_APP_BASE_URL = "https://qa-lc.livc.in"
}else if (window.location.hostname.includes("qa-eg"))  {
    REACT_APP_BASE_URL = "https://qa-eg-eco.livc.in"
} else if (window.location.hostname.includes("uat"))  {
    REACT_APP_BASE_URL = "https://uat-lc.livc.in"
} else {
    // REACT_APP_BASE_URL = "https://prod-lc.livc.in"
    REACT_APP_BASE_URL = "https://qa-lc.livc.in"
    // REACT_APP_BASE_URL = "https://dev-lc.livc.in"
    
}