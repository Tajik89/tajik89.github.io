function updateUSTime() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    const isDST = now.getMonth() > 2 && now.getMonth() < 10 || 
                  (now.getMonth() === 2 && now.getDate() - now.getDay() >= 8) || 
                  (now.getMonth() === 10 && now.getDate() - now.getDay() < 1);
    const easternTimeOffset = (isDST ? -4 : -5) * 3600 * 1000;
    const easternTime = new Date(utcTime + easternTimeOffset);
    
    const hours = easternTime.getHours().toString().padStart(2, '0');
    const minutes = easternTime.getMinutes().toString().padStart(2, '0');
    const seconds = easternTime.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateUSTime, 1000);

updateUSTime();