import { Text, View } from 'react-native';

// interface movieData {
//     title: string,
//     imageUrl: string
// }

export const MovieList: React.FC<{
    title: string,
    data: number[]
}> = ({
    title,
    data
}) => {

    return (
        <View >
            <Text>Movie List</Text>
        </View>
    );
}