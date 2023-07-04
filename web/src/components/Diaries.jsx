import {useEffect, useState} from 'react'
import DiaryRepo from '../repo/DiaryRepo'
import {useNavigate} from 'react-router-dom'
import AuthRepo from '../repo/AuthRepo'

export default function Diaries() {
    const navigate = useNavigate()
    const diaryRepo = new DiaryRepo()
    const [diaries, setDiaries] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        diaryRepo.fetchDiaries()
            .then(diary => {
                setDiaries(diary)
            })
    }, [])

    const logout = () => {
        const authRepo = new AuthRepo()
        authRepo.setToken(null)
        navigate('/')
    }

    const postNewDiary = () => {
        diaryRepo.postDiary(title, body)
            .then(diary => {
                setDiaries(diary)
                setTitle('')
                setBody('')
            })
    }

    return (
        <>
            <div>
                <button onClick={logout}>
                    Logout
                </button>
            </div>

            <label>
                Title
                <input type="text" onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>
                Body
                <input type="text" onChange={e => setBody(e.target.value)}/>
            </label>
            <button onClick={postNewDiary}>
                Post new Diary
            </button>

            {diaries.map(diary => (
                <>
                    <div key={diary.id}>title: {diary.title}</div>
                    <div key={diary.id}>body: {diary.body}</div>
                </>
            ))}
        </>
    )
}