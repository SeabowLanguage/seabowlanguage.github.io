const _frames = [];
const animated_texts = [];

function get_frames() {
    const all_frames = document.getElementsByClassName("frame");
    for (const fr of all_frames) {
        fr.style.opacity = "0";
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
        const rect = _frames[i].getBoundingClientRect();
        if (window.innerHeight > rect.top + rect.height / 3) {
            _frames[i].style.animation = "frame-appear 3s ease-in-out forwards";
        } else if (_frames[i].style.animation.length > 0) {
            _frames[i].style.animation = "frame-disappear 3s ease-in-out forwards";
        }
    }

    for (let i=0; i<animated_texts.length; i++) {
        const rect = animated_texts[i].getBoundingClientRect();
        if (window.innerHeight > rect.top + rect.height / 2) {
            animated_texts[i].style.animation = "text-appear 2s ease-in-out forwards";
        } else if (animated_texts[i].style.animation.length > 0) {
            animated_texts[i].style.animation = "text-disappear 2s ease-in-out forwards";
        }
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