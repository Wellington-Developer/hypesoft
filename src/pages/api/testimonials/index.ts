import { NextApiHandler } from 'next'
import { testimonials } from '@/components/utils/testimonials';

const handler: NextApiHandler = (req, res) => {
    res.json(testimonials)
}

export default handler;