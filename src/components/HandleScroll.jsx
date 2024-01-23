import React, { useEffect, useState } from "react";

const HandleScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    // eslint-disable-next-line
function logit() {
    setScrollY(window.scrollY);
}

useEffect(() => {


return () => {
    // window.removeEventListener("scroll", ()=> console.log(window.scrollY));
    window.addEventListener('scroll',()=> console.log(window.scrollY))
};


}, []);
// window.onscroll = () => {
//     console.log("scrolled");
// }


    return (
        <div>
            <h1>Handle Scroll</h1>
            <div className="fixed-center" style={{ position: "fixed", backgroundColor: "black" }}>
                Scroll position: {scrollY}px
            </div>
        </div>
    );
};

export default HandleScroll;
