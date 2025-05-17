import express from 'express'
import { apiMusicRoutes } from './api.music.js'

const apiRoutes = express.Router()

apiRoutes.use('/music', apiMusicRoutes)

export {apiRoutes}