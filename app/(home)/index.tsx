import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useApi from "../hooks/useApi";
import PostCard from "../components/PostCard"; // Import the PostCard component
import styles from "./indexStyles"; // Import the styles for the SearchScreen

const SearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const { data, loading, error, fetchData } = useApi();

  const handleSearch = () => {
    if (query.trim()) {
      fetchData(query);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Search:</Text>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Enter search term"
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.url} // Use the URL as the key
      />
    </View>
  );
};

export default SearchScreen;
