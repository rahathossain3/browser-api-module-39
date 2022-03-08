const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        const cookisNameValue = findCookie.split('=');
        return cookisNameValue[1];
        // console.log()
    }
} 