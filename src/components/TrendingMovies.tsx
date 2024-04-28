import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { MovieCard } from './MovieCard';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export const TrendingMovies = ({data, title}) => {
    const navigation = useNavigation();

    const handleMovieClick = () => {
        // navigation.navigate('Movie', item)
    }

    return (
        <View className='mb-8'>
            <Text className='text-white text-xl mx-4 mt-5 mb-2'>{title}</Text>
            <Carousel
                data={data}
                renderItem={({item}) => <MovieCard handleClick={handleMovieClick} item={item} />}
                firstItem={1}
                loop={true}
                inactiveSlideOpacity={0.20}
                sliderWidth={width}
                itemWidth={width*0.62}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    );
}
