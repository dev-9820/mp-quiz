import App from '../../pages/_app';
import Register from '../../pages/comp/Register';
import auth from '../../pages/firebase'
import { Auth } from "firebase/auth";
import { UserProfile, updateProfile } from 'firebase/auth';
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { userInfo } from 'os';

export default function ExerciseList({ exercises, func }) {

    const router = useRouter();
    function signout(){
        Cookies.remove("loggedin");
        router.push('/');
    }
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
                
                <b>{}</b>
                <button onClick={signout} type="signout">SIGN OUT </button>
                
            </ul>
        </>
    );
}
