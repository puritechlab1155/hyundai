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


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeIcon = document.getElementById('close-icon');
    const animationDuration = 500; // 애니메이션 지속 시간 (500ms)

    // 초기 상태 설정 (opacity 0과 translateY 상태로 숨기고 있지만 visibility는 visible로 설정)
    mobileMenu.style.transition = `opacity ${animationDuration}ms ease, transform ${animationDuration}ms ease`;
    mobileMenu.style.opacity = '0';
    mobileMenu.style.transform = 'translateY(-100%)';
    mobileMenu.style.visibility = 'visible'; // visibility는 유지

    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.add('show'); // 모바일 메뉴 보이기
        // 첫 번째 클릭에서 visibility를 설정하고 나머지 애니메이션을 적용
        mobileMenu.style.visibility = 'visible';
        mobileMenu.style.opacity = '1';
        mobileMenu.style.transform = 'translateY(0)';
    });

    closeIcon.addEventListener('click', function () {
        // 모바일 메뉴 숨기기
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



// GSAP POPUP
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.fromTo(".pop-up", {
//         y: 100,          // 시작 시 요소의 Y 좌표
//         opacity: 0       // 시작 시 요소가 보이지 않음
//     }, {
//         y: 0,            // 스크롤 후 Y 좌표
//         opacity: 1,      // 스크롤 후 요소가 완전히 보임
//         duration: 1.5,   // 애니메이션 지속 시간
//         ease: "power2.out",
//         stagger: 1.5,
//         scrollTrigger: {
//             trigger: ".pop-up",
//             start: "top 80%",      // 요소가 화면 상단에서 80% 지점에 도달할 때 애니메이션 시작
//             end: "bottom 20%",     // 트리거 종료를 더 빠르게 설정
//             toggleActions: "play none none reset",  // 다시 위로 스크롤할 때 애니메이션을 다시 실행
//             scrub: false,  // 스크롤에 따라 부드럽게 진행되지 않고, 트리거에 도달할 때마다 실행
//             markers: false // 디버그용 마커 숨기기
//         }
//     });
// });

// // GSAP
// document.addEventListener("DOMContentLoaded", function () {
//     // 리스트 요소들을 가져옵니다.
//     const lists = document.querySelectorAll('.detail_list .page');

//     // 각 리스트 요소에 클릭 이벤트와 애니메이션 적용
//     lists.forEach((list) => {
//         list.addEventListener('click', function () {
//             gsap.fromTo(list, {
//                 y: 100,          // 시작 위치 (아래에서 올라오는 느낌)
//                 opacity: 0,      // 시작 시 투명
//                 scale: 0.8       // 작게 시작
//             }, {
//                 y: 0,            // 최종 위치
//                 opacity: 1,      // 완전히 보임
//                 scale: 1,        // 원래 크기
//                 duration: 1.2,   // 애니메이션 지속 시간
//                 ease: "power3.out"  // 부드러운 애니메이션
//             });
//         });
//     });
// });

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

//메인 팝업 창 
// document.addEventListener("DOMContentLoaded", function () {
//     // localStorage 확인 후 모달 표시 여부 결정
//     if (localStorage.getItem("hideModal") !== "true") {
//         document.getElementById("modal-area").style.display = "block";
//     } else {
//         document.getElementById("modal-area").style.display = "none";
//     }

//     // "다시 보지 않기" 버튼 클릭 시
//     document.getElementById("dont-show-again").addEventListener("click", function () {
//         localStorage.setItem("hideModal", "true"); // 다시 보지 않기 설정
//         document.getElementById("modal-area").style.display = "none"; // 모달 닫기
//     });

//     // "닫기" 버튼 클릭 시
//     document.getElementById("close-modal").addEventListener("click", function () {
//         document.getElementById("modal-area").style.display = "none"; // 모달 닫기
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    // // 하루의 밀리초 값
    // const oneDay = 24 * 60 * 60 * 1000;

    // // 현재 시간
    // const now = new Date().getTime();

    // // localStorage에 저장된 hideModalTime을 확인
    // const hideModalTime = localStorage.getItem("hideModalTime");

    // // 하루가 지났는지 확인하는 함수
    // function isOneDayPassed() {
    //     if (!hideModalTime) return false; // 저장된 시간이 없으면 하루가 지난 것이 아님
    //     return now - hideModalTime > oneDay; // 현재 시간과 저장된 시간의 차이가 하루를 넘었는지 확인
    // }

    // // 모달 표시 여부 결정
    // if (localStorage.getItem("hideModal") !== "true" || isOneDayPassed()) {
    //     document.getElementById("modal-area").style.display = "block";

    //     // 하루가 지났으면 localStorage를 초기화 (모달을 다시 보이게 하기 위해)
    //     if (isOneDayPassed()) {
    //         localStorage.removeItem("hideModal");
    //         localStorage.removeItem("hideModalTime");
    //     }
    // } else {
    //     document.getElementById("modal-area").style.display = "none";
    // }

    // // "다시 보지 않기" 버튼 클릭 시
    // document.getElementById("dont-show-again").addEventListener("click", function () {
    //     localStorage.setItem("hideModal", "true"); // 다시 보지 않기 설정
    //     localStorage.setItem("hideModalTime", now); // 현재 시간 저장
    //     document.getElementById("modal-area").style.display = "none"; // 모달 닫기
    // });

    // "닫기" 버튼 클릭 시
    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("modal-area").style.display = "none"; // 모달 닫기
    });
});




