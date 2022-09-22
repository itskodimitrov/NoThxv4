console.log("haha");

const navSlide = () => {
    const mobile = document.querySelector('.mobile_Icon');
    const nav = document.querySelector('.nav_Links');
    const follow = document.querySelector('.follow_Count');

    mobile.addEventListener('click', () => {
        nav.classList.toggle('ul_Active');
        follow.classList.toggle('none');
    });

}

const contactForm = () => {
    const btn = document.getElementById('allvideo');
    const visible = document.querySelector('.nqmame');
    const close = document.querySelector('.sth');


    btn.addEventListener('click', () => {
        visible.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible.classList.toggle('nqmame');
     });
}

const videointegration = () => {
    const btn = document.getElementById('integration');
    const visible1 = document.querySelector('.nqmame1');
    const close = document.querySelector('.sth');


    btn.addEventListener('click', () => {
        visible1.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible1.classList.toggle('nqmame1');
     });
}

const instaPost = () => {
    const postBtn = document.getElementById('instapost');
    const visible2 = document.querySelector('.nqmame2');
    const close = document.querySelector('.sth');

    postBtn.addEventListener('click', () => {
        visible2.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible2.classList.toggle('nqmame2');
     });

}

const instaGiveaway = () => {
    const giveawayBtn = document.getElementById('giveaway');
    const visible3 = document.querySelector('.nqmame3');
    const close = document.querySelector('.sth');

    giveawayBtn.addEventListener('click', () => {
        visible3.classList.toggle('contact_Form');
    });

    close.addEventListener('click', () => {
        visible3.classList.toggle('nqmame3');
     });
}

const instaIGTV = () => {
    const igtv_Btn = document.getElementById('igtv');
    const visible4 = document.querySelector('.nqmame4');
    const close = document.querySelector('.sth');

    igtv_Btn.addEventListener('click', () => {
        visible4.classList.toggle('contact_Form');
    });
    
    close.addEventListener('click', () => {
        visible4.classList.toggle('nqmame4');
    });

}

const instaReels = () => {
    const reels_Btn = document.getElementById('reels');
    const visible5 = document.querySelector('.nqmame5');
    const close = document.querySelector('.sth');

    reels_Btn.addEventListener('click', () => {
        visible5.classList.toggle('contact_Form');
    });
    
    close.addEventListener('click', () => {
        visible5.classList.toggle('nqmame5');
    });

}

const instaStory = () => {
    const story_Btn = document.getElementById('story');
    const visible6 = document.querySelector('.nqmame6');
    const close = document.querySelector('.sth');

    story_Btn.addEventListener('click', () => {
        visible6.classList.toggle('contact_Form');
    });
    
    close.addEventListener('click', () => {
        visible6.classList.toggle('nqmame6');
    });
}

const tiktokVideo = () => {
    const tiktok_Btn = document.getElementById('tiktok');
    const visible7 = document.querySelector('.nqmame7');
    const close = document.querySelector('.sth');

    tiktok_Btn.addEventListener('click', () => {
        visible7.classList.toggle('contact_Form');
    });
    
    close.addEventListener('click', () => {
        visible7.classList.toggle('nqmame7');
    });
}




// Call functions
contactForm();

videointegration();

instaPost();

instaGiveaway();

instaIGTV();

instaReels();

instaStory();

tiktokVideo();

navSlide();