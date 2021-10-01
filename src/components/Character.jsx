import React from 'react'
import './character.css'
const Character = ({ data, search }) => {
    return (
        <div className="image">
            {data.filter(data => {
                if (search === "")
                    return data
                else if (data.name.toLowerCase().includes(search.toLowerCase()))
                    return data
                return false
            }).map(el => (
                <a
                    key={el.char_id}
                    href={`https://en.wikipedia.org/wiki/${el.name}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <figure className="card">
                    <img className="characterImage" src={el.img} alt={el.name} />
                    <figcaption>
                        <p><strong>Name</strong>: {el.name}</p>
                        <p><strong>DOB</strong>: {el.birthday}</p>
                        <p><strong>Role</strong>: {`${el.occupation}.`}</p>
                        <p><strong>Status</strong>: {el.status}</p>
                        <p><strong>Nickname</strong>: {el.nickname}</p>
                        <p><strong>Portrayed by</strong>: {el.portrayed}</p>
                        <p><strong>Category</strong>: {el.category}</p>
                        <p><strong>Appearance</strong>: {`${el.appearance}.`}</p>
                    </figcaption>
                    </figure>
                </a>
            ))}
        </div>
    )
}

export default Character
