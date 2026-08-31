import React from "react";
import chapters from "../data/chapters";
import ChapterCard from "./ChapterCard";

function ChapterHub({ onBack, onSlectChapter }) {
    return (
        <main>
            <header>
                <button onClick={onBack}>Back to Home</button>
                <p>SUZHOU 2035 · CITY ARCHIVE</p>
            </header>

            <section>
                <p>Your decisions shapes the city</p>
                <h1>Choose a Chapter</h1>
         

            <div>
                {chapters.map((chapter) => (
                    <ChapterCard
                        Key={chapter.id}
                        chapter={chapter}
                        onselect={onSlectChapter}
                    />
                ))}
                </div>
                   </section>
        </main>
    )
}

export default ChapterHub;