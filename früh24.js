document.addEventListener("keydown", function (event) {
        let forbiddenKeys = [
            { ctrl: true, shift: false, key: "u" },
            { ctrl: true, shift: true, key: "i" },
            { ctrl: true, shift: true, key: "j" },
            { ctrl: true, shift: true, key: "c" }
        ];
        
        if (event.key === "F12" || forbiddenKeys.some(k => event.ctrlKey === k.ctrl && event.shiftKey === k.shift && event.key.toLowerCase() === k.key)) {
            event.preventDefault();
            alert("Kein Cheaten!!!");
        }
    });

    // Blockiert Rechtsklick
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Kein Cheaten!!!");
});

function _0x45c1(){const _0x364dcb=['href','key','764444sPwhRx','search','12OJblUG','136045TuBHIn','67001NsFPQc','1hJfLeD','258168FBfcEV','78NsVLoh','2846268VozfFl','1659868WmXtoy','location','63ADSqQi','1050DUbLlW','66720EscoLB'];_0x45c1=function(){return _0x364dcb;};return _0x45c1();}const _0x32852e=_0xc287;(function(_0x4e3a64,_0x4aa224){const _0x3a00e4=_0xc287,_0x4aea87=_0x4e3a64();while(!![]){try{const _0x27d8b7=-parseInt(_0x3a00e4(0xae))/0x1*(parseInt(_0x3a00e4(0xb9))/0x2)+-parseInt(_0x3a00e4(0xb6))/0x3*(parseInt(_0x3a00e4(0xbb))/0x4)+-parseInt(_0x3a00e4(0xac))/0x5*(parseInt(_0x3a00e4(0xb0))/0x6)+parseInt(_0x3a00e4(0xb2))/0x7+parseInt(_0x3a00e4(0xaf))/0x8*(parseInt(_0x3a00e4(0xb4))/0x9)+-parseInt(_0x3a00e4(0xb5))/0xa*(-parseInt(_0x3a00e4(0xad))/0xb)+parseInt(_0x3a00e4(0xb1))/0xc;if(_0x27d8b7===_0x4aa224)break;else _0x4aea87['push'](_0x4aea87['shift']());}catch(_0x57e8a6){_0x4aea87['push'](_0x4aea87['shift']());}}}(_0x45c1,0x83212));function getUrlParameter(_0x320376){const _0x32bb07=_0xc287,_0xaf04b9=new URLSearchParams(window[_0x32bb07(0xb3)][_0x32bb07(0xba)]);return _0xaf04b9['get'](_0x320376);}getUrlParameter(_0x32852e(0xb8))!=='romtromps!'&&(window[_0x32852e(0xb3)]['href']='index.html');function _0xc287(_0x1b5376,_0x325de3){const _0x45c1e2=_0x45c1();return _0xc287=function(_0xc28785,_0x57062a){_0xc28785=_0xc28785-0xac;let _0x4b8d57=_0x45c1e2[_0xc28785];return _0x4b8d57;},_0xc287(_0x1b5376,_0x325de3);}function logout(){const _0x41580c=_0x32852e;window[_0x41580c(0xb3)][_0x41580c(0xb7)]='login.html';}

function zurück() {
        window.location.href = "home.html?key=romtromps!"
}
