// components/PostCard.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

// Define the structure of an article object from the API
interface Article {
  title: string;
  description: string;
  url: string;
}

interface PostCardProps {
  post: Article; // Use the Article type for the post prop
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(post.url)}>
        <Text style={styles.link}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
});

export default PostCard;
