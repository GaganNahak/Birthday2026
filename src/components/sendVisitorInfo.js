import emailjs from "@emailjs/browser";
export async function sendVisitorInfo() {
  try {
    // Get IP
    const ipData = await fetch("https://api.ipify.org?format=json").then((r) =>
      r.json()
    );
    const templateParams = {
      device_type: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
        ? "Mobile"
        : "Desktop",

      browser: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen_size: `${window.screen.width} x ${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ip: ipData.ip,
      visit_time: new Date().toLocaleString(),
    };

    await emailjs.send(
      "service_82yd53r",
      "template_tz165om",
      templateParams,
      "qDuyAlEZ7NJ_Kdciw"
    );

    console.log("Visitor info sent!");
  } catch (err) {
    console.error("Failed:", err);
  }
}