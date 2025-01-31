/* script.js */
/* 이 JavaScript 파일은 민지 포트폴리오 페이지의 동적인 기능을 구현합니다. */
/* 작성자: 민지 */


    document.addEventListener('scroll', function () {
        const introduction = document.getElementById('introduction');
        const introParagraphs = introduction.querySelectorAll('p');

        introParagraphs.forEach(p => {
            const rect = p.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                p.classList.add('visible');
            }
        });
    });
