// Get all commonDrpDwn elements and customDropDwns elements
const commonDrpDwns = document.querySelectorAll('.commonDrpDwn');
const customDropDwns = document.querySelectorAll('.customDropDwns');

commonDrpDwns.forEach((commonDrpDwn) => {
    commonDrpDwn.addEventListener('click', (event) => {
        event.stopPropagation();
        const dropdown = commonDrpDwn.querySelector('.customDropDwns');
        dropdown.classList.toggle('active');
    });
});
// close dropdowns when clicking anywhere else
document.addEventListener('click', (event) => {
    customDropDwns.forEach((dropdown) => {
        if (dropdown.classList.contains('active') && !event.target.closest('.commonDrpDwn')) {
            dropdown.classList.remove('active');
        }
    });
});
// Prevent dropdown clicks from closing the dropdown
customDropDwns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// siteHeader 
function handleScroll() {
    const siteHeader = document.getElementsByClassName('siteHeader')[0];
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        siteHeader.classList.add('siteheaderfixed');
    } else {
        siteHeader.classList.remove('siteheaderfixed');
    }
}
window.addEventListener('scroll', handleScroll);

// header .menus
const overlay = document.getElementsByClassName('overlay')[0];
const menus = document.getElementsByClassName('menus')[0];
const onlyCallHeader = document.getElementsByClassName('onlyCallHeader')[0];
const humburgericon = document.getElementsByClassName('humburgericon')[0];
humburgericon.addEventListener('click', headerOpner)

function headerOpner() {
    overlay.classList.add('active')
    menus.classList.add('active')
    onlyCallHeader.classList.add('active')
}

function headerCloser() {
    overlay.classList.remove('active')
    menus.classList.remove('active')
    onlyCallHeader.classList.remove('active')
}

// banner slider
var currentImg = 0;
const interval = 3000;

let i = 0;
let j = 8;

function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
}

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
}

function fetchAirCode() {
    try {
        const respose = fetch('http://127.0.0.1:5500/src/js/airlist.json')
        const resData = respose.json()
        console.log(resData);
    } catch {
        console.log('fetching error');
    }
}
fetchAirCode();