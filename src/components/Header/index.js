import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          {/* <Icon
            style={styles.leftIcon}
            name="menu"
            type="MaterialCommunityIcons"
          /> */}
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            Alpha App
          </Text>
        </View>
        <TouchableOpacity style={styles.rightIconButton}>
          {/* <Icon
            style={styles.rightIcon}
            name="dots-vertical"
            type="MaterialCommunityIcons"
          /> */}
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,77,64,1)",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    opacity: 1
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    left: 72,
    bottom: 19,
    position: "absolute"
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 18,
    color: "#FFFFFF"
  },
  rightIconButton: {
    top: 5,
    right: 5,
    position: "absolute",
    alignItems: "center",
    padding: 11
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});
