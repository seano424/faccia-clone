import { LINKS } from 'lib/links'

export default (req, res) => {
  res.status(200).json(LINKS)
}
