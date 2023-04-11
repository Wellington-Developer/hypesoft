import { NextApiHandler } from 'next'
import { works } from '@/components/utils/works';

const handler: NextApiHandler = (req, res) => {
    res.json(works)
}

export default handler;