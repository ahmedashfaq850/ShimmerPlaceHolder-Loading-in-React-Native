import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

interface Product {
  category: string;
  description: string;
  id: 1;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    const productsJson = await products.json();
    setData(productsJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return <SkeletonLoader />;
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={(item: Product) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
            <View style={styles.itemContainer}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <TouchableOpacity style={styles.button}>
                <Text>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
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
    backgroundColor: "lightblue",
    width: 100,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  itemContainer: {
    marginLeft: 10,
  },
});
