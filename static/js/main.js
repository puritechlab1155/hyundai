document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});


//앞전 페이지로 이동
function goBack() {
    if (document.referrer !== "") {
        window.history.back();
    } else {
        // 히스토리 기록이 없는 경우 기본 페이지로 이동
        window.location.href = "hyundai_art.html"; // 원하는 URL로 변경
    }
}

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

    // 드롭다운 열기
    worksButton.addEventListener('mouseenter', function(event) {
        event.preventDefault();
        dropdownContent.classList.add('show'); // 드롭다운 메뉴를 표시
    });

    // 드롭다운 닫기
    // worksButton.addEventListener('mouseleave', function(event) {
    //     // 마우스가 버튼에서 나갔을 때 드롭다운이 사라지도록 설정
    //     dropdownContent.classList.remove('show');
    // });

    // 드롭다운 메뉴에 마우스를 올렸을 때 드롭다운 유지
    dropdownContent.addEventListener('mouseenter', function(event) {
        dropdownContent.classList.add('show'); // 드롭다운 유지
    });

    // 드롭다운 메뉴에서 마우스가 벗어나면 드롭다운 닫기
    dropdownContent.addEventListener('mouseleave', function(event) {
        dropdownContent.classList.remove('show'); // 드롭다운 닫기
    });

    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', function(event) {
        if (!worksButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show'); // 외부 클릭 시 메뉴 닫기
        }
    });
});



// 모바일 메뉴바 드롭다운
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeIcon = document.getElementById('close-icon');
    const animationDuration = 500; // 애니메이션 지속 시간 (500ms)

    menuIcon.addEventListener('click', function () {
        mobileMenu.style.visibility = 'visible'; // 먼저 visibility를 visible로 설정
        mobileMenu.classList.add('show'); // 애니메이션 시작
    });

    closeIcon.addEventListener('click', function () {
        mobileMenu.classList.remove('show'); // 애니메이션 숨기기 시작

        // 애니메이션이 끝난 후 visibility를 hidden으로 설정
        setTimeout(() => {
            mobileMenu.style.visibility = 'hidden';
        }, animationDuration);
    });
    // 검색기능
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query) {
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });
});

// 모바일에서 WORKS 클릭시 토글 


// function toggleDropdown(event) {
//     const dropdownMenu = document.getElementById('dropdownMenu');
    
//     if (dropdownMenu.style.display === 'block') {
//         dropdownMenu.style.display = 'none';
//     } else {
//         dropdownMenu.style.display = 'block';
//     }
// }


function toggleDropdown(event) {
    const dropdown = document.getElementById('dropdownMenu');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}




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


//pop-up 창
document.addEventListener("DOMContentLoaded", function () {
    const popUpElements = document.querySelectorAll('.pop-up');

    function handleScroll() {
        popUpElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            // 요소가 화면에 보이기 시작하는 조건
            if (elementTop < window.innerHeight && elementBottom > 0) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    }

    // 스크롤할 때마다 함수 실행
    window.addEventListener('scroll', handleScroll);

    // 페이지 로드 시 요소가 이미 보이는지 체크
    handleScroll();
});


// // 메인 팝업 창
// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("modal-area");
//     const closeButton = document.getElementById("close-modal");
//     const animationDuration = 500; // 애니메이션 지속 시간 (ms)

//     // 닫기 버튼 클릭 시 애니메이션 후 모달 숨기기
//     closeButton.addEventListener("click", function () {
//         modal.style.transition = `opacity ${animationDuration}ms ease`;
//         modal.style.opacity = '0'; // 투명하게 만들기
        
//         // 애니메이션이 끝난 후 visibility를 hidden으로 설정
//         setTimeout(function () {
//             modal.style.visibility = 'hidden';
//         }, animationDuration);
//     });

//     // 모달이 다시 보여야 할 때
//     function showModal() {
//         modal.style.visibility = 'visible';
//         modal.style.opacity = '1'; // 다시 보이게 하기
//     }

//     // 페이지 로드 시 모달을 보여줌
//     showModal();
// });

// 메인 팝업 창
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal-area");
    const closeButton = document.getElementById("close-modal");
    const dontShowAgainButton = document.getElementById("dont-show-again");
    const animationDuration = 500; // 애니메이션 지속 시간 (ms)

    // 하루의 밀리초 값
    const oneDay = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();

    // localStorage에 저장된 시간이 있는지 확인
    const hideModalTime = localStorage.getItem("hideModalTime");

    // 하루가 지났는지 확인하는 함수
    function isOneDayPassed() {
        if (!hideModalTime) return false;
        return now - hideModalTime > oneDay;
    }

    // 모달 표시 여부 결정
    if (localStorage.getItem("hideModal") !== "true" || isOneDayPassed()) {
        // 하루가 지났으면 다시 보여주고 localStorage 초기화
        if (isOneDayPassed()) {
            localStorage.removeItem("hideModal");
            localStorage.removeItem("hideModalTime");
        }
        showModal();
    } else {
        modal.style.display = "none"; // 모달 숨기기
    }

    // 닫기 버튼 클릭 시 애니메이션 후 모달 숨기기
    closeButton.addEventListener("click", function () {
        hideModal();
    });

    // "다시 보지 않기" 버튼 클릭 시
    dontShowAgainButton.addEventListener("click", function () {
        localStorage.setItem("hideModal", "true");
        localStorage.setItem("hideModalTime", now); // 현재 시간 저장
        hideModal(); // 모달 숨기기
    });

    // 모달을 숨기는 함수
    function hideModal() {
        modal.style.transition = `opacity ${animationDuration}ms ease`;
        modal.style.opacity = '0';
        
        // 애니메이션이 끝난 후 모달 완전히 숨기기
        setTimeout(function () {
            modal.style.visibility = 'hidden';
        }, animationDuration);
    }

    // 모달을 보이는 함수
    function showModal() {
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }
});


//----------------------------




