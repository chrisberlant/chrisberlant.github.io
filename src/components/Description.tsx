import Typewriter from "typewriter-effect";

const descriptionString =
    "I'm a <span class='text-full-stack'>Full-stack</span>, more <span class='text-front-end'>Front-end</span> oriented <span class='text-front-end'>React</span> developer.";

export default function Description() {
    return (
        <Typewriter
            options={{
                delay: 50,
            }}
            onInit={(typewriter) => {
                typewriter.typeString(descriptionString).start();
            }}
        />
    );
}
