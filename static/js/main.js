document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


// footer
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');

    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


//웹 메뉴바 드롭다운
/* const worksButton = document.getElementById('works-button');
const dropdownContent = document.querySelector('.dropdown-content');

worksButton.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownContent.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!event.target.matches('#works-button')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
}); */

const worksButton = document.getElementById('works-button');
const dropdownContent = document.querySelector('.dropdown-content');

// 드롭다운 열기
function openDropdown() {
    dropdownContent.classList.add('show');
}

// 드롭다운 닫기
function closeDropdown() {
    dropdownContent.classList.remove('show');
}

// 드롭다운 토글
function toggleDropdown() {
    dropdownContent.classList.toggle('show');
}

worksButton.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation(); // 이 이벤트가 document로 전달되지 않도록 함
    toggleDropdown(); // 메뉴를 토글
});

document.addEventListener('click', function(event) {
    if (!worksButton.contains(event.target)) { // worksButton 외부 클릭 시
        closeDropdown(); // 메뉴 닫기
    }
});

//모바일 메뉴바 드록다운
document.addEventListener('DOMContentLoaded', function() {
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', function() {
    mobileMenu.classList.add('show');
});

closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('show');
});

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
});
});


// footer.html을 로드하고, 콘텐츠를 추가한 후, 스크롤 이벤트 리스너를 추가
//스크롤 이벤트를 감지하여 특정 지점에 도달했을 때 보이도록
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');

    // footer.html을 로드하여 footerContainer에 삽입
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;

            // footer.html이 로드된 후, 요소들을 가져와서 이벤트 리스너 추가
            const contactUs = document.querySelector('.footer-content-mobile .contact-us');
            const footerBox = document.getElementById('footer-box');

            // 클릭 이벤트 리스너 추가
            if (footerBox) {
                footerBox.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // 부드럽게 스크롤
                    });
                });
            }

            // 스크롤 이벤트 리스너 추가
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY; // 현재 스크롤 위치
                const triggerPosition = 250; // 스크롤 위치가 250px 이상일 때 요소들을 보이게 함

                if (scrollPosition > triggerPosition) {
                    contactUs.style.opacity = '1'; // 스크롤 시 보이도록 설정
                    footerBox.style.opacity = '1';
                } else {
                    contactUs.style.opacity = '0'; // 스크롤이 다시 위로 올라가면 숨김
                    footerBox.style.opacity = '0';
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


// 요소들을 가져와서 스크롤시 푸터 이벤트 리스너 추가
const contactUs = document.querySelector('.footer-content-mobile .contact-us');
const footerBox = document.getElementById('footer-box');

// 클릭 이벤트 리스너 추가
if (footerBox) {
    footerBox.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 스크롤
        });
    });
}

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const triggerPosition = 250; // 스크롤 위치가 250px 이상일 때 요소들을 보이게 함

    if (scrollPosition > triggerPosition) {
        contactUs.style.opacity = '1'; // 스크롤 시 보이도록 설정
        footerBox.style.opacity = '1';
    } else {
        contactUs.style.opacity = '0'; // 스크롤이 다시 위로 올라가면 숨김
        footerBox.style.opacity = '0';
    }
});



//각 페이지 메뉴 가로 스크롤
// window.onload = function() {
//     const categoryMenu = document.querySelector('.category-menu-wrapper');
//     categoryMenu.scrollLeft = 100;  // 스크롤을 100px 만큼 이동
// };

//검색 시 검색 페이지로 로딩
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim().toLowerCase(); // 입력된 값 가져오기 및 소문자로 변환

        if (query) {
            let pageUrl = '';

            // 입력된 값에 따라 페이지 URL을 매핑
            const pageMappings = {
                'about': 'about.html',
                '어바웃': 'about.html',

                'works': 'works.html',
                '워크': 'works.html',

                'magazine': 'magazine.html',
                '매거진': 'magazine.html',

                'editorial': 'editorial.html',
                '에디토리얼': 'editorial.html',

                'goods': 'goods.html',
                '굿즈': 'goods.html',

                'promotion': 'promotion.html',
                '프로모션': 'promotion.html',

                'information': 'information.html',
                '정보': 'information.html',

                'contact': 'contact.html',
                '컨택트': 'contact.html'
                // 필요한 경우 더 많은 매핑 추가 가능
            };

            // 입력된 값에 대응하는 페이지 URL을 가져옴
            pageUrl = pageMappings[query];

            if (pageUrl) {
                // 해당 페이지로 이동
                window.location.href = pageUrl;
            } else {
                alert('해당 페이지를 찾을 수 없습니다.');
            }
        }
    });
});

//hyundai_art 메인 모.바.일 화면에서만 로고가 보이도록
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.body.getAttribute('data-page');
    const logo = document.querySelector('.logo');

    if (window.innerWidth <= 768) { // 모바일 화면 크기
        if (currentPage === 'hyundai_art') {
            logo.style.display = 'block'; // 특정 페이지에서만 로고 표시
        } else {
            logo.style.display = 'none'; // 다른 페이지에서는 로고 숨김
        }
    } else {
        logo.style.display = 'block'; // 데스크탑에서는 모든 페이지에서 로고 표시
    }
});
 


$(document).ready(function () {
    // Swiper 초기화
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true, // 루프 활성화
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 처음에는 work_detail을 숨기기
    $('.work_detail').hide();

    // 리스트 항목 클릭 시 해당 index의 스와이퍼 슬라이드로 이동
    $('.list_page01 li').click(function () {
        var index = $(this).index(); // 클릭한 항목의 인덱스 가져오기
        $('.work_detail').show(); // work_detail 표시

        // 루프가 활성화된 상태에서 정확한 슬라이드로 이동하기 위한 처리
        var loopedSlides = swiper.loopedSlides || 0;
        var realIndex = index + loopedSlides; // 실제 인덱스 계산
        swiper.slideToLoop(realIndex); // 해당 인덱스의 슬라이드로 이동
    });
});



