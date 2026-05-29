import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Space, Spin, Typography } from "antd"
import Search from "./components/Search"
import Photos from "./components/Photos"
import api from './services/axiosclient'
import { getPhotos, getSearchedPhotos, searchPhotosRequest } from "./redux/slices/photosSlice"

const { Title, Text } = Typography

function App() {
  const [localSearch, setLocalSearch] = useState("")
  const searchText = useSelector(state => state.photos.searchText)
  const photos = useSelector(state => state.photos.filteredPhotos)
  const loading = useSelector(state => state.photos.loading)
  const error = useSelector(state => state.photos.error)

  const dispatch = useDispatch()
  const inputRef = useRef()

  useEffect(() => {
    inputRef?.current?.focus()

    dispatch(getPhotos())
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSearchedPhotos(localSearch));
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearch, dispatch]);

  const handleSearch = (value) => {
    setLocalSearch(value);
  };
  const searchHandler = () => {
    dispatch(searchPhotosRequest(localSearch))
  }



  return (
    <>
      <Title level={4}>Photos App</Title>
      <Space orientation="vertical">
        <Search ref={inputRef} value={localSearch} onChange={handleSearch} />
        <Button onClick={searchHandler}>Search Photos</Button>
        <Photos data={photos} />
        {photos.length === 0 && <Text>No characters are there...</Text>}
      </Space>
    </>
  )
}

export default App