// Function to get the current season based on the current date
function getSeason() {
    const month = new Date().getMonth() + 1; // getMonth() returns 0-11 for Jan-Dec

    if (month >= 3 && month <= 5) {
        return 'spring';
    } else if (month >= 6 && month <= 8) {
        return 'summer';
    } else if (month >= 9 && month <= 11) {
        return 'fall';
    } else {
        return 'winter';
    }
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply season-based styling
function applySeasonStyles() {
    const season = getCookie('season') || getSeason();
    setCookie('season', season, 7); // Cookie expires in 7 days

    const body = document.body;
    switch (season) {
        case 'spring':
            body.style.backgroundColor = '#e0f7fa'; // light cyan for spring
            break;
        case 'summer':
            body.style.backgroundColor = '#ffe082'; // light yellow for summer
            break;
        case 'fall':
            body.style.backgroundColor = '#ffcc80'; // light orange for fall
            break;
        case 'winter':
            body.style.backgroundColor = '#b3e5fc'; // light blue for winter
            break;
        default:
            body.style.backgroundColor = '#ffffff'; // default background color
    }
}

// Initialize the season styling
applySeasonStyles();
