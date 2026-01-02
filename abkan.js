(function () {
  const MAX_CLICKS = 5;        // maksimal klik per sesi
  const TIME_WINDOW = 10000;  // 10 detik
  const LOCK_TIME = 300000;   // 5 menit

  const now = Date.now();

  let data = JSON.parse(sessionStorage.getItem("click_guard")) || {
    clicks: [],
    lockedUntil: 0
  };

  // Jika sedang dikunci
  if (data.lockedUntil > now) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif">
        <div style="text-align:center">
          <h2>Aktivitas Tidak Wajar Terdeteksi</h2>
          <p>Silakan tunggu beberapa menit sebelum melanjutkan.</p>
        </div>
      </div>`;
    return;
  }

  document.addEventListener("click", function () {
    const time = Date.now();

    // Simpan klik dalam window waktu
    data.clicks = data.clicks.filter(t => time - t < TIME_WINDOW);
    data.clicks.push(time);

    if (data.clicks.length >= MAX_CLICKS) {
      data.lockedUntil = time + LOCK_TIME;
      sessionStorage.setItem("click_guard", JSON.stringify(data));
      location.reload();
      return;
    }

    sessionStorage.setItem("click_guard", JSON.stringify(data));
  }, true);
})();
