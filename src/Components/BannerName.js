import React from "react";

const BannerName = ({name,discount,more}) => {
    return(
        <>
            <div className="bannerContent">
                <h3>Hello {name}</h3>
                <p> Get Discount on Every Purchase up to<span> ${discount}</span>
                </p>
                <a href={more}> More Info </a>
            </div>
        </>
    )
}

export default BannerName