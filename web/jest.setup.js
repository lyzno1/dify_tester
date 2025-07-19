import "@testing-library/jest-dom";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
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
}));

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

// Mock next/image
jest.mock("next/image", () => {
  const MockImage = ({ src, alt, ...props }) => {
     
    return <img src={src} alt={alt} {...props} />;
  };
  MockImage.displayName = "MockImage";
  return MockImage;
});

// Mock next/link
jest.mock("next/link", () => {
  const MockLink = ({ children, ...props }) => {
    return <a {...props}>{children}</a>;
  };
  MockLink.displayName = "MockLink";
  return MockLink;
});

// Global fetch mock
global.fetch = jest.fn();

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
});
