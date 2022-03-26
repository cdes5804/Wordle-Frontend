import { generateEmojiGrid } from './share'

const mockSolutionGetter = jest.fn()
jest.mock('./words', () => ({
  ...jest.requireActual('./words'),
  get solution() {
    return mockSolutionGetter()
  },
}))
