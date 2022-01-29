const theThings = [
    "Monitor",
    "Desk",
    "Chair",
    "Mic",
    "Keyboard",
    "Lamp",
    "Hassio",
    "Espresso Machine",
];

export default function Uses() {
    return (
        <>
            <h1>Uses</h1>
            <p>
                These are all the things I use on a daily bassis to be the best programer that I can
                be !!!
            </p>
            <img
                src="https://media.giphy.com/media/W6Hsw9rjcXeFi/giphy.gif"
                alt="Karate Kid painting fence "
            />
            <ul>
                {theThings.map((thing) => (
                    <li key={thing}>{thing}</li>
                ))}
            </ul>
        </>
    );
}
