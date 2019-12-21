import React, {useState} from 'react'
import {IoMdArrowDropright} from 'react-icons/io'


export const Comments = () => {

    const [comment, setValue] = useState({
        "content": ''
    })
    const [comments, setComment] = useState([
        {
            "content": "",
        },
    ])

    const handleComment = event =>{
        if(event.key === 'Enter'){
            setComment([...comments, comment])
            setValue({"content":''})
        }
    }


    return (
        <div className="Comments">
            <h4>Comments</h4>
            <div className="Comments__container">
                {
                    comments.map((comment,index) => <p key={index}>{comment.content}</p> )
                }
            </div>
            <div className="Comments__input">
                <input 
                    value={comment.content}
                    onChange={(e)=>setValue({"content": e.target.value})}
                    type="text" 
                    placeholder="Enter Comment..." 
                    name="comment"
                    onKeyDown={handleComment}
                />
                <IoMdArrowDropright style={{fontSize: "30px"}} onClick={()=>{
                    setComment([...comments, comment])
                    setValue({"content":''})
                    }} />
            </div>
        </div>
    )
}

export default Comments