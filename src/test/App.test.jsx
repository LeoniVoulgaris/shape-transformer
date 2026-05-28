import { moveShape } from '../App'

const initial = {
  'top-left': ['shape-1', 'shape-2'],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

test('moves a shape from one quadrant to another', () => {
  const result = moveShape(initial, 'shape-1', 'top-left', 'top-right')
  expect(result['top-left']).not.toContain('shape-1')
  expect(result['top-right']).toContain('shape-1')
})

