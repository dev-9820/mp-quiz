import Head from "next/head";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Question from "@/components/Question/home";
import ExerciseList from "@/components/ExerciseList/home";

export function getServerSideProps() {
    const exercises = [
        { className:"exercise", id: 0, title: "Data Warehousing & Mining" },
        { className:"exercise",  id: 1, title: "Artificial Intelligence" },
        { className:"exercise",  id: 2, title: "Machine Learning" },
    ];

    return {
        props: {
            exercises,
        },
    };
}

export function getQuestions(exerciseId) {
    const questions = [
        {
            id: 0,
            exerciseId: 0,
            question:
                "Data warehousing is a collection of what??",
            answers: ['tools and techniques', 'idk any wrong answers', 'tick the first one'],
            correctAnswer: "a",
        },
        {
            id: 2,
            exerciseId: 0,
            question:
                "pick the type of data that CANNOT be mined",
            answers: [
                "Database Data",
                "Data warehouse",
                "Transactional Data",
                "Some Other Type of Data"
            ],
            correctAnswer: "d",
        },
        {
            id: 3,
            exerciseId: 0,
            question:
                "how how is data stored in Data Warehousing",
            answers: ["stored periodically", "analyzed regularly"],
            correctAnswer: "a",
        },
        {
            id: 4,
            exerciseId: 1,
            question:
                "below were nominated for Best Male R&B Vocal Performance in 2007 Grammy Award, except ...",
            answers: [
                "John Legend",
                "Justin Timberlake",
                "Luther Vandross",
                "Lionel Richie",
                "Prince",
            ],
            correctAnswer: "b",
        },
        {
            id: 6,
            exerciseId: 1,
            question:
                "... won the category of Best New artist in 2014 Grammy Award",
            answers: [
                "Kacey Musgraves",
                "Ed Sheeran",
                "Macklemore & Ryan Lewis",
                "James Blake",
                "Kendrick Lamar",
            ],
            correctAnswer: "c",
        },
    ];

    return questions.filter((items) => items.exerciseId === exerciseId);
}

export default function Home({ exercises }) {
    const initialState = {
        isExerciseShown: false,
        exerciseId: null,
        questions: [],
        isExerciseDone: false,
        score: 0,
    };

    const [state, setState] = useState(initialState);
    const { isExerciseShown, questions, isExerciseDone, score } = state;

    const showExercise = (id) => {
        setState({
            ...state,
            exerciseId: id,
            questions: getQuestions(id),
            isExerciseShown: true,
        });
    };
    const hideExercise = () => {
        setState(initialState);
    };
    const finishTest = (score) => {
        setState({
            ...state,
            isExerciseDone: true,
            score,
        });
    };

    return (
        <>
            <Head>
                <title>Quiz</title>
                <meta name="description" content="Quiz app in next js" />
            </Head>
            <div className="w-1/2 m-auto mt-[120px] bg-gray-200 p-6 rounded-md shadow-2xl">
                <main className="">
                    {!isExerciseShown ? (
                        <ExerciseList
                            exercises={exercises}
                            func={showExercise}
                        />
                    ) : isExerciseDone ? (
                        <div>
                            <p className="my-4">
                                You answered {score}/{questions.length}{" "}
                                correctly!{" "}
                            </p>

                            <button
                                className="flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white"
                                onClick={hideExercise}
                            >
                                <span>
                                    <FaArrowLeft />
                                </span>
                                <span>Back</span>
                            </button>
                        </div>
                    ) : (
                        <Question
                            questions={questions}
                            hideExercise={hideExercise}
                            finishTest={finishTest}
                        />
                    )}
                </main>
            </div>
        </>
    );
}
