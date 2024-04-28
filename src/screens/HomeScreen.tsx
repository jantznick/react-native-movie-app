import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useEffect, useState } from 'react';

import { styles } from '../theme';
import { TrendingMovies } from '../components/TrendingMovies';
import { MovieList } from '../components/MovieList';
import { getMovieData, endpoints } from '../api/moviedb';

const ios = Platform.OS == 'ios';

export const HomeScreen = () => {
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])
    const [loading, setLoading] = useState({
        'trending': true,
        'upcoming': true,
        'topRated': true
    })

    useEffect(() => {
        if (loading.trending) {
            const movieData = getMovieData('trending');

            movieData.then(x => {
                if (x && x.results) {
                    setTrending(x.results);
                    setLoading({
                        ...loading,
                        'trending': false
                    });
                }
            })
        }
        if (loading.upcoming) {
            const movieData = getMovieData('upcoming');

            movieData.then(x => {
                if (x && x.results) {
                    setUpcoming(x.results);
                    setLoading({
                        ...loading,
                        'upcoming': false
                    });
                }
            })
        }
        if (loading.topRated) {
            const movieData = getMovieData('topRated');

            movieData.then(x => {
                if (x && x.results) {
                    setTopRated(x.results);
                    setLoading({
                        ...loading,
                        'topRated': false
                    });
                }
            })
        }
    })

	return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className={ios ? "-mb-3" : "mb-3"}>
                <StatusBar style="light" />
                <View className='flex-row justify-between items-center mx-4'>
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className='text-white text-3xl font-bold'><Text className='text-primary-500'>M</Text>ovies</Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}
            >

                {trending.length > 0 && <TrendingMovies title="Trending Movies" data={trending} />}

                {upcoming.length > 0 && <TrendingMovies title='Upcoming Movies' data={upcoming} />}

                {topRated.length > 0 && <TrendingMovies title='Top Rated Movies' data={topRated} />}
            </ScrollView>
        </View>
	);
}
