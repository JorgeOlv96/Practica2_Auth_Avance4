import React, { useState, useEffect } from "react"
import { IconButton } from "react-native-paper"
import { addFavoritosApi, isFavoriteApi, removeFavoriteApi } from "../../api/favorito"

export default function Favoritos(props) {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadFavorite, setReloadFavorite] = useState(false)
  const onReloadFavorite = () => setReloadFavorite(!reloadFavorite)


  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(id)
      if (response) setIsFavorite(true)
      else setIsFavorite(false)
    })()
  }, [id, reloadFavorite])

  const addFavoritos = async () => {
    try {
      await addFavoritosApi(id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in addFavoritos", error)
    }
  }

  const removeFavoritos = async () => {
    try {
      await removeFavoriteApi(id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in removeFavorites: ", error)
    }
  }

  const iconColor = isFavorite ? "#f00" : "#fff"
  return (
    <IconButton
      icon="heart"
      iconColor={iconColor}
      size={50}
      onPress={isFavorite ? removeFavoritos : addFavoritos}
    />
  )
}