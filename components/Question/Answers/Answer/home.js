export default function Answer(props) {
    const { icon, answerQuestion, answerText, answerValue } = props;
    return (
        <li>
            <button
                type="option"
                onClick={() => answerQuestion(answerValue)}
            >
                <span>{icon}</span>
                {`${answerValue}. ${answerText}`}
            </button>
        </li>
    );
}
