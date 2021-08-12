import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
const HomePage = () => {
    const [char, setChar] = useState([]);
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0)
    const [buttonDis, setButtonDis] = useState(true)
    const [nbuttonDis, setNButtonDis] = useState(false)
    useEffect(() => {
        axios
            .get(`https://www.breakingbadapi.com/api/characters?limit=4&offset=${offset}`)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                let charArray = data.map((el) => {
                    return el;
                });
                setChar(charArray);
            });
    }, [offset]);
    const searchField = (e) => {
        setSearch(e.target.value);
        axios
            .get(`https://www.breakingbadapi.com/api/characters?name=${search}`)
            .then((res) => {
                let dataArray = res.data.map((el) => {
                    return el;
                });
                setData(dataArray);
            });
    };
    const nexthandle = () => {
        setOffset(offset + 4)
        setButtonDis(false)
        if (offset === 56)
            setNButtonDis(true)


    }
    const prevHandle = () => {
        setOffset(offset - 4)
        if (offset === 4)
            setButtonDis(true)

    }
    return (
        <>
            <div className="input-group md-3 justify-content-center">
                <label>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" value={search} onChange={searchField} />
                </label>
            </div>

            {search === "" ? (
                <div className="container">
                    <div className="button">
                        <button onClick={() => prevHandle()} disabled={buttonDis} type="button" className="btn btn-primary">Previous</button>
                        <button onClick={() => nexthandle()} disabled={nbuttonDis} type="button" className="btn btn-primary">Next</button>

                        
                    </div>

                    <div className="imageContainer">
                        {char.map((el) => (
                            <a
                                key={el.char_id}
                                href={`https://en.wikipedia.org/wiki/${el.name}`}
                                target="_blank"
                                rel="noreferrer"
                            >

                                <figure className="card">
                                    <img src={el.img} className="card-img-top" alt={el.name} />
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
                </div>
            ) : (
                <div className="searchContainer">
                    {data.map((el) => (
                        <a
                            key={el.char_id}
                            href={`https://en.wikipedia.org/wiki/${el.name}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <figure>
                                <img src={el.img} alt={el.name} />
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
            )}
        </>
    );
};
export default HomePage;
