import React from "react";
import Button from "./button";
import ButtonSecondary from "./buttonSecondary";

function ButtonGroup({
    href1 = null,
    href2 = null,
    sm = false,
    text1,
    text2,
    width = "max",
}) {
    return (
        <div
            className={`flex justify-between flex-col md:flex-row gap-4 lg:gap-5 mt-4 ${width}`}
        >
            <Button sm={sm} href={href1}>
                {text1}
            </Button>
            <ButtonSecondary sm={sm} href={href2}>
                {text2}
            </ButtonSecondary>
        </div>
    );
}

export default ButtonGroup;
