import { View, Text } from "react-native"
import React from "react"
import { styles } from "./CharacterDetail.styles"
import { Avatar, IconButton } from "react-native-paper"
import Favoritos from "../../components/Favoritos/Favoritos"


export default function CharacterDetail(props) {
  const {
    navigation,
    route: { params },
  } = props
  // console.log(params.id, params.name)

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar.Image
          size={200}
          source={{ uri: params.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{params.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Especie:</Text>
        <Text style={styles.value}>{params.species}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Estado:</Text>
        <Text style={styles.value}>{params.status}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Género:</Text>
        <Text style={styles.value}>{params.gender}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Origen:</Text>
        <Text style={styles.value}>{params.origin}</Text>
      </View>
      <View style={styles.row}>
        <Favoritos id={params.id} />
      </View>
    </View>
  );
};
