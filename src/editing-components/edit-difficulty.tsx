import React, { useState } from "react";

export function EditDifficulty(): JSX.Element {
    const [difficulty, setDifficulty] = useState(0);
    //update functions
    function updateDifficulty(newDiff: number) {
        setDifficulty(newDiff);
    }

    return (
        <span className="fs-8">
            Difficulty: <br></br>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <span
                        key={index}
                        style={{
                            color: index <= difficulty ? "orange" : "gray",
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
