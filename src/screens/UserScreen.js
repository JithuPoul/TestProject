import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import StarRating from 'react-native-easy-rating';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';

const UserScreen = ({navigation, route, data}) => {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);

  useEffect(() => {
    const items = [];
    data.map((item, index) => {
      if (item.select === true) {
        items.push(item);
      }
    });
    setData(items);
    setLoading(false);
  }, []);


  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={styles.nameView}>
        <Text style={styles.itemText}>Name : Jithu Poul</Text>
        <Text style={styles.itemText}>Age : 25</Text>
      </View>
      {listData.length > 0 ? (
        <FlatList
          data={listData}
          extraData={listData}
          initialNumToRender={5}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.listContainer2}>
                <View style={styles.boxContainer}>
                <View style={styles.item}>
                  <TouchableOpacity>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={styles.itemPhoto2}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <View style={styles.name}>
                    <Text style={styles.itemText}>{item.Brand}</Text>
                    {item.Stars !== undefined && item.Stars !== null ? (
                      <StarRating
                        rating={item.Stars}
                        max={5}
                        iconWidth={width * 0.03}
                        iconHeight={width * 0.03}
                      />
                    ) : null}
                  </View>
                  <View style={styles.descStyle}>
                    <Text style={styles.descriptionText}>{item.Variety}</Text>
                  </View>
                  <View style={styles.name}>
                    <Text style={styles.itemText2}>{item.Country}</Text>
                  </View>
                </View>
              </View>
            </View>
            </View>
          )}
          onEndReachedThreshold={0.2}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text>No item selected...</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  const data = state.saveReducer;
  return {data};
};

export default connect(mapStateToProps, {})(UserScreen);
