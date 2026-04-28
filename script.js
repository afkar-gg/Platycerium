const benefitData = [
  {
    title: "Kesehatan tulang dan sendi",
    text:
      "Pada poster, tanduk rusa disebut bermanfaat untuk memperkuat kesehatan tulang dan sendi. Klaim kesehatan seperti ini sebaiknya diperlakukan sebagai informasi tradisional dan dikonfirmasi lagi sebelum digunakan sebagai terapi.",
  },
  {
    title: "Pemulihan luka",
    text:
      "Beberapa pemanfaatan tradisional mengaitkan tanduk rusa dengan proses pemulihan luka. Perawatan luka tetap perlu memperhatikan kebersihan, kondisi kulit, dan anjuran tenaga kesehatan.",
  },
  {
    title: "Fungsi seksual sehat",
    text:
      "Poster menyebut dukungan terhadap fungsi seksual yang sehat. Informasi ini lebih tepat dibaca sebagai catatan penggunaan tradisional, bukan jaminan efek medis.",
  },
  {
    title: "Tekanan darah",
    text:
      "Tanduk rusa juga dikaitkan dengan pengelolaan tekanan darah. Karena tekanan darah dipengaruhi banyak faktor, penggunaan herbal sebaiknya tidak menggantikan pemeriksaan rutin.",
  },
  {
    title: "Mental dan suasana hati",
    text:
      "Sebagai tanaman hias, tanduk rusa dapat membuat ruangan terasa lebih hidup dan tenang. Merawat tanaman juga bisa menjadi aktivitas ringan yang membantu rutinitas harian.",
  },
  {
    title: "Kekebalan tubuh",
    text:
      "Klaim tentang kekebalan tubuh sering muncul pada penggunaan tradisional. Tetap prioritaskan pola makan, tidur, aktivitas fisik, dan saran profesional untuk kesehatan umum.",
  },
];

const speciesData = [
  {
    title: "Platycerium Willinckii",
    text:
      "Memiliki daun menjuntai dan bercabang panjang. Jenis ini sering dipilih untuk tampilan gantung karena siluetnya dramatis saat tanaman tumbuh dewasa.",
  },
  {
    title: "Platycerium Wandae",
    text:
      "Dikenal sebagai salah satu jenis berukuran besar. Bentuk daunnya kuat dan cocok menjadi fokus visual pada taman atau area dinding hijau.",
  },
  {
    title: "Platycerium Ridleyi",
    text:
      "Memiliki karakter daun yang lebih tegas dan unik. Jenis ini menarik bagi kolektor karena bentuknya berbeda dari tanduk rusa yang umum ditemui.",
  },
  {
    title: "Platycerium Coronarium",
    text:
      "Daunnya dapat tumbuh panjang dan memberi kesan rimbun. Jenis ini baik ditempatkan pada area teduh terang dengan kelembapan stabil.",
  },
  {
    title: "Platycerium Bifurcatum",
    text:
      "Salah satu jenis yang populer untuk pemula. Perawatannya relatif mudah selama mendapat media yang sesuai dan tidak dibiarkan terlalu basah.",
  },
];

const stepData = [
  {
    title: "Pembibitan",
    text:
      "Pilih bibit sehat dengan daun segar dan akar yang menempel baik pada media. Hindari bagian yang busuk atau terlalu kering.",
  },
  {
    title: "Media tanam",
    text:
      "Gunakan media yang mampu menahan kelembapan tetapi tetap berongga, seperti pakis, sabut, atau papan tanam yang tidak mudah lapuk.",
  },
  {
    title: "Penanaman ulang tanduk rusa",
    text:
      "Pindahkan tanaman secara hati-hati ketika media lama mulai padat atau akar sudah memenuhi dudukan. Ikat secukupnya agar tanaman stabil.",
  },
  {
    title: "Pemeliharaan tanaman",
    text:
      "Letakkan di tempat terang tanpa matahari langsung yang keras. Siram saat media mulai mengering dan pastikan udara tetap mengalir.",
  },
  {
    title: "Pemupukan tanaman",
    text:
      "Berikan pupuk ringan secara berkala pada musim tumbuh. Hindari dosis berlebihan karena akar epifit sensitif terhadap penumpukan garam.",
  },
  {
    title: "Modifikasi penanaman",
    text:
      "Tanaman dapat ditempel pada papan, batang pakis, atau komposisi vertikal. Pilih dudukan yang kuat karena ukuran daun bisa bertambah besar.",
  },
];

const navToggle = document.querySelector(".nav-toggle");
const body = document.body;

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  body.classList.toggle("nav-open", !expanded);
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("nav-open");
  });
});

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("nav-open");
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  });
});

function selectButton(buttons, activeButton) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

const benefitButtons = Array.from(document.querySelectorAll(".benefit-card"));
const benefitDetail = document.querySelector(".benefit-detail");

benefitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = benefitData[Number(button.dataset.benefit)];
    selectButton(benefitButtons, button);
    benefitDetail.innerHTML = `
      <p class="detail-label">Manfaat dipilih</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
  });
});

const speciesButtons = Array.from(document.querySelectorAll(".species-chip"));
const speciesPanel = document.querySelector(".species-panel");

speciesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = speciesData[Number(button.dataset.species)];
    selectButton(speciesButtons, button);
    speciesPanel.innerHTML = `
      <div class="leaf-icon" aria-hidden="true"></div>
      <p class="detail-label">Spesies dipilih</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
  });
});

const stepButtons = Array.from(document.querySelectorAll(".step-button"));
const stepPanel = document.querySelector(".step-panel");

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const stepIndex = Number(button.dataset.step);
    const item = stepData[stepIndex];
    selectButton(stepButtons, button);
    stepPanel.innerHTML = `
      <span class="step-count">Langkah ${stepIndex + 1} dari ${stepData.length}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
  });
});
