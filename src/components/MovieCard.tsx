import { Dimensions, Text, TouchableWithoutFeedback, View, Image } from 'react-native';

const {width, height} = Dimensions.get('window');

export const MovieCard = (props: {
    item: number
    handleClick: () => void
}) => {
    const {item, handleClick} = props;
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image
                src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpenji.co%2Fwp-content%2Fuploads%2F2023%2F01%2FUntitled-design-59.jpg&f=1&nofb=1&ipt=ac5e82681a71372e5e55a52a553c483230ac50750a92fbd5e9a8c1baefaa436f&ipo=images'}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    );
}