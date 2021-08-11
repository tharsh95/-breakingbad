import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";
const HomePage = () => {
    const [char, setChar] = useState([]);
    const [search, setSearch] = useState("");

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://www.breakingbadapi.com/api/characters`)
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                let charArray = data.map((el) => {
                    return el;
                });
                setChar(charArray);
            });
    }, []);
    const searchField = (e) => {
        setSearch(e.target.value);
        axios
            .get(`https://www.breakingbadapi.com/api/characters?name=${search}`)
            .then((res) => {
                let dataArray = res.data.map((el) => {
                    return el;
                });
                setData(dataArray);
                // console.log(data)
            });
    };
    return (
        <>
            <div id="main">
                
                <input
                    className="center"
                    type="text"
                    value={search}
                    placeholder="Search Characters"
                    onChange={searchField}
                />
            </div>
            {search === "" ? (
                <div className="imageContainer">
                    {char.map((el) => (
                        <a
                            key={el.char_id}
                            href={`https://en.wikipedia.org/wiki/${el.name}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {" "}
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
                                    <p>Name: {el.name}</p>
                                    <p>DOB: {el.birthday}</p>
                                    <p>Role: {el.occupation}</p>
                                    <p>Status: {el.status}</p>
                                    <p>Nickname: {el.nickname}</p>
                                    <p>Portrayed by: {el.portrayed}</p>
                                    <p>Category: {el.category}</p>
                                    <p>Appearance: {el.appearance}</p>
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
