  const picketData = {
      senin: [
          { name: "Afel" },
          { name: "Afif" },
          { name: "Ardi" },
          { name: "Arya" },
          { name: "Azril" },
          { name: "Dika" },
          { name: "Mardi" }
      ],
      selasa: [
          { name: "Easy" },
          { name: "Fikel" },
          { name: "Fikri" },
          { name: "Galih" },
          { name: "Ihsan" },
          { name: "Iis" },
          { name: "Isnan" },
          { name: "Khania" }
      ],
      rabu: [
          { name: "Rondi" },
          { name: "Olif" },
          { name: "Alif" },
          { name: "Gilang" },
          { name: "Wildan" },
          { name: "Yudi" },
          { name: "Nadia" },
          { name: "Nazzila" },
          { name: "Rafli" }
      ],
      kamis: [
          { name: "Raka" },
          { name: "Reva" },
          { name: "Rifki" },
          { name: "Romeo" },
          { name: "Sifak" },
          { name: "Triyani" },
          { name: "Wilda" },
          { name: "Yakub" }
      ]
};

function newsPage() {
    const newsContainer = document.getElementById("newsContainer");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    const newsCards = document.querySelectorAll(".news-card");
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const modalImage = document.querySelector(".modal img");
    const modalTitle = document.querySelector(".modal h3");
    const modalText = document.querySelector(".modal p");

    newsCards.forEach(card => {
        card.addEventListener("click", function () {
            modalImage.src = card.querySelector("img").src;
            modalTitle.innerText = card.querySelector("h3").innerText;
            modalText.innerText = card.querySelector("p").innerText;

            modal.classList.add("active");
        });
    });

    // Close modal when clicking outside
    modal.addEventListener("click", function (e) {
        if (e.target.classList.contains("modal")) {
            modal.classList.remove("active");
        }
    });

    // Additional news data
    const moreNews = [
        {
            image: "https://placehold.co/600x400",
            title: "Exciting New Library Books Available!",
            text: "The school library has added 100+ new books for students..."
        },
        {
            image: "https://placehold.co/600x400",
            title: "Robotics Club Achieves National Recognition!",
            text: "Our Robotics Club secured a top 3 position in the competition..."
        },
        {
            image: "https://placehold.co/600x400",
            title: "Field Trip to the Science Museum Announced!",
            text: "Class XI students will visit the National Science Museum next month..."
        }
    ];

    let newsIndex = 0;

    loadMoreBtn.addEventListener("click", function () {
        if (newsIndex < moreNews.length) {
            // Create new news card
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-card");
            newsItem.innerHTML = `
                <img src="${moreNews[newsIndex].image}" alt="${moreNews[newsIndex].title}">
                <div class="news-info">
                    <h3>${moreNews[newsIndex].title}</h3>
                    <p>${moreNews[newsIndex].text}</p>
                </div>
            `;
            newsContainer.appendChild(newsItem);

            // Attach event listener to new news items for modal
            newsItem.addEventListener("click", function () {
                openModal(newsItem);
            });

            newsIndex++;

            // Hide the button when all news is loaded
            if (newsIndex >= moreNews.length) {
                loadMoreBtn.style.display = "none";
            }
        }
    });

    // Function to open modal with news details
    function openModal(card) {
        const modal = document.querySelector(".modal");
        const modalImage = document.querySelector(".modal img");
        const modalTitle = document.querySelector(".modal h3");
        const modalText = document.querySelector(".modal p");

        modalImage.src = card.querySelector("img").src;
        modalTitle.innerText = card.querySelector("h3").innerText;
        modalText.innerText = card.querySelector("p").innerText;

        modal.classList.add("active");
    }

    // Close modal when clicking outside
    document.querySelector(".modal").addEventListener("click", function (e) {
        if (e.target.classList.contains("modal")) {
            e.target.classList.remove("active");
        }
    });

    // Add event listener for existing news items
    document.querySelectorAll(".news-card").forEach(card => {
        card.addEventListener("click", function () {
            openModal(card);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const navLinks = document.querySelectorAll("nav ul li a");
    const scheduleLinks = document.querySelectorAll('.dropdown-menu a');

    // Data jadwal pelajaran
      const scheduleData = {
          monday: [
              { time: "07:00 - 07:40", subject: "U", teacher: "", room: "" },
              { time: "07:40 - 08:20", subject: "Bahasa Jawa", teacher: "Mintati, S.Pd", room: "Ruang C" },
              { time: "08:20 - 09:00", subject: "Projek Kreatif dan Kewirausahaan (PKK)", teacher: "Adikara Cahyo Nugroho, S.Kom", room: "Ruang C" },
              { time: "09:25 - 11:25", subject: "Konsentrasi Keahlian (KK-BD)", teacher: "Mulyadi S, S.Kom", room: "LAB RPL 1" },
              { time: "12:30 - 14:30", subject: "KK-PW", teacher: "Bambang Setiadi, S.T", room: "LAB RPL 1" }
          ],
          tuesday: [
              { time: "07:00 - 09:00", subject: "KK-PPB", teacher: "Mulyadi S, S.Kom", room: "LAB RPL 1" },
              { time: "09:25 - 10:45", subject: "Matematika", teacher: "Takmalun, S.Pd.M.Pd", room: "Ruang C" },
              { time: "10:45 - 12:05", subject: "Bahasa Indonesia", teacher: "Kuat Adi Nugroho, S.Pd", room: "Ruang C" },
              { time: "14:30 - 15:15", subject: "EK", teacher: "", room: "" }
          ],
          wednesday: [
              { time: "07:00 - 08:30", subject: "Penjasorkes", teacher: "Sigit Mukti Yuwono, S.Pd", room: "" },
              { time: "08:30 - 10:00", subject: "Konsentrasi Keahlian (KK-PTGM)", teacher: "Nugroho Slamet R, S.T.", room: "LAB RPL 2" },
              { time: "10:45 - 12:05", subject: "Bahasa Inggris", teacher: "Yuni Windarti, S.Pd", room: "Ruang C" },
              { time: "12:30 - 14:30", subject: "Pendidikan Agama Islam dan Budi Pekerti", teacher: "Naini Fatmawati, S.Ag., M.Ag", room: "Ruang C" },
              { time: "14:30 - 15:15", subject: "EK", teacher: "", room: "" }
          ],
          thursday: [
              { time: "07:00 - 08:30", subject: "Pendidikan Pancasila", teacher: "Jumeno, S.Pd", room: "Ruang C" },
              { time: "08:30 - 10:00", subject: "Konsentrasi Keahlian (KK-BD)", teacher: "Mulyadi S, S.Kom", room: "LAB RPL 1" },
              { time: "10:45 - 12:05", subject: "DKV", teacher: "Tri Setiawan, S.Kom", room: "LAB RPL 2" },
              { time: "12:30 - 14:30", subject: "Konsentrasi Keahlian (KK-PTGM)", teacher: "Nugroho Slamet R, S.T.", room: "LAB RPL 2" }
          ],
          friday: [
              { time: "07:00 - 08:30", subject: "JBSR", teacher: "", room: "" },
              { time: "08:30 - 10:00", subject: "Projek Kreatif dan Kewirausahaan (PKK)", teacher: "Adikara Cahyo Nugroho, S.Kom", room: "Ruang C" },
              { time: "10:45 - 12:05", subject: "Sejarah", teacher: "Siti Yuliaikah, S.Pd", room: "Ruang C" },
              { time: "12:30 - 14:30", subject: "Bahasa Inggris", teacher: "Yuni Windarti, S.Pd", room: "Ruang C" }
          ]
      };

    // Fungsi untuk memuat konten halaman secara dinamis
let currentPage = ""; // Menyimpan halaman yang sedang ditampilkan

function loadPage(page, customContent = "") {
    // Jika halaman yang diminta sama dengan halaman saat ini, hentikan eksekusi
    if (page === currentPage && !customContent) return;

    content.classList.remove("show");

    setTimeout(() => {
        let pageContent = customContent;

        if (!pageContent) {
            switch (page) {
                case "home":
                    pageContent = `
                      <h1 class="title">Welcome</h1>
                      <h2>To</h2>
                      <h2>XI PPLG 3</h2>
                    `;
                    break;
                case "gallery":
                    pageContent = `
                      <h2>Explore My Gallery</h2>
                      <div class="gallery-nav">
                          <div class="gallery-item">
                              <img src="images/gallery/isramiraj.jpg" alt="Event 3">
                              <div class="overlay"><p>Isra mi'raj</p></div>
                          </div>
                          <div class="gallery-item">
                              <img src="images/gallery/img.jpg" alt="Event 2">
                              <div class="overlay"><p>Fotbar P5</p></div>
                          </div>
                          <div class="gallery-item">
                              <img src="images/gallery/pejuang.jpg" alt="Event 1">
                              <div class="overlay"><p>Persiapan P5</p></div>
                          </div>
                      </div>
                    `;
                    break;
                case "berita":
                    pageContent = `
                        <h2>Berita Skorsa</h2>
                        <div class="news-container" id="newsContainer">
                            <div class="news-card">
                                <img src="images/news/p5.jpg" alt="News 1">
                                <div class="news-info">
                                    <h3>Gelar Karya P5</h3>
                                    <p>Kegiatan ini diadakan di SMK N 1 Sukoharjo dengan lomba paduan suara</p>
                                </div>
                            </div>
                        </div>
                        <!-- <button id="loadMoreBtn">Load More</button> -->
                        <div class="modal">
                            <div class="modal-content">
                                <img src="" alt="News Image">
                                <h3>News Title</h3>
                                <p>Full news details...</p>
                            </div>
                        </div>
                    `;
                    setTimeout(newsPage, 100);
                    break;
                case "structure":
                    pageContent = `
                        <link rel="stylesheet" href="css/structure.css">
                        <h2>Struktur Kelas</h2>
                        <div class="structure">
                            <div class="section"><h3>Wali Kelas</h3><p>Yuni Windarti, S.Pd</p></div>
                            <div class="section"><h3>Ketua Kelas</h3><p>Alif Ikromulloh</p></div>
                            <div class="section"><h3>Wakil Ketua</h3><p>Muhamad Alif Al Fariz</p></div>
                            <div class="section"><h3>Bendahara</h3><p>Reva & Afel</p></div>
                            <div class="section"><h3>Sekertaris</h3><p>Nazilla & Khania</p></div>
                        </div>
                    `;
                    break;
                case "picket":
                    pageContent = `
                      <link rel="stylesheet" href="css/picket.css">
                      <h2>Picket Schedule</h2>
                      <div class="filter-container"><select id="dayFilter" onchange="filterSchedule()">
                          <option value="all">Semua</option>
                          <option value="Monday">Senin</option>
                          <option value="Tuesday">Selasa</option>
                          <option value="Wednesday">Rabu</option>
                          <option value="Thursday">Kamis</option>
                        </select>
                      </div>
                      <table class="picket-table">
                        <thead>
                          <tr>
                            <th>Hari</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                          </tr>
                        </thead>
                        <tbody id="scheduleBody">
                          <tr data-day="Senin">
                            <td>Senin</td>
                            <td>Afelia Raldiastari</td>
                            <td>Afif Ikromulloh</td>
                            <td>Ahmad Ardi Ramadhan</td>
                            <td>Alifiya Amanda Natasya</td>
                          </tr>
                          <tr data-day="Tuesday">
                            <td>Selasa</td>
                            <td>Ardi</td>
                            <td>Ardi</td>
                            <td>Ardi</td>
                          </tr>
                          <tr data-day="Wednesday">
                            <td>Rabu</td>
                            <td>Ardi</td>
                            <td>Ardi</td>
                            <td>Ardi</td>
                          </tr>
                          <tr data-day="Thursday">
                            <td>Kamis</td>
                            <td>Triyani</td>
                            <td>Wilda Ramadhani</td>
                            <td>Yakub Dwi Nur Anas</td>
                          </tr>
                        </tbody>
                      </table>
                    `;
                    break;
                case "contact":
                  pageContent = `
                    <link rel="stylesheet" href="css/button.css">
                    <h2>Send Us a Message</h2>
                    <form onsubmit="return false;" id="contactForm">
                        <div class="input-container">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" required placeholder="Enter your email">
                        </div>
                        
                        <div class="input-container">
                            <label for="message">Your Message</label>
                            <textarea id="message" required placeholder="Type your message here..."></textarea>
                        </div>
            
                        <!-- From Uiverse.io by marcelodolza --> 
                        <button class="button">
                          <div class="outline"></div>
                          <div class="state state--default">
                            <div class="icon">
                              <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g style="filter: url(#shadow)">
                                  <path
                                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                                <defs>
                                  <filter id="shadow">
                                    <fedropshadow
                                      dx="0"
                                      dy="1"
                                      stdDeviation="0.6"
                                      flood-opacity="0.5"
                                    ></fedropshadow>
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                            <p>
                              <span style="--i:0">S</span>
                              <span style="--i:1">e</span>
                              <span style="--i:2">n</span>
                              <span style="--i:3">d</span>
                              <span style="--i:4">M</span>
                              <span style="--i:5">e</span>
                              <span style="--i:6">s</span>
                              <span style="--i:7">s</span>
                              <span style="--i:8">a</span>
                              <span style="--i:9">g</span>
                              <span style="--i:10">e</span>
                            </p>
                          </div>
                          <div class="state state--sent">
                            <div class="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                stroke-width="0.5px"
                                stroke="black"
                              >
                                <g style="filter: url(#shadow)">
                                  <path
                                    fill="currentColor"
                                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                  ></path>
                                  <path
                                    fill="currentColor"
                                    d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                            <p>
                              <span style="--i:5">S</span>
                              <span style="--i:6">e</span>
                              <span style="--i:7">n</span>
                              <span style="--i:8">t</span>
                            </p>
                          </div>
                        </button>

                    </form>
            
                    <p id="responseMessage" class="hidden">Your message has been sent!</p>
                  `;
                  break;
            }
        }

        content.innerHTML = pageContent;
        content.classList.add("show");

        // Perbarui currentPage setelah halaman berhasil dimuat
        currentPage = page;
    }, 300);
}

    // Event listener untuk navigasi utama
    document.querySelector("nav").addEventListener("click", function (event) {
        if (event.target.tagName === "A" && event.target.hasAttribute("data-page")) {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");

            navLinks.forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");

            loadPage(page);
        }
    });

    // Event listener untuk dropdown menu (jadwal pelajaran)
    document.querySelector(".dropdown-menu").addEventListener("click", function (event) {
        if (event.target.tagName === "A" && event.target.hasAttribute("data-day")) {
            event.preventDefault();
            const day = event.target.getAttribute("data-day");
            const isPicket = event.target.hasAttribute("picket");
    
            let scheduleContent = `<h2>Jadwal Pelajaran - ${event.target.innerText}</h2>`;
    
            if (scheduleData[day]) {
                // Jika ini jadwal pelajaran
                scheduleContent += `
                  <div id="schedule-container">
                    <table id="schedule-table">
                        <thead>
                            <tr>
                                <th>Waktu</th>
                                <th>Mata Pelajaran</th>
                                <th>Guru</th>
                                <th>Ruangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${scheduleData[day].map(entry => `
                                <tr>
                                    <td>${entry.time}</td>
                                    <td>${entry.subject}</td>
                                    <td>${entry.teacher}</td>
                                    <td>${entry.room}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                  </div>
                `;
            } else {
                scheduleContent += "<p>Jadwal tidak tersedia.</p>";
            }
    
            loadPage("jadwal", scheduleContent);
        }
    });
    


    document.querySelector(".dropdown-menu2").addEventListener("click", function (event) {
        if (event.target.tagName === "A" && event.target.hasAttribute("data-day") && event.target.hasAttribute("picket")) {
            event.preventDefault();
            const day = event.target.getAttribute("data-day");
    
            let picketContent = `<h2>Jadwal Piket - ${event.target.innerText}</h2>`;
            picketContent += `
              <div id="schedule-container">
            `;
    
            if (picketData[day] && !event.target.hasAttribute("all")) {
                picketContent += generatePicketTable(day);
            } else if (event.target.hasAttribute("all")) {
                picketContent += generateAllPicketTable();
            } else {
                picketContent += "<p>Jadwal tidak tersedia.</p>";
            }
    
            picketContent += `
              </div>
            `;
    
            loadPage("jadwal", picketContent);
        }
    });
    
    // Inisialisasi dengan halaman home
    loadPage("home");
});

function generatePicketTable(day) {
    if (!picketData[day]) return "<p>Jadwal piket tidak tersedia.</p>";

    // Ambil jumlah kolom berdasarkan panjang data untuk hari yang dipilih
    const numColumns = picketData[day].length || 0;

    // Buat header tabel secara dinamis
    let tableHeader = `
        <thead>
            <tr>
                <th>Hari</th>
                ${Array.from({ length: numColumns }, (_, i) => `<th>${i + 1}</th>`).join("")}
            </tr>
        </thead>
    `;

    // Buat isi tabel
    let tableBody = `
        <tbody>
            <tr>
                <td>${day.charAt(0).toUpperCase() + day.slice(1)}</td>
                ${picketData[day].map(person => `<td>${person.name || "-"}</td>`).join("")}
            </tr>
        </tbody>
    `;

    return `<table id="schedule-table" border="1">${tableHeader}${tableBody}</table>`;
}

function generateAllPicketTable() {

    const allPicketData = JSON.parse(JSON.stringify(picketData));

    for (const day in allPicketData) {
        while (allPicketData[day].length < 9) {
            allPicketData[day].push({ name: "-" });
        }
    }

    let tableContent = `
        <thead>
            <tr>
                <th>Hari</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
            </tr>
        </thead>
        <tbody>
    `;

    Object.keys(allPicketData).forEach(day => {
        tableContent += `
            <tr>
                <td>${day.charAt(0).toUpperCase() + day.slice(1)}</td>
                ${allPicketData[day].map(person => `<td>${person.name}</td>`).join("")}
            </tr>
        `;
    });

    tableContent += `</tbody>`;

    return `<table id="schedule-table">${tableContent}</table>`;
}

function filterSchedule() {
    var selectedDay = document.getElementById("dayFilter").value;
    var rows = document.querySelectorAll(".picket-table tbody tr");

    rows.forEach(row => {
        if (selectedDay === "all" || row.getAttribute("data-day") === selectedDay) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }
    });
}