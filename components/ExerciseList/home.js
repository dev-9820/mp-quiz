export default function ExerciseList({ exercises, func }) {
    return (
        <>
            <h2 className="exer">Pick an Exercise</h2>
            <ul>
                {exercises.map((exercise) => (
                    <li className="hover:text-blue-900" key={exercise.id}>
                        <button onClick={() => func(exercise.id)}>
                            {exercise.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
