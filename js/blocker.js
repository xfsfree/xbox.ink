async function checkBannedIP() {
    try {
        const response = await fetch('banned.txt');
        if (!response.ok) {
            console.warn('banned.txt dosyası bulunamadı');
            return;
        }
        
        const bannedText = await response.text();
        const bannedIPs = bannedText.split('\n')
            .map(ip => ip.trim())
            .filter(ip => ip.length > 0 && !ip.startsWith('#'));
        
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;
        
        if (bannedIPs.includes(userIP)) {
            showBanMessage(userIP);
            throw new Error('Banned IP');
        }
    } catch (error) {
        console.error('IP kontrol hatası:', error);
    }
}

function showBanMessage(ip) {
    document.body.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            z-index: 9999;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
        ">
            <h1 style="color: #dc3545; font-size: 2.5rem; margin-bottom: 20px;">ERİŞİM ENGELLENDİ</h1>
            <p style="font-size: 1.2rem; margin-bottom: 10px;">IP adresiniz (${ip}) yasaklanmıştır.</p>
            <p style="color: #6c757d;">Site yöneticisi ile iletişime geçin.</p>
        </div>`;
    
    window.stop();
}

document.addEventListener('DOMContentLoaded', checkBannedIP);

if (typeof history.pushState === 'function') {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function() {
        history.pushState(null, null, document.URL);
    });
}
