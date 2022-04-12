import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  LogBox,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDetails, fetchImages} from '../api/helper';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import StarRating from 'react-native-easy-rating';
const {height, width} = Dimensions.get('window');
import {saveData} from '../redux/actions/action';
import {connect} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import TabBar from './components/TabBar';
import UserScreen from './UserScreen';

const Dashboard = ({navigation, saveData}) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setrefreshing] = useState(false);
  const [value, setValue] = useState();
  const isFocused = useIsFocused();
  const [tabId, setTabId] = useState(1);
  const [searchData, setSearchData] = useState();
  const [listData, setData] = useState([]);
  const [fullData, setfullData] = useState([]);
  const [listImages, setImages] = useState([]);
  const [Empty, setEmpty] = useState(false);

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetchResDetails();
    getImages();
  }, [isFocused]);

  const fetchResDetails = async () => {
    setLoading(true);
    const packages = await fetchDetails();
    if (packages !== '') {
      setData(packages);
      setSearchData(packages);
      setLoading(false);
    }
  };

  const getImages = async () => {
    const img = await fetchImages();
    if (img !== '') {
      setImages(img);
    }
  };

  const handleTab = id => {
    if (id === '1') {
      setTabId(1);
    } else {
      setTabId(2);
    }
  };

  useEffect(() => {
    if (listImages.length > 0) {
      const list = [...listData];
      const images = [...listImages];

      const newData = [];

      list.map((item, index) => {
        const num = parseInt((index + 1) / (images.length - 1));
        newData.push({
          Brand: item.Brand,
          Country: item.Country,
          Stars: item.Stars,
          Style: item.Style,
          Variety: item.Variety,
          image: images[num].Image,
          select: false,
        });
      });
      setfullData(newData);
      setSearchData(newData);
      saveData(newData);
    }
  }, [listImages]);

  const godetails = index => {
    navigation.navigate('DetailsScreen', {
      index: index,
    });
  };

  const Selection = index => {
    const data = [...fullData];
    if (data !== '' && data !== undefined && data !== null) {
      console.log('data[index]', data[index]);
      if (data[index] !== undefined) {
        data[index].select = !data[index].select;
        setfullData(data);
        setSearchData(data);
        saveData(data);
      }
    }
  };

  const onSearch = text => {
    if (text !== '') {
      const newData = fullData.filter(item => {
        const itemData = `${item.Brand.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      if (newData.length > 0) {
        setSearchData(newData);
        setEmpty(false);
        setValue(text);
      } else {
        setSearchData(newData);
        setEmpty(true);
        setValue(text);
      }
    } else {
      setSearchData(fullData);
      setValue('');
      setEmpty(false);
    }
  };

  const onCancel = () => {
    setSearchData(fullData);
    setValue('');
    setEmpty(false);
  };
  const renderItem = ({item, index}) => (
    <View style={styles.boxContainer}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => godetails(index)}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.itemPhoto}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.name}>
          <Text style={styles.itemText}>{item?.Brand}</Text>
          {item?.Stars !== undefined && item?.Stars !== null ? (
            <StarRating
              rating={item?.Stars}
              max={5}
              iconWidth={width * 0.03}
              iconHeight={width * 0.03}
            />
          ) : null}
        </View>
        <View style={styles.descStyle}>
          <Text numberOfLines={2} style={styles.descriptionText}>
            {item?.Variety}
          </Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.itemText2}>{item?.Country}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Selection(index)}>
          <Text style={styles.Text}>
            {item.select === true ? 'Selected' : 'Select'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <SearchBar
          placeholder="Search by brand"
          onChangeText={onSearch}
          onCancel={() => onCancel()}
          value={value}
          icon={{type: 'font-awesome', name: 'search'}}
          clearIcon
        />
      </View>

      <TabBar onTabPress={handleTab} />

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {fullData ? (
        <View style={styles.listContainer}>
          {Empty ? (
            <View>
              <Text>No Data...</Text>
            </View>
          ) : tabId === 1 ? (
            <FlatList
              numColumns={2}
              data={searchData}
              extraData={listData}
              initialNumToRender={5}
              renderItem={(item, index) => renderItem(item, index)}
              showsHorizontalScrollIndicator={false}
            />
          ) : tabId === 2 ? (
            <UserScreen />
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default connect(null, {
  saveData,
})(Dashboard);
