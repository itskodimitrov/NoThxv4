console.log("haha");

const navSlide1 = () => {
    const mobile = document.querySelector('.mobile_Icon');
    const nav = document.querySelector('.nav_Links');
    const follow = document.querySelector('.follow_Count');

    mobile.addEventListener('click', () => {
        nav.classList.toggle('ul_Active');
        follow.classList.toggle('none');
    });

}

const contactForm1 = () => {
    const btn = document.getElementById('videoall1');
    const visible = document.querySelector('.nqmame');
    const close = document.querySelector('.sth');


    btn.addEventListener('click', () => {
        visible.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible.classList.toggle('nqmame');
     });
}

const videointegration1 = () => {
    const btn = document.getElementById('integration1');
    const visible1 = document.querySelector('.nqmame1');
    const close = document.querySelector('.sth');


    btn.addEventListener('click', () => {
        visible1.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible1.classList.toggle('nqmame1');
     });
}

const instaPost1 = () => {
    const postBtn = document.getElementById('instapost1');
    const visible2 = document.querySelector('.nqmame2');
    const close = document.querySelector('.sth');

    postBtn.addEventListener('click', () => {
        visible2.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible2.classList.toggle('nqmame2');
     });

}


navSlide1();

instaPost1();

contactForm1();

videointegration1();


