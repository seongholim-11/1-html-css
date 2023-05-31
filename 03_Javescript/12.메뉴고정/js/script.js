let $window = window,
    $header = document.getElementById('header'),
    $logo = document.getElementById('logo'),
    $defaultLogo = './img/pngwing.com.png',
    $smallLogo = './img/KakaoTalk_20230531_125346253.png',
    $threshold = $header.offsetHeight;
console.log("🚀 ~ file: script.js:7 ~ threshold:", $threshold)

$window.addEventListener('scroll', function () {
    if (window.pageYOffset > $threshold) {
        if (!$header.classList.contains('active')) {
            $header.classList.add('active');
            switchImg($smallLogo)
        }
    } else {
        if ($header.classList.contains('active')) {
            $header.classList.remove('active');
            switchImg($defaultLogo)
        }

    }
})

function switchImg(newImgPath) {
    $logo.classList.add('hide');
    setTimeout(function () {
        $logo.setAttribute('src', newImgPath)
        $logo.classList.remove('hide');
    }, 300)
}
