// add the hadith section with fetch

function getSelectValue() {
  let audio = document.querySelector(".audio");
  let sourah = document.getElementById("sourah").value;
  let reader = document.getElementById("reader").value;
  let cd = document.getElementById("cd");
  if (reader == "naser-el-osfor") {
    //ناصر العصفور
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server14.mp3quran.net/alosfor/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/naser-el-osfor.png')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "naser-el-qutami") {
    //ناصر القطامي
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server6.mp3quran.net/qtm/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/naser-el-qutami.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "el-miqli") {
    //ماهر المعيقلي
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server12.mp3quran.net/maher/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/el-miqli.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "el-sdisi") {
    //عبد الرحمن السديس
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server11.mp3quran.net/sds/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/el-sdisi.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "el-ajmi") {
    //أحمد بن علي العجمي
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server10.mp3quran.net/ajm/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/el-ajmi.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "yacin-el-djazairy") {
    // ياسين الجزائري
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server11.mp3quran.net/qari/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/yacin-el-djazairy.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "saad-el-ghamedy") {
    // سعد الغامدي
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server7.mp3quran.net/s_gmd/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/saad-el-ghamedy.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "yesser-el-doosry") {
    // ياسر الدوسري
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server11.mp3quran.net/yasser/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/Yaser-Douseri.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  } else if (reader == "khaled-el-qahtani") {
    // خالد القحطاني
    if (sourah == 0) {
      return;
    } else {
      audio.innerHTML = `<audio controls autoplay><source src="https://server10.mp3quran.net/qht/${sourah}.mp3" type="audio/mpeg"></audio>`;
      cd.style.background = "url('images/el-qahtany.jpg')";
      cd.style.backgroundRepeat = "no-repeat";
      cd.style.backgroundSize = "cover";
      cd.style.backgroundPosition = "center";
    }
  }
}

fetch("https://api.quran.sutanlab.id/surah")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 114; i++) {
      let sourah = document.getElementById("sourah");
      if (i < 9) {
        sourah.innerHTML += `<option value="00${i + 1}" autoplay controls>${
          data.data[i].name.short
        }</option>`;
      } else if (i >= 9 && i < 99) {
        sourah.innerHTML += `<option value="0${i + 1}" autoplay controls>${
          data.data[i].name.short
        }</option>`;
      } else {
        sourah.innerHTML += `<option value="${i + 1}" autoplay controls>${
          data.data[i].name.short
        }</option>`;
      }
    }
  });

// add the hadith section with fetch
