$(document).ready(function () {
    // nav menu-bar
    $(".open-btn2").click(function () {
        $(this).toggleClass("active");
        $(".nav-overlay").toggleClass("active");
    });

    $(".navClose").click(function () {
        $(".nav-overlay").removeClass("active");
        $(".open-btn2").removeClass("active");
    });

    // smooth scroll
    $(".smooth-scroll").click(function (event) {
        event.preventDefault(); // デフォルトのアクション（即座にジャンプする）をキャンセル
        var target = this.hash ? $(this.hash) : $("html"); // ハッシュ（#以降の部分）が存在する場合と、存在しない（#のみ）場合で処理を分ける

        // スムーズにスクロールするアニメーション
        $("html, body").animate(
            {
                scrollTop: target.offset().top,
            },
            400
        ); // 800ミリ秒（0.8秒）かけてスクロール
    });

    //main scroll event
    // 動きのきっかけとなるアニメーションの名前を定義
    function fadeAnime() {
        // fadeIn1
        $(".fadeIn1Trigger").each(function () {
            //fadeIn1Triggerというクラス名が
            var elemPos = $(this).offset().top - 0; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeIn1"); // 画面内に入ったらfadeIn1というクラス名を追記
            } else {
                $(this).removeClass("fadeIn1"); // 画面外に出たらfadeIn1というクラス名を外す
            }
        });

        // fadeIn2
        $(".fadeIn2Trigger").each(function () {
            //fadeIn2Triggerというクラス名が
            var elemPos = $(this).offset().top - 50; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeIn2"); // 画面内に入ったらfadeIn2というクラス名を追記
            } else {
                $(this).removeClass("fadeIn2"); // 画面外に出たらfadeIn2というクラス名を外す
            }
        });

        // fadeIn3
        $(".fadeIn3Trigger").each(function () {
            //fadeIn3Triggerというクラス名が
            var elemPos = $(this).offset().top + 200; //要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeIn3"); // 画面内に入ったらfadeIn3というクラス名を追記
            } else {
                $(this).removeClass("fadeIn3"); // 画面外に出たらfadeIn3というクラス名を外す
            }
        });
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on("load", function () {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    // slider
    $(".slider").slick({
        autoplay: true, //自動的に動き出すか。初期値はfalse。
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        speed: 600, //スライドのスピード。初期値は300。
        slidesToShow: 3, //スライドを画面に3枚見せる
        slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
        centerMode: true, //要素を中央ぞろえにする
        variableWidth: true, //幅の違う画像の高さを揃えて表示
        dots: true, //下部ドットナビゲーションの表示
    });
});

// accordion
//アコーディオンをクリックした時の動作
$(".acco-title").on("click", function () {
    //タイトル要素をクリックしたら
    var findElm = $(this).next(".acco-box"); //直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle(); //アコーディオンの上下動作

    if ($(this).hasClass("close")) {
        //タイトル要素にクラス名closeがあれば
        $(this).removeClass("close"); //クラス名を除去し
    } else {
        //それ以外は
        $(this).addClass("close"); //クラス名closeを付与
    }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作
$(window).on("load", function () {
    $(".process-acco li:first-of-type section").addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加

    $(".open").each(function (index, element) {
        //openクラスを取得
        var Title = $(element).children(".acco-title"); //openクラスの子要素のtitleクラスを取得
        $(Title).addClass("close"); //タイトルにクラス名closeを付与し
        var Box = $(element).children(".acco-box"); //openクラスの子要素boxクラスを取得
        $(Box).slideDown(500); //アコーディオンを開く
    });
});
