export default function ExerciseList({ exercises, func }) {
    return (
        <>
            <h2 >Pick an Exercise</h2>
            <ul>
                {exercises.map((exercise) => (
                    <li type="list" key={exercise.id}>
                        <button onClick={() => func(exercise.id)}>
                            {exercise.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
