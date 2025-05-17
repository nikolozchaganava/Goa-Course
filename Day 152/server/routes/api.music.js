import express from 'express'
import { getMusic } from '../controllers/music.js'

const apiMusicRoutes = express.Router()

apiMusicRoutes.get('/get-one-music', getMusic)

export { apiMusicRoutes }