function kirimPesan() {
  const nama   = document.getElementById('nama').value.trim();
  const wa     = document.getElementById('wa').value.trim();
  const bisnis = document.getElementById('bisnis').value.trim();
  const btn    = document.querySelector('.btn-submit');

  // Validasi: nama & WA wajib diisi
  if (!nama || !wa) {
    btn.style.background = 'linear-gradient(135deg,#FC5C7D,#FC5C7D)';
    btn.textContent = '⚠️ Isi nama dan nomor WA dulu ya!';
    setTimeout(() => {
      btn.style.background = '';
      btn.innerHTML = '✨ Kirim & Minta Penawaran Harga';
    }, 2000);
    return;
  }

  // Format pesan WA
  const pesan =
    'Halo admin KENZZ pedia! 👋\n\n' +
    '*NAMA:* ' + nama + '\n' +
    '*NOMOR WHATSAPP:* ' + wa + '\n' +
    '*KEBUTUHAN WEBSITE:* ' + (bisnis || '-') + '\n\n' +
    'Saya ingin konsultasi & tanya harga pembuatan website 🔥';

  const nomorAdmin = '6282327269044';
  const url = 'https://wa.me/' + nomorAdmin + '?text=' + encodeURIComponent(pesan);

  // Sembunyikan form, tampilkan layar sukses
  document.getElementById('formSection').style.display = 'none';
  const sukses = document.getElementById('successScreen');
  sukses.style.display = 'block';
  sukses.style.animation = 'fadeDown 0.5s ease both';

  // Buka WA otomatis
  window.open(url, '_blank');
}
