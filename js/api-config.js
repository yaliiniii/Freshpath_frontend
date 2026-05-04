

const API_CONFIG = (function() {
    const isLocal = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' || 
                    window.location.hostname === '' || 
                    window.location.protocol === 'file:';
    
    const BASE_URL = isLocal
        ? 'http://127.0.0.1:9000/api'
        : 'https://fresh-path-xnrh.vercel.app/api';

    console.log("FreshPath API Base URL:", BASE_URL);
    console.log("If you see connection errors, ensure you ran: uvicorn main:app --reload --port 9000");

    return {
        BASE_URL: BASE_URL,
        isLocal: isLocal
    };
})();

const API_BASE = API_CONFIG.BASE_URL;
