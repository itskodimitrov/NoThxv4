console.log("haha");

const navSlide3 = () => {
    const mobile = document.querySelector('.mobile_Icon');
    const nav = document.querySelector('.nav_Links');
    const follow = document.querySelector('.follow_Count');

    mobile.addEventListener('click', () => {
        nav.classList.toggle('ul_Active');
        follow.classList.toggle('none');
    });

}

navSlide3();