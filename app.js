// HEADER 1
function change() {
    let btn = document.getElementById("header-1-btn");
    if (btn.className != "meteor-btn") {
        btn.innerHTML = "Explore" + '<i class="fa fa-angle-right" aria-hidden="true" style="font-size: 15px; padding-left: 5px;"></i>';
    }
}

function super_meteor() {
    document.getElementById("header-1-btn").className = "super-meteor-btn";
    document.getElementById("bikes").src = "images/super-meteor.jpg";
    change();
}

function hunter_350_2() {
    document.getElementById("header-1-btn").className = "hunter_350_2-btn";
    document.getElementById("bikes").src = "images/hunter-350-2.jpg";
    change();
}

function scram() {
    document.getElementById("header-1-btn").className = "scram-btn";
    document.getElementById("bikes").src = "images/scram.jpg";
    change();
}

function classic() {
    document.getElementById("header-1-btn").className = "classic-btn";
    document.getElementById("bikes").src = "images/classic.jpg";
    change();
}

function easy() {
    document.getElementById("header-1-btn").className = "easy-btn";
    document.getElementById("bikes").src = "images/easy.jpg";
    change();
}

function continental() {
    document.getElementById("header-1-btn").className = "continental-btn";
    document.getElementById("bikes").src = "images/continental.jpg";
    change();
}

function meteor() {
    let btn = document.getElementById("header-1-btn");
    btn.className = "meteor-btn";
    btn.style.width = "120px";
    document.getElementById("bikes").src = "images/meteor.jpg";
    btn.innerHTML = 'Know More' + '<i class="fa fa-angle-right" aria-hidden="true" style="font-size: 15px; padding-left: 5px;"></i>';
}

function himalayan() {
    document.getElementById("header-1-btn").className = "himalayan-btn";
    document.getElementById("bikes").src = "images/himalayan.jpg";
    change();
}

function bullet() {
    document.getElementById("header-1-btn").className = "bullet-btn";
    document.getElementById("bikes").src = "images/bullet.jpg";
    change();
}

// HEADER 2
function rider_mania() {
    document.getElementById("ko").classList.add("hidden");
    document.getElementById("ok").classList.remove("hidden");
}

function guide() {
    document.getElementById("ok").classList.add("hidden");
    document.getElementById("ko").classList.remove("hidden");
}

// HEADER 3
function change_header3() {
    let btn = document.getElementById("header-3-btn");
    if (btn.className != "alpinestar-btn" || btn.className != "enfield-tcx-btn" || btn.className != "jacket-btn") {
        btn.innerHTML = 'Know More' + '<i class="fa fa-angle-right" aria-hidden="true" style="font-size: 15px; padding-left: 5px;"></i>';
    }
    document.getElementById("scram-11-above").classList.remove("hidden");
    document.getElementById("scram-11").classList.add("hidden");
}

function apparel_650() {
    change_header3();
    document.getElementById("header-3-btn").className = "apparel-meteor-btn";
    document.getElementById("apparel").src = "images/apparel-super-meteor.jpg"
}

function apparel_collectible() {
    change_header3();
    document.getElementById("header-3-btn").className = "classic-scale-btn";
    document.getElementById("apparel").src = "images/classic-scale-model.jpg"
}

function alpinestar() {
    change_header3();
    let btn = document.getElementById("header-3-btn")
    btn.className = "alpinestar-btn";
    document.getElementById("apparel").src = "images/royal-enfield-x-alpinestar.jpg"
    btn.innerHTML = 'Shop Now' + '<i class="fa fa-angle-right" aria-hidden="true" style="font-size: 15px; padding-left: 5px;"></i>';
}

function scram_11() {
    change_header3();
    document.getElementById("header-3-btn").className = "scram-11-btn";
    document.getElementById("scram-11").classList.remove("hidden");
    document.getElementById("scram-11-above").classList.add("hidden");
}

function enfield_tcx() {
    change_header3();
    let btn = document.getElementById("header-3-btn")
    btn.className = "enfield-tcx-btn";
    document.getElementById("apparel").src = "images/royal-enfield-tcx.jpg"
    btn.innerHTML = 'Shop Now' + '<i class="fa fa-angle-right" aria-hidden="true" style="font-size: 15px; padding-left: 5px;"></i>';
}

function jacket() {
    change_header3();
    let btn = document.getElementById("header-3-btn")
    btn.className = "jacket-btn";
    document.getElementById("apparel").src = "images/miy-riding-jacket.jpg"
    btn.innerHTML = 'Shop Now' + '<i class="fa fa-angle-right" aria-hidden="true" style="font-size: 15px; padding-left: 5px;"></i>';
}

// HEADER 4
function miy() {
    document.getElementById("accessories-above").classList.add("hidden");
    document.getElementById("accessories-below").classList.remove("hidden");
}

function gma_accs() {
    document.getElementById("accessories-above").classList.remove("hidden");
    document.getElementById("accessories-below").classList.add("hidden");
}

// HEADER 5
function locate_store() {
    document.getElementById("locate-above").classList.remove("hidden");
    document.getElementById("locate-between").classList.add("hidden");
    document.getElementById("locate-below").classList.add("hidden");
}

function locate_service() {
    document.getElementById("locate-between").classList.remove("hidden");
    document.getElementById("locate-above").classList.add("hidden");
    document.getElementById("locate-below").classList.add("hidden");
}

function locate_parts() {
    document.getElementById("locate-below").classList.remove("hidden");
    document.getElementById("locate-above").classList.add("hidden");
    document.getElementById("locate-between").classList.add("hidden");
}