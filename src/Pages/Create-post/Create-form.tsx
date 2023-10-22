import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../Config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required('Dodaj tytuł'),
        description: yup.string().required('Dodaj opis'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, 'posts');

    const onSubmit = async (data: IFormInputs) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        });

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-center justify-center gap-2 w-1/2 items-center'>
            <input placeholder="Tytuł..." {...register('title')} className='text-white border-2 border-violet-700 w-1/2 text-center rounded-md bg-zinc-800'/>
            {errors.title && 
                <p className='text-red-500'>{errors.title.message}</p>
            }
            <textarea placeholder="Opis..." {...register('description')} className='text-white border-2 border-violet-700 w-full h-20 text-center resize-none rounded-md bg-zinc-800'/>
            {errors.description && 
                <p className='text-red-500'>{errors.description.message}</p>
            }
            <input type='submit' value={'Post'} className='text-white bg-violet-700 rounded-full p-2.5 text-center font-bold w-1/2 cursor-pointer focus:bg-violet-800'/>
        </form>
    );
};