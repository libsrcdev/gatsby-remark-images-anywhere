import mdast1 from './fixtures/mdast1.json';
import { extractAllImgNodesFromMdast } from '../index';

test('Should extract mdsat1.json images correctly', () => {
  expect(mdast1).toEqual(expect.any(Object));
  expect(extractAllImgNodesFromMdast(mdast1)).toHaveLength(6);
});
