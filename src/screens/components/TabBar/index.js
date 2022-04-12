import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
const tabConfig = [
  { name: 'Home', id: '1' },
  { name: 'User Details', id: '2' },
];

const TabBar = ({ onTabPress }) => {
  const dispatch = useDispatch();
 const [activeTab, setActiveTab] = useState('1');

  const handleTab = (id) => {
    setActiveTab(id);
    onTabPress(id);
  };

  return (
    <View style={styles.tabView}>
      {tabConfig.map((item) => (
        <TouchableOpacity
          onPress={() => handleTab(item.id)}
          key={item.id}
          style={[
            styles.tab,
            { backgroundColor: activeTab === item.id ? '#FAA311' : '#fff' },
          ]}>
          <Text style={[styles.label, { color: activeTab === item.id ? '#FFF' : '#000' }]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;
