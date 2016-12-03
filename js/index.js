
window.onload = function () {
    var width = window.innerWidth,
        height = window.innerHeight,
        home_header = document.getElementById('home_header'),
        user_img = document.getElementById("user_img");

    var homeBehavior = function () {
        home_header && (home_header.style.cssText="height:"+height+"px;");
        window.location.hash && window.location.hash === '#Home' && (window.scroll({top: height-80, left: 0, behavior: 'smooth'}))
    }

    var tagBehavior = function () {
        var _hash = window.location.hash.replace('#', ''),
            _h = _hash && _hash !== 'Home' && (document.getElementById(_hash).offsetTop);
        _hash && _hash !== 'Home' && (window.scroll({top: _h-80, left: 0, behavior: 'smooth'}))
    }

    var eventInstall = function () {
        var _nav = document.getElementById('nav_bar'),
            _cnav = document.getElementById('nav_container');

        width > 750 && window.addEventListener('scroll',function(){
            var  _top = document.body.scrollTop;
            height = home_header?height:240;
            _cnav.style.height = _top>=(height-80)?"80px":_top>(height-160)?(_top-height+160)+'px':'0';
        })

        user_img && user_img.addEventListener('click',function(){
           window.scroll({top: height-80, left: 0, behavior: 'smooth'})
        })

    }

    var init = function () {
        homeBehavior();
        tagBehavior();
        eventInstall();
    }

    init();
}
