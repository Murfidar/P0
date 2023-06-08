const videoList = [];
const RENDER_VIDEOS = "render-sammhub";
const SAVED_VIDEOS = "saved-vudeos";
const STORAGE_KEY = "SAMMHUB";

// untuk generate id berdasarkan tanggal sekarang
function generateId() {
  return +new Date();
}

// Untuk generate object
function generateSammhubObject(id, title, titleClass, genre, link, isComplete) {
  return {
    id,
    title,
    titleClass,
    genre,
    link,
    isComplete,
  };
}

// Fungsi No.1 Untuk mengambil value dari html
function takeInputVideo() {
  let title = document.getElementById("inputVideoTitle").value.trim();
  let titleClass = title.replace(/\s/g, "");
  let genre = document.getElementById("genre").value;
  let link = document.getElementById("inputVideoLink").value.trim();
  let isComplete = document.getElementById("inputVideoIsComplete").checked;

  // check apakah ada kalimat di string
  let check1 = /youtu.be/.test(link.toLowerCase());
  let check2 = /youtube.com/.test(link.toLowerCase());

  if (!check1 && !check2) {
    alert("Masukan link yang benar");
  } else {
    // objek sementara untuk menyimpan
    let videoItem = generateSammhubObject(
      generateId(),
      title,
      titleClass,
      genre,
      link,
      isComplete
    );

    return videoItem;
  }
}
/* contoh Output

{
  id: uid,
  title: 'James Bond',
  titleClass: 'JamesBond',
  genre: 'Humour',
  link: 'https',
  isComplete: false,
}

*/

const form = document.getElementById("inputFilm");

// event saat tombol submit di click
form.addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah autosubmit

  //kondisional untuk mengecek apakah videoList sudah memiliki panjang lebih dari 10;
  if (videoList.length > 9) {
    alert("Memori tidak cukup Harap hapus beberapa video agar bisa input lagi");
  } else {
    // objek yang sudah dibuat di push ke array videoList
    videoList.push(takeInputVideo());
  }
});

// Fungsi no.2 mengganti value isComplete pada database videoList
function changeIsComplete(videoList, id, isComplete) {
  let videoCopy = Array.from(videoList);
  for (const videoItem of videoCopy) {
    if (videoItem.id === id) {
      videoItem.isComplete = isComplete;
      break;
    }
  }
  return videoCopy;
}

/* contoh
input:
changeIsComplete(videoList, id, true)

class adalah class div dimana button di click

id = class.replace(/book-/g, "")

Output:

{
  id: uid,
  title: 'James Bond',
  titleClass: 'JamesBond',
  genre: 'Humour',
  link: 'https',
  isComplete: true,
}

*/

// Fungsi Delete videoItem from videoList dengan id
// memfilter id object yang ingin dihilangkan
//
function removeVideoItemWithId(videoList, id) {
  return videoList.filter((obj) => obj.id !== id);
}

//event saat video sudah di tonton
// const
