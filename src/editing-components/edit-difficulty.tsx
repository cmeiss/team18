import React from "react";

interface diffProp {
    diff: number;
    setDifficulty: (newDiff: number) => void;
}
export function EditDifficulty({ diff, setDifficulty }: diffProp) {
    //update functions
    function updateDifficulty(newDiff: number) {
        setDifficulty(newDiff);
    }

    return (
        <span className="fs-8" style={{ fontWeight: "bold" }}>
            Choose Difficulty: <br></br>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <span
                        key={index}
                        style={{
                            color: index <= diff ? "orange" : "gray",
                            cursor: "pointer"
                        }}
                        onClick={() => updateDifficulty(index)}
                    >
                        &#9733;
                    </span>
                );
            })}
        </span>
    );
}
