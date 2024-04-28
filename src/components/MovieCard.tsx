import React from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View, Image } from 'react-native';

const {width, height} = Dimensions.get('window');

interface trendingMovieType {
    "backdrop_path": string,
    "id": number,
    "original_title": string,
    "overview": string,
    "poster_path": string,
    "media_type": string,
    "adult": boolean,
    "title": string,
    "original_language": string,
    "genre_ids": number[],
    "popularity": number,
    "release_date": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}

export const MovieCard = ({item, handleClick}) => {
    const {poster_path, title} = item;

    const handleMovieSelect = () => {
        console.log(item);
        handleClick()
    }

    return (
        <TouchableWithoutFeedback onPress={handleMovieSelect}>
            <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    );
}