// =========================
// ハンバーガー
// =========================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

function closeMenu() {

    if (!hamburger || !nav) return;

    nav.classList.remove("active");
    hamburger.classList.remove("active");

    hamburger.setAttribute(
        "aria-expanded",
        "false"
    );

    hamburger.setAttribute(
        "aria-label",
        "メニューを開く"
    );
}


if (hamburger && nav) {

    hamburger.addEventListener("click", () => {

        const isOpen =
            !nav.classList.contains("active");

        nav.classList.toggle(
            "active",
            isOpen
        );

        hamburger.classList.toggle(
            "active",
            isOpen
        );

        hamburger.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        hamburger.setAttribute(
            "aria-label",
            isOpen
                ? "メニューを閉じる"
                : "メニューを開く"
        );

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            closeMenu();

        }

    });

}

// =========================
// TOP スライダー
// ふわっとゆっくり切り替え
// =========================

const slide = document.querySelectorAll(".slide");

if (slide.length > 0) {

    let current = 0;

    // =========================
    // 最初のスライドを表示
    // =========================

    slide.forEach((item, index) => {

        item.classList.toggle(
            "active",
            index === 0
        );

    });


    // =========================
    // 自動切り替え
    // =========================

    setInterval(() => {

        // 現在の写真をゆっくり消す
        slide[current].classList.remove("active");


        // 次の写真へ
        current++;

        // 2枚目の次は1枚目へ
        if (current >= slide.length) {

            current = 0;

        }


        // 次の写真を表示
        slide[current].classList.add("active");

    }, 7000);

}


// =========================
// お気に入り
// =========================

const favorites =
    document.querySelectorAll(".favorite-btn");


favorites.forEach((btn, index) => {

    const saved =
        localStorage.getItem(
            "favorite" + index
        );


    if (saved === "true") {

        btn.classList.add("active");

        btn.textContent = "♥";

    }


    btn.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();


        btn.classList.toggle("active");


        const isActive =
            btn.classList.contains("active");


        btn.textContent =
            isActive ? "♥" : "♡";


        localStorage.setItem(
            "favorite" + index,
            isActive
        );

    });

});



// =========================================================
// TOPへ戻るボタン
// =========================================================

const topButton =
    document.querySelector(".top-btn");


if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

}

// =========================================================
// OPEN THE DOOR
// スクロールでふわっと表示
// =========================================================

const openDoorItems =
    document.querySelectorAll(
        ".open-door-heading, .open-door-movie, .open-door-caption"
    );


if (openDoorItems.length > 0) {

    const openDoorObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    openDoorItems.forEach(item => {

        openDoorObserver.observe(item);

    });

}