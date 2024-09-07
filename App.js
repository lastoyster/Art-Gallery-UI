import { useRef } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import theme from './AppStyle';
import { categories, cards, artists } from './data';

function App() {
  const _renderCategory = ({ item }) => {
    return (
      <View style={theme.categoryBox}>
        <Text style={theme.categoryTitle}>{item.name}</Text>
      </View>
    );
  };

  // For the carousel to work
  const ref = useRef(null);

  const _renderImage = ({ item }) => {
    return (
      <View style={{ width: 300, height: 415 }}>
        <ImageBackground
          source={item.image}
          style={theme.image}
          imageStyle={{ borderRadius: 15 }}
          resizeMode='cover'
        ></ImageBackground>
      </View>
    );
  };

  const _renderArtist = ({ item }) => {
    return (
      <View style={theme.artistContainer}>
        <View style={theme.artistInfo}>
          <Image source={item.image} style={theme.artistImage} />
          <View>
            <Text style={theme.artistTitle}>{item.name}</Text>
            <Text style={theme.artistSkill}>{item.skills}</Text>
          </View>
        </View>
        <TouchableOpacity style={theme.checkButton}>
          <Text style={theme.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.scrollView}>
        <View style={theme.topBar}>
          <View>
            <Text style={theme.galleryTitle}>ARTSY</Text>
          </View>
          <Image
            source={require('./assets/face.jpg')}
            style={theme.avatar}
            resizeMode='cover'
          />
        </View>

        <FlatList
          data={categories}
          renderItem={_renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={theme.categories}
        />

        <View style={theme.carouselContainer}>
          <Carousel
            ref={ref}
            data={cards}
            renderItem={_renderImage}
            sliderWidth={350}
            itemWidth={350}
            layout='stack'
          />
        </View>

        <FlatList
          data={artists}
          renderItem={_renderArtist}
          keyExtractor={(item) => item.id}
          style={theme.artistList}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
