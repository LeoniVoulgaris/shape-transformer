- **React** — chosen for its component model, which maps naturally to the shape/quadrant structure of this task
- **Vite** — fast dev server and minimal config overhead



## Running the Project

```bash
# Clone the repository
git clone https://github.com/LeoniVoulgaris/shape-transformer
cd shape-transformer

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Functionality

The app renders four quadrants in a 2x2 grid. Five circles are placed in the top-left quadrant on load. Any shape can be dragged into any other quadrant, where it transforms into that quadrant's associated shape:

| Quadrant | Shape |
|---|---|
| Top Left | Circle |
| Top Right | Hexagon |
| Bottom Left | Square |
| Bottom Right | Triangle |

Dropping a shape back into its current quadrant leaves it unchanged.

## Design Decisions

- **State lives in `App`**:
All quadrant data is managed in a single `useState` object at the top level. This makes cross-quadrant communication straightforward and keeps the quadrant/shape components stateless and focused on rendering.

- **Shapes are identified by string ids**:
Each shape is tracked by an id (e.g. `"shape-1"`). The shape type is not stored in state instead it is derived from whichever quadrant the shape is in. This means transformation on drop is implicit, moving a shape to a new quadrant automatically renders it as the correct type.

- **SVG for shape rendering**:
Shapes are rendered as inline SVGs wrapped in a draggable `div`. This avoids the border/clip-path issues that i encountered with CSS-only approaches for irregular shapes like triangles and hexagons.

- **Native HTML drag-and-drop API**:
No external library. `dataTransfer` is used to pass the shape id and origin quadrant between the drag and drop events. This keeps the bundle small and avoids an unnecessary dependency for a task of this scope.

## Trade-offs

- **No free positioning**:
Shapes snap into a flex layout within each quadrant rather than being freely placeable. Free positioning was considered but adds significant complexity (storing coordinates, calculating drop offsets) that felt out of scope for the time available.

- **No drag-and-drop library**:
Using `react-dnd` would give better accessibility and touch support out of the box, but adds a dependency and abstraction layer that obscures the core logic. Given the brief favoured clarity, the native API felt more appropriate.

## Content Security Policy
-**default-src** 'self' locks all resource loading to the same origin.
-**style-src** includes 'unsafe-inline' because Vite injects styles inline in development.
No external sources are whitelisted since the app has no third-party dependencies at runtime.

## Testing
A single unit test is present that cals the moveShape function with a shape-id, source quadrant and destination quadrant.
Asserts the after the function is called, the shape is not present in the source quadrant and present in the destination quadrant.

Use npm test to run the test
