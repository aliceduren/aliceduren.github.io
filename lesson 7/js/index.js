
const images=document.querySelectorAll("[data-src]");//grab all the images

function preloadImage(img) {
    const src=img.getAttribute("data-src");
    if(!src) {return;}
    img.src=src
    
}//set source and change image source

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px",
};//function that help keep images unloaded

const imgObserver = new IntersectionObserver ((entries,imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {return;}
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);// function, things loadd

images.forEach (image => {
    imgObserver.observe(image);
})//observe each image

