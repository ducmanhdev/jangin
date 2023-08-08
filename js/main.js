function isHidden(elem) {
    return !elem.offsetWidth && !elem.offsetHeight;
}
function stickySide(idSticky, idStickyWrap, offset){
    if(!document.querySelector(idSticky)) return;
    if(!document.querySelector(idStickyWrap))  return;
    if(!offset) offset = 0;
    let sticky, stickyHeight, stickyWrap, stickyWrapHeight, stickyWrapOffsetTop;
    sticky = document.querySelector(idSticky);
    stickyHeight = sticky.offsetHeight;
    stickyWrap = document.querySelector(idStickyWrap);
    stickyWrapHeight = stickyWrap.offsetHeight;
    stickyWrapOffsetTop = stickyWrap.offsetTop;
    if(pageYOffset + offset >= stickyWrapOffsetTop && pageYOffset + offset + stickyHeight <= stickyWrapOffsetTop + stickyWrapHeight){
        sticky.style.position = 'relative';
        sticky.style.top = offset + pageYOffset - stickyWrapOffsetTop + 'px';
    } 
    else {
        if(pageYOffset + offset < stickyWrapOffsetTop){
            sticky.removeAttribute('style');
        }
        if( pageYOffset + offset + stickyHeight > stickyWrapOffsetTop + stickyWrapHeight){
            sticky.style.top = stickyWrapHeight - stickyHeight + 'px';
        }
    }
}
function scrollToTop(){
    if (pageYOffset > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, pageYOffset - pageYOffset / 8);
    }
}
window.addEventListener('DOMContentLoaded', el => {
    document.querySelectorAll('.main-menu-nav .dropdown').forEach(el => {
        const dropdown = el;
        const arrows = document.createElement("i");
        arrows.classList.add('fa', 'fa-angle-down');
        dropdown.querySelector('a').appendChild(arrows);
        arrows.addEventListener('click', e => {
            dropdown.classList.toggle('show-sub-menu');
        });
    });
    if(document.getElementById('main-menu-btn') && document.getElementById('main-menu') && document.getElementById('main-menu-overlay')){
        const mainMenuBtn = document.getElementById('main-menu-btn');
        const mainMenu = document.getElementById('main-menu');
        const mainMenuOverlay = document.getElementById('main-menu-overlay');
        mainMenuBtn.addEventListener('click', function(){
            mainMenuBtn.classList.toggle('active');
            mainMenu.classList.toggle('active');
        })
        mainMenuOverlay.addEventListener('click', function(){
            mainMenuBtn.classList.remove('active');
            mainMenu.classList.remove('active');
        });
    }
    if (document.getElementById('scroll-top')) {
        const scrollTopBtn = document.getElementById('scroll-top');
        pageYOffset >= 100 ? scrollTopBtn.classList.add('show') : scrollTopBtn.classList.remove('show');
        window.addEventListener('scroll', function(){
            pageYOffset >= 100 ? scrollTopBtn.classList.add('show') : scrollTopBtn.classList.remove('show');
        });
        scrollTopBtn.addEventListener('click', scrollToTop);
    }
    document.querySelectorAll('.mona-content iframe[src^="https://www.youtube.com/"]').forEach(function(e){
        const wrap = document.createElement("div");
        wrap.classList.add('mona-youtube-wrap');
        e.insertAdjacentElement("afterend", wrap);
        wrap.appendChild(e);
    });
    document.querySelectorAll('.mona-content table').forEach(function(e){
        const wrap = document.createElement("div");
        wrap.classList.add('mona-table-wrap');
        e.insertAdjacentElement("afterend", wrap);
        wrap.appendChild(e);
    });
    new Swiper('#home-banner-slider.is-slider .swiper-container', {
        speed: 1400,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.home-banner-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.home-banner-button-next',
            prevEl: '.home-banner-button-prev',
        },
        loop: true,
    });
    if(document.querySelector('.products-slider.is-slider')){
        const productsSlider = new Swiper('.products-slider.is-slider .swiper-container', {
            init: false,
            speed: 1200,
            slidesPerView: 'auto',
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.products-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.products-button-next',
                prevEl: '.products-button-prev',
            },
            loop: true,
        });
    
        window.addEventListener('load', e => {
            if(window.matchMedia("(max-width: 768px)").matches) productsSlider.init();
        })
    }
    new Swiper('.related-pd-slider.is-slider .swiper-container', {
        speed: 1200,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.related-pd-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.related-pd-button-next',
            prevEl: '.related-pd-button-prev',
        },
        loop: true,
    });
    new Swiper('.related-pd-slider-2.is-slider .swiper-container', {
        speed: 1200,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.related-pd-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.related-pd-button-next',
            prevEl: '.related-pd-button-prev',
        },
        loop: true,
    });
    new Swiper('.best-reviews-slider.is-slider .swiper-container', {
        speed: 1200,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.best-reviews-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.best-reviews-button-next',
            prevEl: '.best-reviews-button-prev',
        },
        loop: true,
    });
    new Swiper('.pd-slider.is-slider .swiper-container', {
        speed: 1200,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.pd-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.pd-slider-button-next',
            prevEl: '.pd-slider-button-prev',
        },
        loop: true,
    });
    new Swiper('.about-gallery-slider.is-slider .swiper-container', {
        speed: 1200,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.about-gallery-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.about-gallery-button-next',
            prevEl: '.about-gallery-button-prev',
        },
        loop: true,
    });
    if(document.querySelector('#showroom-gallery-slider-bottom .swiper-container') && document.querySelector('#showroom-gallery-slider-top .swiper-container')){
        const sliderBottom = new Swiper('#showroom-gallery-slider-bottom .swiper-container', {
            slidesPerView: 'auto',
            autoplay: {
                delay: 5000,
            },
            speed: 1000,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loop: true,
        });
        const sliderTop = new Swiper('#showroom-gallery-slider-top .swiper-container', {
            slidesPerView: 'auto',
            autoplay: {
                delay: 5000,
            },
            speed: 1000,
            navigation: {
                nextEl: '.showroom-gallery-button-next',
                prevEl: '.showroom-gallery-button-prev',
            },
            thumbs: {
                swiper: sliderBottom
            },
            loop: true,
        });
    }
    if(document.getElementById('cate-sidebar-filter')){
        document.getElementById('cate-sidebar-filter').addEventListener('click', e => {
            if(e.target.closest('.filter-title')){
                e.target.closest('li').classList.toggle('active');
            }
        })
    }
    if(document.getElementById('cate-sidebar-filter-btn') && document.getElementById('cate-sidebar-filter') && document.getElementById('cate-sidebar-filter-overlay')){
        const btn = document.getElementById('cate-sidebar-filter-btn');
        const menu = document.getElementById('cate-sidebar-filter');
        const overlay = document.getElementById('cate-sidebar-filter-overlay');
        btn.addEventListener('click', function(){
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        })
        overlay.addEventListener('click', function(){
            btn.classList.remove('active');
            menu.classList.remove('active');
        });
    }
    if(document.querySelector('#pd-detail-slider-top .swiper-container') && document.querySelector('#pd-detail-slider-bottom .swiper-container')){
        const sliderBottom = new Swiper('#pd-detail-slider-bottom .swiper-container', {
            slidesPerView: 'auto',
            speed: 800,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            
        });
        const sliderTop = new Swiper('#pd-detail-slider-top .swiper-container', {
            slidesPerView: 'auto',
            speed: 800,
            thumbs: {
                swiper: sliderBottom
            },
            navigation: {
                nextEl: '.pd-detail-button-next',
                prevEl: '.pd-detail-button-prev',
            },
        });
    }
    document.querySelectorAll('.overview-picker-item').forEach(el => {
        let productName = el.querySelector('.overview-picker-pd .f-control');
        let productPrice = el.querySelector('.overview-picker-price .f-control');
        productName.addEventListener('change', e => {
            let selected = productName.options[productName.selectedIndex];
            let price = selected.getAttribute('data-price');
            productPrice.value = `GIÁ: ${price}`;
        });
    });
    if(document.getElementById('header') && document.getElementById('main')){
        window.addEventListener('load', function(){
            const header = document.getElementById('header');
            const main = document.getElementById('main');
            const headerHeight = header.offsetHeight;
            const headerOffset = header.offsetTop;
            if(pageYOffset >= headerOffset + headerHeight){
                header.classList.add('fixed');
                main.style.marginTop = headerHeight + 'px';
            }
            else{
                header.classList.remove('fixed');
                main.style.marginTop = '';
            }
            window.addEventListener('scroll', function(){
                if(pageYOffset >= headerOffset + headerHeight){
                    header.classList.add('fixed');
                    main.style.marginTop = headerHeight + 'px';
                }
                else{
                    header.classList.remove('fixed');
                    main.style.marginTop = '';
                }
            })
        })
    }
})
jQuery(document).ready(function($){
    new WOW().init();
    $('.open-popup-btn').magnificPopup({
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = "mfp-zoom-in";
            },
        },
        midClick: true
    });
    $('.open-video-btn, .open-video-btn-2').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-move-from-top',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
    });
    $('.tab-wrap').each(function() {
        const $tabWrapper = $(this);
		const $tabID = $tabWrapper.find('.tab-link.current').attr('data-tab');
        $tabWrapper.find($tabID).fadeIn().siblings().hide();
        $($tabWrapper).on('click', '.tab-link', function(e){
            e.preventDefault();
			$tabID = $(this).attr('data-tab');
			$(this).addClass('current').siblings().removeClass('current');
			$tabWrapper.find($tabID).fadeIn().siblings().hide();
        });
    });
    $('.about-gallery-slider').lightGallery({
        selector: '.full-img',
        share: false,
        actualSize: false,
        download: false,
        autoplayControls: false,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });
    $('#showroom-gallery-slider-top').lightGallery({
        selector: '.swiper-slide:not(.swiper-slide-duplicate) .full-img',
        share: false,
        actualSize: false,
        download: false,
        autoplayControls: false,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });

    $('.policy-item.active').find('.policy-desc').show();
    $('.policy-title').on('click', function(){
        $(this).closest('.policy-item').toggleClass('active');
        $(this).siblings('.policy-desc').stop().slideToggle();
    })
});