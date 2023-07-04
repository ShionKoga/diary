import {useEffect, useState} from 'react'
import DiaryRepo from '../repo/DiaryRepo'
import {useNavigate} from 'react-router-dom'
import AuthRepo from '../repo/AuthRepo'

export default function Diaries() {
    const navigate = useNavigate()
    const [diaries, setDiaries] = useState([])

    useEffect(() => {
        const diaryRepo = new DiaryRepo()
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

    return (
        <>
            <button onClick={logout}>
                Logout
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