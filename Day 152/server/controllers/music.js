export const getMusic = async (req, res) => {
    try {
        const MUSIC = {
            name: 'Link park',
            song: 'Crawling',
            time: '3:38'
        }
        res.status(200).json(MUSIC)
    } catch (error) {
        res.status(500).json({error: error})
    }
}