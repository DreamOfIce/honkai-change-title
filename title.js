//define titles&audios
const info = [{
    title: 'Teriri的魔力耗完了,要好好休息才行呢w(ﾟДﾟ)w',
    audio: 'bronya.mp3'
}, {
    title: "为世界上所有美好而战!",
    audio: "kiana.mp3"
}, {
    title: '我什么都做不到!(っ °Д °;)っ',
    audio: 'raiden1.mp3'
}, {
    title: '想吃美少女味的泡面ヾ(•ω•`)o',
    audio: 'raiden2.mp3'
}, {
    title: '苏醒吧,冰箱的主人(￣_,￣ )',
    audio: 'rita.mp3'
}, {
    title: '舰长补给全保底，舰长副本零掉落╰（‵□′）╯',
    audio: 'sakura.mp3'
}, {
    title: '希儿真是太可爱了(ง •_•)ง',
    audio: 'seele1.mp3'
}, {
    title: '噫!忘掉刚才的声音╰（‵□′）╯',
    audio: 'seele2.mp3'
}, {
    title: '噢,你也想成为我的玩具吗φ(゜▽゜*)♪',
    audio: 'seele3.mp3'
}, {
    titile: '把你Teriri掉哦(✿◕‿◕✿)',
    audio: 'theresa.mp3'
}];

//variables
var cdn = "https://cdn.jsdelivr.net/gh/Creeper2077/honkai-change-title@main/";
var time;
var norm_title = document.title;

//random function
function randomInfo() {
    return info[Math.floor(Math.random() * info.length)];
}

//change title

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        clearTimeout(time);
        var info = randomInfo();
        document.title = info.title;
        var mp3 = new Audio(cdn + info.audio);
        mp3.play();

    } else {
        var info = randomInfo();
        document.title = info.title;
        var mp3 = new Audio(cdn + info.audio);
        mp3.play();
        time = setTimeout(function () {
            document.title = norm_title;
        }, 3000);
    }
});