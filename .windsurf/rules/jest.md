---
trigger: model_decision
description: Read when configuring Jest testing framework, writing frontend tests, or organizing test suites for Next.js/React applications.
globs:
---
# Jest Testing Framework Rules

## Command Classification

### Core Commands
- `pnpm test` - Run all tests in watch mode
- `pnpm test:ci` - Run all tests once (CI mode)
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report

### Specific Test Commands
- `pnpm test -- --testNamePattern="Button"` - Run tests matching pattern
- `pnpm test -- --testPathPattern="components"` - Run tests in specific directory
- `pnpm test -- --watchAll=false` - Run tests once without watch mode

## Project Structure

### Standard Layout
```
├── app/
├── components/
├── lib/
├── tests/
│   ├── __tests__/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── setup.ts
│   └── mocks/
├── jest.config.js
└── package.json
```

### File Naming Rules
- Test files: `*.test.ts`, `*.test.tsx`, or `*.__test__.ts`
- Test files: Place `__tests__/` directory next to source files
- Utilities: `test-utils.tsx` for shared testing utilities

## Configuration

### Essential jest.config.js
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.test.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

### Essential jest.setup.js
```javascript
import '@testing-library/jest-dom'

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}))
```

## Testing Patterns

### Component Testing
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button'

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button')
    button.click()
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### React Hook Testing
```typescript
import { renderHook, act } from '@testing-library/react'
import { useCounter } from '@/hooks/useCounter'

describe('useCounter', () => {
  it('increments counter', () => {
    const { result } = renderHook(() => useCounter())
    
    act(() => {
      result.current.increment()
    })
    
    expect(result.current.count).toBe(1)
  })
})
```

### API Testing
```typescript
import { renderHook, waitFor } from '@testing-library/react'
import { useApiData } from '@/hooks/useApiData'

// Mock fetch
global.fetch = jest.fn()

describe('useApiData', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('fetches data successfully', async () => {
    const mockData = { id: 1, name: 'Test' }
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const { result } = renderHook(() => useApiData('/api/test'))

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData)
    })
  })
})
```

## Essential Workflows

### Project Setup
```bash
# Install dependencies
pnpm add -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest

# Create config files
touch jest.config.js jest.setup.js

# Run initial tests
pnpm test
```

### Package.json Scripts
```json
{
  "scripts": {
    "test": "jest --watch",
    "test:ci": "jest --ci --coverage",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Test Execution Patterns
```bash
pnpm test                    # Watch mode
pnpm test:ci                 # CI mode
pnpm test -- --testNamePattern="Button"    # Filter by name
pnpm test -- --testPathPattern="components"  # Filter by path
pnpm test -- --coverage      # Coverage report
pnpm test -- --verbose       # Detailed output
```

## Decision Matrix

| Scenario | Command/Pattern | Rationale |
|----------|----------------|-----------|
| Component testing | `@testing-library/react` | User-centric testing |
| Hook testing | `renderHook` | Isolated hook testing |
| API mocking | `jest.mock()` | External dependency isolation |
| Coverage | `--coverage` | Code coverage metrics |
| CI/CD | `--ci` | Non-interactive mode |

## Testing Utilities

### Test Utilities File
```typescript
// tests/test-utils.tsx
import { render } from '@testing-library/react'

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
```

### Mock Data
```typescript
// tests/mocks/data.ts
export const mockUser = {
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
}

export const mockApiResponse = {
  data: mockUser,
  status: 200,
}
```

## Anti-Patterns

### AVOID
- Testing implementation details
- Over-mocking simple components
- Tests without assertions
- Complex test setup in individual tests

### FORBIDDEN
- Testing third-party libraries
- Tests that depend on execution order
- Production code in test files
- Hard-coded test data without proper mocking