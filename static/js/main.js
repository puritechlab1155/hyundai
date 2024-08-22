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

//-----------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // 웹 메뉴바 드롭다운
    const worksButton = document.getElementById('works-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // 드롭다운 토글 함수
    function toggleDropdown() {
        dropdownContent.classList.toggle('show'); // 드롭다운 메뉴 보이기/숨기기
    }

    // 드롭다운 열기/닫기 기능 제어
    worksButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation(); // 이 이벤트가 document로 전달되지 않도록 함
        toggleDropdown(); // 드롭다운 메뉴를 토글
    });

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', function(event) {
        // worksButton이나 dropdownContent를 클릭하지 않은 경우 메뉴를 닫음
        if (!worksButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show'); // 메뉴 닫기
        }
    });
});

    // 모바일 메뉴바 드롭다운
//     const menuIcon = document.getElementById('menu-icon');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const closeIcon = document.getElementById('close-icon');

//     menuIcon.addEventListener('click', function() {
//         mobileMenu.classList.add('show'); // 모바일 메뉴 보이기
//     });

//     closeIcon.addEventListener('click', function() {
//         mobileMenu.classList.remove('show'); // 모바일 메뉴 숨기기
//     });

//     const searchButton = document.getElementById('search-button');
//     const searchInput = document.getElementById('search-input');

//     searchButton.addEventListener('click', function() {
//         const query = searchInput.value;
//         if (query) {
//             window.location.href = `search.html?q=${encodeURIComponent(query)}`;
//         }
//     });
// });

// 모바일 메뉴바 드롭다운
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeIcon = document.getElementById('close-icon');
    const animationDuration = 600; // 애니메이션 지속 시간 (500ms)

    menuIcon.addEventListener('click', function () {
        // 모바일 메뉴 보이기
        mobileMenu.classList.add('show'); // 모바일 메뉴 보이기
        mobileMenu.style.transition = `opacity ${animationDuration}ms ease, transform ${animationDuration}ms ease`;
        mobileMenu.style.opacity = '1';
        mobileMenu.style.transform = 'translateY(0)';
        mobileMenu.style.visibility = 'visible';
    });

    closeIcon.addEventListener('click', function () {
        // 모바일 메뉴 숨기기
        mobileMenu.style.transition = `opacity ${animationDuration}ms ease, transform ${animationDuration}ms ease`;
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-100%)';

        // 애니메이션이 끝난 후 visibility를 hidden으로 설정
        setTimeout(() => {
            mobileMenu.style.visibility = 'hidden';
        }, animationDuration);
    });

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });
});




//-----------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.getElementById('menu-icon');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const closeIcon = document.getElementById('close-icon');

//     // 메뉴 열기
//     menuIcon.addEventListener('click', function() {
//         mobileMenu.classList.add('show');
//     });

//     // 메뉴 닫기
//     closeIcon.addEventListener('click', function() {
//         mobileMenu.classList.remove('show');
//     });

//     // 검색 기능
//     const searchButton = document.getElementById('search-button');
//     const searchInput = document.getElementById('search-input');

//     searchButton.addEventListener('click', function() {
//         const query = searchInput.value;
//         if (query) {
//             window.location.href = `search.html?q=${encodeURIComponent(query)}`;
//         }
//     });
// });

//------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // 모든 footer-container 요소들을 선택
    const footerContainers = document.querySelectorAll('#footer-container');

    // footer.html을 로드하여 각 footerContainer에 삽입
    footerContainers.forEach(footerContainer => {
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
                const contactUs = footerContainer.querySelector('.footer-content-mobile .contact-us');
                const footerBox = footerContainer.querySelector('#footer-box');

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

                'works': 'works_all_type.html',
                '워크': 'works_all_type.html',
                '워크 디테일': 'works_all_type.html',
                '일': 'works_all_type.html',

                'magazine': 'magazine.html',
                '매거진': 'magazine.html',
                '잡지': 'magazine.html',

                'editorial': 'editorial.html',
                '에디토리얼': 'editorial.html',
                '편집': 'editorial.html',

                'goods': 'goods.html',
                '굿즈': 'goods.html',
                '굿스': 'goods.html',
                '상품': 'goods.html',

                'promotion': 'promotion.html',
                '프로모션': 'promotion.html',
                '광고': 'promotion.html',

                'information': 'information.html',
                '정보': 'information.html',

                'contact': 'contact.html',
                '컨택트': 'contact.html',
                '연락하기': 'contact.html',
                '회사': 'contact.html',
                '연락처': 'contact.html',
                '연락': 'contact.html'
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
 
//페이지 네이션
// 현재 페이지 번호 가져오기
const currentPage = document.body.getAttribute('data-page');

// 페이지네이션 버튼들 선택
const paginationLinks = document.querySelectorAll('.pagenation ul li a');

// 현재 페이지 번호에 맞는 링크에 'on' 클래스 추가
paginationLinks.forEach(link => {
    const pageNumber = link.textContent.trim(); // 링크 텍스트에서 숫자 가져오기
    if (pageNumber === currentPage) {
        link.parentElement.classList.add('on');
    }
});

//카테고리 모바일. 클릭시 bold효과
document.addEventListener('DOMContentLoaded', function () {
    // 현재 페이지의 URL 경로를 가져옵니다.
    const currentPage = window.location.pathname.split("/").pop();
    
    // 모든 메뉴 항목을 가져옵니다.
    const menuItems = document.querySelectorAll('.category-menu li a');

    // 현재 페이지와 일치하는 링크에 'bold' 클래스를 추가합니다.
    menuItems.forEach(item => {
        const linkHref = item.getAttribute('href');
        if (linkHref === currentPage) {
            item.classList.add('bold');
        }
    });
});


