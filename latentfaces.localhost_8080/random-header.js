(function() {
    // For static HTML: compute base URL from this script's src attribute
    var scripts = document.getElementsByTagName('script');
    var thisScript = null;
    for (var i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src && scripts[i].src.indexOf('random-header.js') !== -1) {
            thisScript = scripts[i];
            break;
        }
    }
    var basePath = '';
    if (thisScript && thisScript.src) {
        basePath = thisScript.src.replace(/random-header\.js.*$/, '');
    }

    var images = [
        'wp-content/uploads/2019/10/cropped-dark-fantasy-landscape-wallpaper-wide-1280x720-2.jpg',
        'wp-content/uploads/2020/04/cropped-103338.jpg',
        'wp-content/uploads/2020/04/cropped-275667.jpg',
        'wp-content/uploads/2020/01/cropped-1460386-halloween-skeleton-wallpaper-1080x1920-screen.jpg',
        'wp-content/uploads/2020/04/cropped-242291.jpg',
        'wp-content/uploads/2021/05/02-Thule-mp3-image.jpg',
        'wp-content/uploads/2020/01/cropped-1460394-cool-halloween-skeleton-wallpaper-1920x1200-smartphone-6.jpg',
        'wp-content/uploads/2020/01/cropped-717753-ghost-wallpapers-1920x1080-desktop-1.jpg',
        'wp-content/uploads/2020/04/cropped-58812.jpg',
        'wp-content/uploads/2020/04/cropped-191492.jpg',
        'wp-content/uploads/2020/04/cropped-568005-1.jpg',
        'wp-content/uploads/2020/04/cropped-653616-1.jpg',
        'wp-content/uploads/2020/01/cropped-717943-ghost-wallpapers-3073x2048-desktop-4.jpg',
        'wp-content/uploads/2020/04/cropped-572982-1.jpg',
        'wp-content/uploads/2020/01/cropped-388509-2.jpg'
    ];

    var header = document.getElementById('page-site-header');
    if (header) {
        var randomIndex = Math.floor(Math.random() * images.length);
        header.style.backgroundImage = "url('" + basePath + images[randomIndex] + "')";
    }
})();
