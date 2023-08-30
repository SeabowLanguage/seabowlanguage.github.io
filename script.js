const _frames = [];
const animated_texts = [];

function get_frames() {
    const all_frames = document.getElementsByClassName("frame");
    for (const fr of all_frames) {
        if (fr.classList.contains("frame-left")) {
            fr.style.left = "-100%";
        } else {
            fr.style.right = "-200%";
        }
        _frames.push(fr);
    }
}

function get_animated_texts() {
    const all_texts = document.getElementsByClassName("animated-text");
    for (const txt of all_texts) {
        txt.style.opacity = "0";
        animated_texts.push(txt);
    }
}

function gotoSeabow() {
    window.open("https://github.com/SeabowLanguage/seabow", "_blank");
}

function update_all() {
    for (let i=0; i<_frames.length; i++) {
        const direction = (i%2 == 0) ? "left" : "right";
        const rect = _frames[i].getBoundingClientRect();
        if (window.innerHeight > rect.top + rect.height / 3) {
            _frames[i].style.animation = "frame-" + direction + "-appear 2s ease-in-out forwards";
        } else if ((direction === "left" && rect.left > -50) || (direction === "right" && rect.right > -150)) {
            _frames[i].style.animation = "frame-" + direction + "-disappear 2s ease-in-out forwards";
        }
    }

    for (let i=0; i<animated_texts.length; i++) {

    }
}

function save_exe(url) {
    console.log(url);
    let filename = url.substring(url.lastIndexOf("/") + 1);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = () => {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
        a.download = filename; // Set the file name.
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        delete a;
    };
    xhr.open('GET', url);
    xhr.send();
}

get_frames();
get_animated_texts();
update_all();
document.onscroll = () => {
    update_all();
};