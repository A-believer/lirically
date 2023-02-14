import { useSelector } from 'react-redux'
import { Routes, Route } from "react-router-dom"
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components'

import {ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts} from './pages'

function App() {

  return (
    <main>
      <Sidebar />
      <div>
        <Searchbar />
        
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Discover/>}/>
              <Route path="/top-artists" element={<TopArtists/>}/>
              <Route path="/top-charts" element={<TopCharts/>}/>
              <Route path="/around-you" element={<AroundYou/>}/>
              <Route path="/artists/:id" element={<ArtistDetails/>}/>
              <Route path="/song/:songid" element={<SongDetails/>}/>
              <Route path="/search/:searchTerm" element={<Search/>}/>
            </Routes>
          </div>
          <div>
            <TopPlay/>
          </div>
        </div>
      </div>
      

      {activeSong?.title && (
        <div>
          <MusicPlayer/>
        </div>
      )}
    </main>
  )
}

export default App
