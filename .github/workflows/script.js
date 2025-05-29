async function generateDNS() {
  const ping = Math.floor(Math.random() * (20 - 8 + 1)) + 8;
  const ipv4 = `185.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*254)+1}`;
  const ipv6 = Array(8).fill(0).map(_ => Math.floor(Math.random()*65536).toString(16)).join(":");

  document.getElementById("result").textContent = `
🌍 IPv4: ${ipv4}
🧬 IPv6: ${ipv6}
📶 Ping: ${ping} ms
📅 Time: ${new Date().toLocaleTimeString()}
  `;
}

(async () => {
  try {
    const res = await fetch("https://ipinfo.io/json?token=ShamsDNS");
    const data = await res.json();
    document.getElementById("info").textContent =
      `📡 IP: ${data.ip} | 📍 ${data.city}, ${data.country} | ISP: ${data.org}`;
  } catch (error) {
    document.getElementById("info").textContent = "خطا در دریافت اطلاعات IP.";
  }
})();
