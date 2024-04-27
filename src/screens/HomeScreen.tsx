import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useState } from 'react';

import { styles } from '../theme';
import { TrendingMovies } from '../components/TrendingMovies';
import { MovieList } from '../components/MovieList';

const ios = Platform.OS == 'ios';

export const HomeScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3])
    const [upcoming, setUpcoming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])

    console.log(process.env)
    // const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    // const options = {
    // method: 'GET',
    // headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.TMDBTOKEN}`
    // }
    // };

    // fetch(url, options)
    // .then(res => res.json())
    // .then(json => console.log(json))
    // .catch(err => console.error('error:' + err));

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

                <TrendingMovies data={trending} />

                <MovieList title='Upcoming Movies' data={upcoming} />

                <MovieList title='Top Rated Movies' data={topRated} />
            </ScrollView>
        </View>
	);
}
