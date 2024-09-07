import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    paddingTop: StatusBar.currentHeight,
  },
  topBar: {
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    borderColor: '#ddd',
  },
  galleryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  categories: {
    paddingTop: 11,
    paddingLeft: 24,
    flexDirection: 'row',
  },
  categoryBox: {
    height: 28,
    width: 89,
    borderWidth: 0.7,
    borderColor: '#2c2c2e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  categoryTitle: {
    fontWeight: '500',
  },
  image: {
    width: 292,
    height: 411,
    borderRadius: 15,
  },
  carouselContainer: {
    paddingLeft: 24,
    paddingTop: 35,
    paddingBottom: 50,
  },
  artistList: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    borderRadius: 15,
  },
  artistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingTop: 25,
  },
  artistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  artistTitle: {
    fontSize: 17,
    fontWeight: '500',
    paddingBottom: 5,
  },
  artistSkill: {
    fontSize: 14,
    color: '#A7A7A7',
  },
  checkButton: {
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#007AFF',
  },
});

export default theme;
