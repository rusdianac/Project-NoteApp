import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

// Komponen untuk menambah catatan baru
const AddNote = ({ setCurrentPage, addNote }) => {
  const [title, setTitle] = useState(""); // State untuk judul catatan baru
  const [desc, setDesc] = useState(""); // State untuk deskripsi catatan baru

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput text={title} onChange={setTitle} label="Judul" placeholder="Judul" numberOfLines={1} multiline={false} />
      <CustomTextInput text={desc} onChange={setDesc} label="Deskripsi" placeholder="Deskripsi" multiline numberOfLines={4} />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Simpan"
          width="100%"
          onPress={() => {
            addNote(title, desc);
            setCurrentPage({ page: "home" });
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton backgroundColor="#DDDDDD" color="#203239" text="Kembali ke Home" width="100%" onPress={() => setCurrentPage({ page: "home" })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
