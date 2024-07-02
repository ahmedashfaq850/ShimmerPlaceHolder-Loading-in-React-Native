import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const SkeletonLoader = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 },
          { id: 10 },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <ShimmerPlaceHolder style={styles.image}></ShimmerPlaceHolder>
            <View style={styles.itemContainer}>
              <ShimmerPlaceHolder style={styles.textBox}></ShimmerPlaceHolder>
              <ShimmerPlaceHolder style={styles.priceBox}></ShimmerPlaceHolder>
              <ShimmerPlaceHolder style={styles.button}></ShimmerPlaceHolder>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SkeletonLoader;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#9e9e9e",
  },
  textBox: {
    width: 200,
    height: 20,
    backgroundColor: "#9e9e9e",
  },
  priceBox: {
    width: 100,
    height: 20,
    backgroundColor: "#9e9e9e",
    marginTop: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#9e9e9e",
    width: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  itemContainer: {
    marginLeft: 10,
  },
});
