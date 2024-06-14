import React from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Pastikan Anda menginstal expo/vector-icons jika menggunakan Expo
import CustomButton from "../components/customButton"; // Pastikan jalur impor ini sesuai dengan struktur proyek Anda

// Komponen untuk menampilkan setiap catatan dalam bentuk kartu
const NoteCard = ({ item, setCurrentPage, deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <Text style={styles.timestamp}>Dibuat: {item.createdAt}</Text>
    <Text style={styles.timestamp}>Diupdate: {item.updatedAt}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentPage({ page: "edit", note: item });
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
);

// Komponen untuk menampilkan halaman utama dengan daftar catatan
const Home = ({ noteList, setCurrentPage, deleteNote }) => (
  <View style={styles.container}>
    <FlatList showsVerticalScrollIndicator={false} data={noteList} renderItem={({ item }) => <NoteCard item={item} setCurrentPage={setCurrentPage} deleteNote={deleteNote} />} keyExtractor={(item) => item.id.toString()} />
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => {
        setCurrentPage({ page: "add" });
      }}
    >
      <Ionicons name="add" size={32} color="white" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80, // Tambahkan padding untuk memberi ruang bagi tombol plus
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: "#757575",
    marginVertical: 2,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
