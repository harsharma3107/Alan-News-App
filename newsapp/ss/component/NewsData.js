import React, { useEffect, useState } from 'react';
import GetNews from '../service/GetNews';
import moment from 'moment';
import alanBtn from "@alan-ai/alan-sdk-web";

const NewsData = () =>{

    const alanKey = "549c9ef251798d7dbc64e2ebfd14cff82e956eca572e1d8b807a3e2338fdd0dc/stage";

    const [newsData, setnewsData] = useState([]);
    const [option, selectOption] = useState("");

    const getAllNews = async () =>{
        let data = await GetNews(option);
        setnewsData(data.data.articles);
    }

    const selectCategory = (event) =>{
        selectOption(event.target.value);
    }

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
                selectOption(commandData.data);
            }
        });
    }, []);

    useEffect(() =>{
        getAllNews();
    }, [option]);

    return(
        <div className='main'>
            <h1>Voice News</h1>
            
            <div className='select'>
                <label className='lable'>Select the category of news:</label>

                <select 
                    name="cars" id="cars" 
                    className='select-box'
                    onChange={selectCategory}
                    value = {option}
                    >

                    <option value="general">General</option>
                    <option value="health">Health</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                </select>
            </div>

            <div className='grid_main'>
            {newsData?.map((news) => {
                
                return (
                    <div className='grid_child'>
                        <img src={news?.urlToImage} className = "news_img"/>
                        <p className='news_title'>{news?.title}</p>
                        <p className='news_content'>{news?.content}</p>
                        <div className='authdate'>
                            <p className='news_author'>Author: {news?.author ? news?.author : "Author name is not published"}</p>
                            <p> Date : {moment(news?.publishedAt).format('LL')}</p>
                        </div>
                        <a href={news?.url} target = " ">Read More...</a>
                    </div>
                );
            })};
            </div>
        </div>
    );
}

export default NewsData;